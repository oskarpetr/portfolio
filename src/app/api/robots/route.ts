import { NextResponse } from "next/server";

export async function GET() {
  const robotsContent = `User-agent: *
Allow: /
Disallow: /private/
Sitemap: https://oskarpetr.com/sitemap.xml`;

  return new NextResponse(robotsContent, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
