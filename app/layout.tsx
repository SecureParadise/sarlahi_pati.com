import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sarlahi-pati-com.vercel.app"),
  title: "सर्लाहीपाटी - सर्लाहीको समाचार पोर्टल",
  description:
    "सर्लाही–४ मा गगन–अमरेश भिडन्त, फाइदा अमनिश यादवलाई? सर्लाहीको विश्वसनीय अनलाइन समाचार पोर्टल।",
  icons: {
    icon: "/sarlahipati_favicon.jpg",
    shortcut: "/sarlahipati_favicon.jpg",
    apple: "/sarlahipati_favicon.jpg",
  },
  openGraph: {
    title: "सर्लाहीपाटी",
    description:
      "सर्लाही–४ मा गगन–अमरेश भिडन्त, फाइदा अमनिश यादवलाई?",
    images: [
      {
        url: "/news_img.jpg",
        width: 1200,
        height: 630,
        alt: "सर्लाहीपाटी समाचार",
      },
    ],
    type: "article",
    siteName: "सर्लाहीपाटी",
  },
  twitter: {
    card: "summary_large_image",
    title: "सर्लाहीपाटी",
    description:
      "सर्लाही–४ मा गगन–अमरेश भिडन्त, फाइदा अमनिश यादवलाई?",
    images: ["/news_img.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ne">
      <head>
        <link rel="stylesheet" href="/tailwind-generated.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
