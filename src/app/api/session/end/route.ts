import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
    const { sessionId } = await req.json()
    console.log("sessionId: ", sessionId)
  await prisma.visitorSession.update({
    where: { id: sessionId },
    data: { leftAt: new Date() },
  })

  return NextResponse.json({ status: 'ended' })

}