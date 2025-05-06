import { getInvoice } from "@/utils/cms";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function GET(req: NextRequest, { params }: Props) {
  const { slug } = await params;

  const invoice = await getInvoice(slug);

  if (!invoice || !invoice.invoice) {
    return new Response("Invoice not found", { status: 404 });
  }

  const response = await fetch(invoice.invoice);
  if (!response.ok) {
    return new Response("Failed to fetch PDF", { status: 500 });
  }

  const fileBuffer = await response.arrayBuffer();

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="Invoice for ${encodeURIComponent(invoice.client)}.pdf"`,
    },
  });
}
