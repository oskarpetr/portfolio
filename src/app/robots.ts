import { baseUrl } from "@/utils/seo";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/clients/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
