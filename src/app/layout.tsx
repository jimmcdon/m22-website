import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components/ui/header";

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
  description: "M22 helps businesses create digital experiences that people actually love to use. We combine human expertise with AI innovation to deliver practical solutions that make technology work for your team and customers.",
  keywords: "human-centered design, AI solutions, practical technology, user experience, business results",
  authors: [{ name: "M22" }],
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
    description: "Creating digital experiences that people actually love to use. We make technology simple, smart, and human.",
    url: "https://m22.com",
    siteName: "M22",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M22 | Human Expertise Meets AI Innovation",
    description: "Creating digital experiences that people actually love to use. We make technology simple, smart, and human.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${quicksand.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
