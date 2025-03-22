import "./globals.css";
import { rootMetadata } from "@/utils/seo";
import App from "@/components/layout/App";
import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      {/* <head>
        <script src="https://unpkg.com/react-scan/dist/auto.global.js" />
      </head> */}
      <body>
        <App>{children}</App>
      </body>
    </html>
  );
}

export function generateMetadata() {
  return rootMetadata();
}
