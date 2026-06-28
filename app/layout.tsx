import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegistration from "./components/ServiceWorkerRegistration";
import InstallPrompt from "./components/InstallPrompt";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#2563EB",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Mike Software | Software Engineer & Creative Designer",
  description:
    "Mike Software — Transforming Your Vision into Innovative Digital Solutions. Full-Stack Developer, Mobile App Developer, UI/UX Designer & Graphic Designer based in Cameroon.",
  keywords:
    "Mike Software, Software Engineer, Full-Stack Developer, Mobile App Developer, UI/UX Designer, Graphic Designer, Cameroon",
  authors: [{ name: "Mike Software" }],
  metadataBase: new URL("https://my-portfolio-jet-ten-37.vercel.app"),
  applicationName: "Mike Software",
  appleWebApp: {
    capable: true,
    title: "Mike Software",
    statusBarStyle: "default",
  },
  formatDetection: { telephone: false },
  openGraph: {
    title: "Mike Software | Software Engineer & Creative Designer",
    description: "Transforming Your Vision into Innovative Digital Solutions.",
    type: "website",
    url: "https://my-portfolio-jet-ten-37.vercel.app",
    siteName: "Mike Software",
    images: [
      {
        url: "/logodesign.jpeg",
        width: 512,
        height: 512,
        alt: "Mike Software Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mike Software | Software Engineer & Creative Designer",
    description: "Transforming Your Vision into Innovative Digital Solutions.",
    images: ["/logodesign.jpeg"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon.jpg", type: "image/jpeg" },
    ],
    apple: "/apple-icon.jpg",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Mike Software" />
        <link rel="apple-touch-icon" href="/apple-icon.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.jpg" />
        <meta name="msapplication-TileColor" content="#2563EB" />
        <meta name="msapplication-TileImage" content="/logodesign.jpeg" />
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <ServiceWorkerRegistration />
        <InstallPrompt />
      </body>
    </html>
  );
}
