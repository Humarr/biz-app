import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function getDevice(userAgent: string = '') {
  if (/mobile/i.test(userAgent)) return 'mobile';
  if (/tablet/i.test(userAgent)) return 'tablet';
  return 'desktop';
}

export async function POST(req: NextRequest) {
  const { sessionId, userAgent, pathname } = await req.json();

  const forwarded = req.headers.get('x-forwarded-for');
  const ipAddress = forwarded?.split(',')[0] ?? 'unknown';

  let country = null;
  let city = null;

  try {
    const geoRes = await fetch(`http://ip-api.com/json/${ipAddress}`);
    const geoData = await geoRes.json();
    if (geoData.status === 'success') {
      country = geoData.country;
      city = geoData.city;
    }
  } catch (err) {
    console.error("Geo IP fetch failed", err);
  }

  try {
    await prisma.visitorSession.create({
      data: {
        id: sessionId,
        ipAddress,
        userAgent,
        device: getDevice(userAgent),
        country,
        city,
        enteredAt: new Date(),
        pathname
      },
    });
  } catch (error) {
    console.error("Error starting session:", error);
    return NextResponse.json({ error: 'Failed to start session' }, { status: 500 });
  }

  return NextResponse.json({ status: 'started' });
}
