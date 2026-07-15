import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server"; // Serverdan xabarlarni olish
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Davronbek | Portfolio",
  description: "Modern & Minimalist Full-Stack Developer Portfolio",
};

export default async function RootLayout({
  children,
  params, // params'ni async olish kerak
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Promise ko'rinishida
}) {
  // Await qilib olishni unutmang
  const { locale } = await params; // Await qilish
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
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
