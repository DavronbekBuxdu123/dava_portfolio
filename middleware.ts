// middleware.ts
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "uz", "ru"],
  defaultLocale: "en",
});

export const config = {
  // Bu matcher barcha sahifalarni to'g'ri ushlaydi
  matcher: ["/", "/(en|uz|ru)/:path*"],
};
