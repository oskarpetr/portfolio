import "./globals.css";
import { rootMetadata } from "@/utils/seo";
import App from "@/components/layout/App";
import { PropsWithChildren } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      {/* <head>
        <script src="https://unpkg.com/react-scan/dist/auto.global.js" />
      </head> */}
      <body>
        <App>{children}</App>

        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

export function generateMetadata() {
  return rootMetadata();
}
