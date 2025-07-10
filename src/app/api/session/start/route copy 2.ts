import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { sessionId, userAgent, pathname } = await req.json();

  // Extract IP from headers
  const forwarded = req.headers.get('x-forwarded-for');
  const ipAddress = forwarded?.split(',')[0] ?? 'unknown';

  console.log("ipAddress: ", ipAddress)
  try {
    await prisma.visitorSession.create({
      data: {
        id: sessionId,
      ipAddress,
      userAgent,
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
