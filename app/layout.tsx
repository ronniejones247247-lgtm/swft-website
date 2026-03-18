import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";

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
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
