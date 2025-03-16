import "./globals.css";
import { rootMetadata } from "@/utils/seo";
import App from "@/components/layout/App";
import { PropsWithChildren } from "react";
// import { WebVitals } from "@/components/shared/WebVitals";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      {/* <head>
        <script src="https://unpkg.com/react-scan/dist/auto.global.js" />
      </head> */}
      <body>
        <App>{children}</App>
        {/* <WebVitals /> */}
      </body>
    </html>
  );
}

export function generateMetadata() {
  return rootMetadata();
}
