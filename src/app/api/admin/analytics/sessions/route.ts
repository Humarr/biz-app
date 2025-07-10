/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const start =
      url.searchParams.get("start") ??
      new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
    const end = url.searchParams.get("end") ?? new Date().toISOString();
    const path = url.searchParams.get("path") || undefined;
    const page = parseInt(url.searchParams.get("page") || "1");
    const pageSize = parseInt(url.searchParams.get("pageSize") || "10");

    if (page < 1 || pageSize < 1 || pageSize > 100) {
      return NextResponse.json(
        { error: "Invalid pagination params" },
        { status: 400 }
      );
    }

    const whereClause: any = {
      enteredAt: {
        gte: new Date(start),
        lte: new Date(end),
      },
    };

    if (path) {
      whereClause.pathname = {
        contains: path,
        mode: "insensitive",
      };
    }

    const [sessions, totalCount] = await Promise.all([
      prisma.visitorSession.findMany({
        where: whereClause,
        orderBy: { enteredAt: "desc" },
        skip: (page - 1) * pageSize,
        take: pageSize,
        select: {
          id: true,
          enteredAt: true,
          leftAt: true,
          pathname: true,
        },
      }),
      prisma.visitorSession.count({ where: whereClause }),
    ]);

    return NextResponse.json({ sessions, totalCount });
  } catch (error) {
    console.error("Error fetching sessions:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
