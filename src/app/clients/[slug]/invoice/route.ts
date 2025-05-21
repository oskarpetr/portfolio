import { getClient } from "@/utils/cms";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function GET(req: NextRequest, { params }: Props) {
  const { slug } = await params;

  const client = await getClient(slug);

  if (!client || !client.invoice) {
    return NextResponse.redirect(new URL("/404", req.url));
  }

  const response = await fetch(client.invoice);
  if (!response.ok) {
    return new Response("Failed to fetch PDF", { status: 500 });
  }

  const fileBuffer = await response.arrayBuffer();

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="Invoice for ${encodeURIComponent(client.client)}.pdf"`,
    },
  });
}
