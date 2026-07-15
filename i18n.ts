import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

// Define your supported locales and default locale
export const locales = ["en", "uz", "ru"] as const;
export const defaultLocale = "en" as const;

export default getRequestConfig(async ({ requestLocale }) => {
  // Validate that the incoming locale is valid
  let locale = await requestLocale;
  if (!locales.includes(locale as any)) notFound();

  return {
    locale,
    // Dynamically load the translation files
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
