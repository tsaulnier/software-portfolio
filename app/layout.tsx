import type { Metadata } from "next";
import { IBM_Plex_Mono } from 'next/font/google';
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'], // pick weights you use
  variable: '--font-ibm',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Thom Saulnier's portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ibmPlexMono.variable}>
      <body className="font-mono">{children}</body>
    </html>
  );
}
