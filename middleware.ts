import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // Sayt qo'llab-quvvatlaydigan tillar ro'yxati
  locales: ["en", "uz", "ru"],

  // Agar til tanlanmagan bo'lsa, avtomatik ingliz tili ochiladi
  defaultLocale: "en",
});

export const config = {
  // Quyidagi manzillardan tashqari hamma joyda middleware ishlaydi
  matcher: ["/", "/(de|en|uz|ru)/:path*"],
};
