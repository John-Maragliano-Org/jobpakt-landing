import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JOBPAKT — Never miss another job.",
  description:
    "AI-powered lead capture and scheduling for home services contractors. Stop losing calls. Start booking more jobs.",
  metadataBase: new URL("https://jobpakt.com"),
  openGraph: {
    title: "JOBPAKT — Never miss another job.",
    description:
      "AI-powered lead capture and scheduling for home services contractors.",
    url: "https://jobpakt.com",
    siteName: "JOBPAKT",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JOBPAKT — Never miss another job.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JOBPAKT — Never miss another job.",
    description:
      "AI-powered lead capture and scheduling for home services contractors.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
