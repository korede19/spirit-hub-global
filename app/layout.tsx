import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/themeContext/index";
import Preloader from "@/components/preloader";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SpiritHubGlobal — Where the Spirit Moves & Lives Are Transformed",
    template: "%s | SpiritHubGlobal",
  },
  description:
    "SpiritHubGlobal is a Spirit-filled, Bible-based global ministry committed to worship, intercession, and raising believers who walk in divine purpose, power, and love.",
  keywords: [
    "SpiritHubGlobal",
    "Christian ministry",
    "Spirit-filled church",
    "online church",
    "prayer",
    "worship",
    "Bible teaching",
    "global ministry",
    "Holy Spirit",
    "intercession",
  ],
  authors: [{ name: "SpiritHubGlobal" }],
  creator: "SpiritHubGlobal",
  metadataBase: new URL("https://spirithubglobal.com/"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spirithubglobal.com/",
    siteName: "SpiritHubGlobal",
    title: "SpiritHubGlobal — Where the Spirit Moves & Lives Are Transformed",
    description:
      "A global community of Spirit-filled believers pursuing God's presence, power, and purpose. Join us for worship, prayer, and life-transforming meetings.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SpiritHubGlobal — Where the Spirit Moves",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpiritHubGlobal — Where the Spirit Moves & Lives Are Transformed",
    description:
      "A global community of Spirit-filled believers pursuing God's presence, power, and purpose.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakartaSans.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <body>
        <Preloader />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
