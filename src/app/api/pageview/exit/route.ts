import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  const { sessionId, path, leftAt } = await req.json()
  if (!sessionId || !path || !leftAt)
    return NextResponse.json({ error: 'Missing params' }, { status: 400 })

  const pv = await prisma.pageView.findFirst({
    where: { sessionId, path, leftAt: null },
    orderBy: { viewedAt: 'desc' },
  })
  if (!pv) return NextResponse.json({ error: 'PageView not found' }, { status: 404 })

  await prisma.pageView.update({
    where: { id: pv.id },
    data: { leftAt: new Date(leftAt) },
  })
  return NextResponse.json({ status: 'updated' })
}
