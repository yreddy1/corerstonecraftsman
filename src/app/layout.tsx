import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { homeMetadata } from "@/lib/seo";
import { org } from "@/content/site";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = homeMetadata;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: org.name,
  legalName: org.legalName,
  url: org.url,
  email: org.email,
  taxID: org.ein,
  address: {
    "@type": "PostalAddress",
    streetAddress: org.address.line1,
    addressLocality: org.address.city,
    addressRegion: org.address.state,
    postalCode: org.address.zip,
    addressCountry: "US",
  },
  sameAs: [org.social.instagram, org.social.facebook, org.social.linkedin, org.candidEinProfileUrl],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`} data-scroll-behavior="smooth">
      <body className="flex min-h-full flex-col font-sans text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
