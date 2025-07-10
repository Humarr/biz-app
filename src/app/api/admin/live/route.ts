import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const now = new Date()
  const recent = new Date(now.getTime() - 15 * 60 * 1000) // 15 minutes ago

  const sessions = await prisma.visitorSession.findMany({
    where: {
      enteredAt: { gte: recent },
      leftAt: null
    },
    include: {
      userData: true,
      payment: true,
      downloadLogs: true,
      pageViews: true
    },
    orderBy: { enteredAt: 'desc' }
  })

  return NextResponse.json({ sessions })
}
