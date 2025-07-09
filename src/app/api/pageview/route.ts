// /api/pageview/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  const { sessionId, path } = await req.json()

  if (!sessionId || !path) {
    return NextResponse.json({ error: 'Missing sessionId or path' }, { status: 400 })
  }

  // const session = await prisma.visitorSession.findUnique({
  //   where: { id: sessionId },
  // })

  // if (!session) {
  //   return NextResponse.json({ error: 'Session not found' }, { status: 404 })
  // }
  try {
    await prisma.pageView.create({
      data: {
        sessionId,
        path,
        viewedAt:  new Date()
      },
    })
  } catch (error) {
    console.error("Failed to create page view:", error)
    return NextResponse.json({ error: 'Failed to create page view' }, { status: 500 })
  }

  return NextResponse.json({ status: 'page view recorded' })
}
