import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'



export async function POST(req: NextRequest) {
  const { sessionId, ipAddress, userAgent } = await req.json()

  await prisma.visitorSession.create({
    data: {
      id: sessionId,
      ipAddress,
      userAgent,
      enteredAt: new Date(),
    },
  })

  return NextResponse.json({ status: 'started' })
}
