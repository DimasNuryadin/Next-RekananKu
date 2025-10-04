import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./ui/fonts";

// react-toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: "Beranda | Rekananku",
  description: "Platform E-Procurement Terpercaya #1 di Indonesia",
  keywords: ["Next.js", "SEO", "Website"],
  openGraph: {
    title: "Beranda | Rekananku",
    description: "Platform E-Procurement Terpercaya #1 di Indonesia",
    url: "https://www.rekananku.com",
    siteName: "Nama Website",
    images: [
      {
        url: "https://www.rekananku.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Preview Gambar"
      }
    ],
    locale: "id_ID",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Beranda | Nama Website",
    description: "Deskripsi Twitter card.",
    images: ["https://www.rekananku.com/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body
        className={`${poppins.className} antialiased`}
      >
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
