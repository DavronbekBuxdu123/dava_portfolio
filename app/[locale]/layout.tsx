import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Davronbek Aslonov — Full-Stack Engineer",
    template: "%s | Davronbek Aslonov",
  },
  description:
    "Full-Stack dasturchi: Next.js, React, Python, Django, Tailwind CSS va zamonaviy web texnologiyalar yordamida sifatli, tezkor va optimallashgan loyihalar yarataman.",
  keywords: [
    "Davronbek Aslonov",
    "davron-dev.uz",
    "Full-Stack Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Next.js Portfolio",
    "React Developer Uzbekistan",
    "Python Django",
  ],
  authors: [{ name: "Davronbek Aslonov", url: "https://davron-dev.uz" }],
  creator: "Davronbek Aslonov",
  metadataBase: new URL("https://davron-dev.uz"),

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: "https://davron-dev.uz",
    title: "Davronbek Aslonov — Full-Stack Engineer",
    description:
      "Zamonaviy va tezkor web ilovalar, API va servislar ishlab chiquvchi Full-Stack dasturchining shaxsiy portfoliosi.",
    siteName: "Davronbek Aslonov Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Davronbek Aslonov Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Davronbek Aslonov — Full-Stack Engineer",
    description: "Modern & Minimalist Full-Stack Engineer Portfolio",
    images: ["/og-image.png"],
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
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className="dark">
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
