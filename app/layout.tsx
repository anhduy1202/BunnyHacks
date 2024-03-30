import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  openGraph: {
    title: "Bunnyhacks 2024",
    description: "ACM CSUF 1-week virtual webathon",
    url: "https://bunnyhacks.acmcsuf.com/",
    siteName: "Bunnyhacks",
    images: [
      {
        url: "https://bunnyhacks.acmcsuf.com/full_bunny.svg", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://bunnyhacks.acmcsuf.com/full_bunny.svg", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden overflow-y-auto">{children}</body>
    </html>
  );
}
