"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const languages = [
  { code: "uz", label: " O'zbekcha" },
  { code: "ru", label: " Русский" },
  { code: "en", label: " English" },
];

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "uz";
  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === currentLocale) return;
    const pathSegments = pathname.split("/");
    pathSegments[1] = newLocale;
    const newPath = pathSegments.join("/");
    router.push(newPath);
  };

  return (
    <Select value={currentLocale} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[100px] bg-[#6d23cd] text-white">
        <SelectValue placeholder="Tilni tanlang" />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
