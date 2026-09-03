import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import { QuoteProvider } from "@/components/QuoteContext";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.swfoamtech.com"),
  title: "SouthWestern Foam Technologies | Custom Foam Solutions",
  description: "Custom foam fabrication in Belton, TX — cut-to-size, CNC machining, die pressing, lamination, and JIT delivery across the US and Mexico. Family-owned for 30+ years.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "SouthWestern Foam Technologies",
    title: "SouthWestern Foam Technologies | Custom Foam Solutions",
    description: "Custom foam fabrication in Belton, TX — cut-to-size, CNC machining, die pressing, lamination, and JIT delivery across the US and Mexico.",
    url: "https://www.swfoamtech.com",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SouthWestern Foam Technologies delivery trucks" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SouthWestern Foam Technologies | Custom Foam Solutions",
    description: "Custom foam fabrication in Belton, TX — cut-to-size, CNC machining, die pressing, lamination, and JIT delivery across the US and Mexico.",
    images: ["/og-image.jpg"],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.swfoamtech.com/#business",
  name: "SouthWestern Foam Technologies",
  description:
    "Family-owned custom foam fabricator in Belton, TX. Cut-to-size, CNC 3D cutting, die pressing, lamination, and just-in-time delivery throughout the United States and Mexico.",
  url: "https://www.swfoamtech.com",
  telephone: "+1-254-939-6379",
  email: "info@swfoamtech.com",
  image: "https://www.swfoamtech.com/og-image.jpg",
  logo: "https://www.swfoamtech.com/logo.jpg",
  slogan: "Creating The Perfect Fit",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1106 Industrial Park Rd",
    addressLocality: "Belton",
    addressRegion: "TX",
    postalCode: "76513",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 31.0663, longitude: -97.4614 },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "16:00",
  },
  areaServed: ["United States", "Mexico"],
  sameAs: [
    "https://www.facebook.com/SouthWesternFoamTechnologies",
    "https://www.linkedin.com/company/southwestern-foam-technologies/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-RNWMHJY60N" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RNWMHJY60N');
        `}</Script>
        <QuoteProvider>
          <Nav />
          {children}
          <Footer />
        </QuoteProvider>
      </body>
    </html>
  );
}
