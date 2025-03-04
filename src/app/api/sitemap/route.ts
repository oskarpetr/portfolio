import { getProjectSlugs } from "@/utils/cms";
import { NextResponse } from "next/server";

export async function GET() {
  const slugs = await getProjectSlugs();
  let projectsXml = "";

  slugs.forEach((slug) => {
    projectsXml += `
      <url>
        <loc>https://oskarpetr.com/projects/${slug}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
    `;
  });

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://oskarpetr.com/</loc>
      <changefreq>monthly</changefreq>
      <priority>1</priority>
    </url>
    ${projectsXml}
  </urlset>
  `;

  return new NextResponse(sitemapContent, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
