import { NextRequest, NextResponse } from "next/server";
export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/admin/analytics")) {
    const auth = req.headers.get("authorization");
    const valid =
      "Basic " +
      Buffer.from(
        `${process.env.ADMIN_USER}:${process.env.ADMIN_PASS}`
      ).toString("base64");
    if (auth !== valid) {
      return new Response("Unauthorized", {
        status: 401,
        headers: { "WWW-Authenticate": 'Basic realm="Admin"' },
      });
    }
  }
  return NextResponse.next();
}
