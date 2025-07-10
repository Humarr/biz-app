// app/api/analytics/metrics/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    metrics: [
      { label: "Today’s Sessions", value: 23 },
      { label: "Avg. Time On Site", value: "3m 21s" },
      { label: "Paid Conversions", value: 6 },
      { label: "Downloads", value: 9 },
    ],
  });
}
