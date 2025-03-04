import "./globals.css";
import App from "@/components/layout/App";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
