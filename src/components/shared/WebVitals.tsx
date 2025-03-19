"use client";

import { useReportWebVitals } from "next/web-vitals";

export function WebVitals() {
  useReportWebVitals((metric) => {
    switch (metric.name) {
      case "LCP": {
        console.log(metric);
      }
      default: {
        console.log(metric);
      }
    }
  });

  return null;
}
