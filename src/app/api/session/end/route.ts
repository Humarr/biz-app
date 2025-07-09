import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
    const { sessionId } = await req.json()
    console.log("sessionId: ", sessionId)

    const visitorSession = await prisma.visitorSession.findUnique({
      where: { id: sessionId },
    })
    if (!visitorSession) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    }
  await prisma.visitorSession.update({
    where: { id: sessionId },
    data: { leftAt: new Date() },
  })

  return NextResponse.json({ status: 'ended' })

}