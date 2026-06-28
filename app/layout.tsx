import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegistration from "./components/ServiceWorkerRegistration";
import InstallPrompt from "./components/InstallPrompt";
import ThemeProvider from "./components/ThemeProvider";

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
    images: [{ url: "/logodesign.jpeg", width: 512, height: 512, alt: "Mike Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mike Software | Software Engineer & Creative Designer",
    description: "Transforming Your Vision into Innovative Digital Solutions.",
    images: ["/logodesign.jpeg"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/icon.jpg", type: "image/jpeg" }],
    apple: "/apple-icon.jpg",
    shortcut: "/favicon.ico",
  },
};

// Inline script that runs BEFORE React hydration — prevents flash of wrong theme
const themeScript = `
(function() {
  try {
    var saved = localStorage.getItem('mike-theme');
    var isDark = saved === 'dark'
      || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
    var color = isDark ? '#0f172a' : '#ffffff';
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', color);
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ── Blocking theme script — must be first to prevent FOUC ── */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="manifest" href="/manifest.json" />

        {/* Dynamic theme-color — updated by ThemeProvider at runtime */}
        <meta name="theme-color" content="#ffffff" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Mike Software" />
        <link rel="apple-touch-icon" href="/apple-icon.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.jpg" />
        <meta name="msapplication-TileColor" content="#2563EB" />
        <meta name="msapplication-TileImage" content="/logodesign.jpeg" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
          <ServiceWorkerRegistration />
          <InstallPrompt />
        </ThemeProvider>
      </body>
    </html>
  );
}
