import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url)
    const sessionId = url.searchParams.get('sessionId')

    if (!sessionId) {
      return NextResponse.json({ error: 'Missing sessionId' }, { status: 400 })
    }

    const session = await prisma.visitorSession.findUnique({
      where: { id: sessionId },
      select: {
        id: true,
        enteredAt: true,
        leftAt: true,
        pathname: true,
        ipAddress: true,
        userAgent: true,
        clickedPayAt: true,
      },
    })

    if (!session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    }

    // Get related userData, payments, downloads, pageViews
    const [userData, payments, downloads, pageViews] = await Promise.all([
      prisma.userData.findUnique({
        where: { sessionId },
        select: { name: true, email: true, phone: true },
      }),
      prisma.payment.findMany({
        where: { sessionId },
        select: { paystackRef: true, amount: true, status: true, paidAt: true },
      }),
      prisma.downloadLog.findMany({
        where: { sessionId },
        select: { downloadedAt: true },
      }),
      prisma.pageView.findMany({
        where: { sessionId },
        select: { id: true, path: true, viewedAt: true, leftAt: true },
        orderBy: { viewedAt: 'asc' },
      }),
    ])

    return NextResponse.json({
      session,
      userData,
      payments,
      downloads,
      pageViews,
    })
  } catch (error) {
    console.error('Error fetching session details:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
