import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'



export async function POST(req: NextRequest) {
  const { name, email, phone, sessionId } = await req.json()

  if (!name || !email || !phone || !sessionId) {
    return NextResponse.json({ success: false, error: 'Missing required fields.' }, { status: 400 })
  }

  try {
    await prisma.userData.upsert({
      where: { sessionId },
      update: { name, email, phone },
      create: {
        name,
        email,
        phone,
        sessionId,
      },
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ success: false, error: 'Database error.' }, { status: 500 })
  }
}
