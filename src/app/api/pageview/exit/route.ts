
// /api/pageview/exit/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  const { sessionId, path } = await req.json()
  if (!sessionId || !path)
    return NextResponse.json({ error: 'Missing params' }, { status: 400 })
  const leftAt =  new Date().toISOString()
  const pv = await prisma.pageView.findFirst({
    where: { sessionId, path, leftAt: null },
    orderBy: { viewedAt: 'desc' },
  })
  console.log("page view in exit: ", pv)
  if (!pv) return NextResponse.json({ error: 'PageView not found' }, { status: 404 })

  await prisma.pageView.update({
    where: { id: pv.id },
    data: { leftAt: leftAt },
  })
  return NextResponse.json({ status: 'updated' })
}
