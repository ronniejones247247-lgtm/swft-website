import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SouthWestern Foam Technologies | Custom Foam Solutions",
  description: "High-quality foam solutions tailored to your exact needs. Cut-to-size, CNC machining, die pressing, and custom engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
