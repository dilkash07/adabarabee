import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import i18n from "@/i18n"; // ✅ Make sure this is your initialized i18n instance

export function LanguageSwitcher() {
  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir =
      lang === "ar" || lang === "ur" ? "rtl" : "ltr";
  };

  return (
    <Select onValueChange={handleLanguageChange} defaultValue={i18n.language}>
      <SelectTrigger className="w-[140px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="ar">العربية</SelectItem>
        <SelectItem value="hi">हिन्दी</SelectItem>
        <SelectItem value="ur">اردو</SelectItem>
      </SelectContent>
    </Select>
  );
}
