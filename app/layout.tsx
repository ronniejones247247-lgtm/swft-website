import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "SouthWestern Foam Technologies | Custom Foam Solutions",
  description: "High-quality foam solutions tailored to your exact needs. Cut-to-size, CNC machinery, die pressing, and custom engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-RNWMHJY60N" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RNWMHJY60N');
        `}</Script>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
