import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "M22 | Human Expertise Meets AI Innovation",
  description: "M22 is a digital transformation agency helping businesses create better digital experiences that customers love and teams can actually use. We combine human expertise with AI innovation to deliver practical, measurable results.",
  keywords: "digital transformation, AI implementation, customer experience, business case, digital agency",
  authors: [{ name: "M22 Digital Transformation Agency" }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: "M22 | Human Expertise Meets AI Innovation",
    description: "Creating better digital experiences that your customers will love and your team can actually use",
    url: "https://m22.com",
    siteName: "M22 Digital Transformation Agency",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M22 | Human Expertise Meets AI Innovation",
    description: "Creating better digital experiences that your customers will love and your team can actually use",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${quicksand.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
