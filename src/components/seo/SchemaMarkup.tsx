"use client";

import React from "react";
import Script from "next/script";
import { avatarUrl, baseUrl } from "@/utils/seo";
import { usePathname } from "next/navigation";
import { socialSites } from "@/data/footer";

export default function SchemaMarkup() {
  const path = usePathname();

  const schema = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: "Oskar Petr",
    jobTitle: "Web developer",
    description: "Web developer, web designer, and UI/UX specialist.",
    image: avatarUrl,
    url: `${baseUrl}${path}`,
    sameAs: [baseUrl, socialSites.map((site) => site.url)],
  };

  const schemaString = JSON.stringify(schema);

  return (
    <Script
      id="json-ld-schema"
      key="json-ld-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: schemaString }}
      strategy="afterInteractive"
    />
  );
}
