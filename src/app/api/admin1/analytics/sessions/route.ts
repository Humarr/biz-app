// app/api/analytics/sessions/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    sessions: [
      {
        id: "sess_123",
        country: "Nigeria",
        city: "Lagos",
        device: "Mobile",
        enteredAt: "12:01PM",
        leftAt: "12:05PM",
        paymentStatus: "paid",
        pathname: "/sales-page",
      },
      {
        id: "sess_124",
        country: "UK",
        city: "London",
        device: "Desktop",
        enteredAt: "12:10PM",
        leftAt: null,
        paymentStatus: "not_paid",
        pathname: "/checkout",
      },
    ],
  });
}
