import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const start =
    url.searchParams.get("start") ||
    new Date(Date.now() - 6.048e8).toISOString(); // last 7 run
  const end = url.searchParams.get("end") || new Date().toISOString();

  const sessions = await prisma.visitorSession.findMany({
    where: { enteredAt: { gte: new Date(start), lte: new Date(end) } },
    select: { enteredAt: true, leftAt: true, pathname: true },
    orderBy: { enteredAt: "asc" },
  });
  const pageViews = await prisma.pageView.findMany({
    where: {
      viewedAt: { gte: new Date(start), lte: new Date(end) },
      leftAt: { not: null },
    },
    select: { viewedAt: true, leftAt: true },
  });
  // const topPages = await prisma.pageView.groupBy({
  //   by: ["path"],
  //   where: { viewedAt: { gte: new Date(start), lte: new Date(end) } },
  //   _count: { _all: true },
  //   orderBy: { _count: { _all: "desc" } },
  //   take: 10,
  // });

  const topPages = await prisma.pageView.groupBy({
    by: ["path"],
    where: { viewedAt: { gte: new Date(start), lte: new Date(end) } },
    _count: { _all: true },
    orderBy: {
      _count: {
        path: "desc"
      }
    },
    take: 10,
  });

  const counts = {
    forms: await prisma.userData.count({
      where: { createdAt: { gte: new Date(start), lte: new Date(end) } },
    }),
    payments: await prisma.payment.count({
      where: { paidAt: { gte: new Date(start), lte: new Date(end) } },
    }),
    downloads: await prisma.downloadLog.count({
      where: { downloadedAt: { gte: new Date(start), lte: new Date(end) } },
    }),
  };
  return NextResponse.json({ sessions, pageViews, topPages, counts });
}
