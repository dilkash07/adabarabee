import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ar from "./locales/ar.json";
import hi from "./locales/hi.json";
import ur from "./locales/ur.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
    hi: { translation: hi },
    ur: { translation: ur },
  },
  lng: "en", // default
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n; // ✅ Export this!
