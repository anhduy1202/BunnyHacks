import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BunnyHacks 2024",
  description: "ACM at CSUF 1-week virtual webathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="from-main_pink to-main_purple overflow-x-hidden overflow-y-auto bg-gradient-to-b">
        {children}
      </body>
    </html>
  );
}
