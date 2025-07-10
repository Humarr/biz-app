// api/admin/analytics/route
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const start =
    url.searchParams.get("start") ||
    new Date(Date.now() - 6.048e8).toISOString(); // last 7 run
  const end = url.searchParams.get("end") || new Date().toISOString();

  const device = url.searchParams.get('device') || undefined
const country = url.searchParams.get('country') || undefined
const action = url.searchParams.get('action') || undefined
const minDuration = parseInt(url.searchParams.get('minDuration') || '0')
const maxDuration = parseInt(url.searchParams.get('maxDuration') || '999999')


  // const sessions = await prisma.visitorSession.findMany({
  //   where: { enteredAt: { gte: new Date(start), lte: new Date(end) } },
  //   select: { enteredAt: true, leftAt: true, pathname: true },
  //   orderBy: { enteredAt: "asc" },
  // });

  // const sessions = await prisma.visitorSession.findMany({
  //   where: { enteredAt: { gte: new Date(start), lte: new Date(end) }, device, country, action, minDuration, maxDuration },
  //   include: {
  //     userData: true,
  //     pageViews: true,
  //     downloadLogs: true,
  //     payment: true,
  //   },
  // });

  const sessions = await prisma.visitorSession.findMany({
    where: {
      enteredAt: { gte: new Date(start), lte: new Date(end) },
      ...(device ? { device } : {}),
      ...(country ? { country } : {}),
      ...(action === 'clickedPay' ? { clickedPayAt: { not: null } } : {}),
      ...(action === 'filledForm' ? { userData: { isNot: null } } : {}),
      ...(action === 'paid' ? { payment: { isNot: null } } : {}),
      ...(action === 'downloaded' ? { downloadLogs: { some: {} } } : {})
    },
    include: {
      userData: true,
      pageViews: true,
      downloadLogs: true,
      payment: true
    },
    orderBy: { enteredAt: 'asc' }
  })

  
  const filteredSessions = sessions.filter(s => {
    if (!s.leftAt) return true
    const durationSec = (new Date(s.leftAt).getTime() - new Date(s.enteredAt).getTime()) / 1000
    return durationSec >= minDuration && durationSec <= maxDuration
  })

  const pageViews = await prisma.pageView.findMany({
    where: {
      viewedAt: { gte: new Date(start), lte: new Date(end) },
      leftAt: { not: null },
    },
    select: { viewedAt: true, leftAt: true },
  });
  
  
  const funnel = {
    landed: filteredSessions.length,
    clickedPay: filteredSessions.filter(s => s.clickedPayAt !== null).length,
    filledForm: filteredSessions.filter(s => s.userData !== null).length,
    paid: filteredSessions.filter(s => s.payment !== null && s.payment.status === 'success').length,
    downloaded: filteredSessions.filter(s => s.downloadLogs.length > 0).length,
  };
  
  const topPages = await prisma.pageView.groupBy({
    by: ["path"],
    where: { viewedAt: { gte: new Date(start), lte: new Date(end) } },
    _count: { _all: true },
    orderBy: { _count: { path: "desc" } },
    take: 10,
  });
  
  return NextResponse.json({
    sessions: filteredSessions,
    topPages,
    pageViews,
    counts: funnel
  });
}  