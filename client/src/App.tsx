import SignupPage from "./pages/SignupPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import Navbar from "./components/core/navbar";
import PoemsPage from "./pages/PoemsPage";
import AuthorsPage from "./pages/AuthorsPage";
import AboutPage from "./pages/AboutPage";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./components/core/LanguageSwitcher";

function App() {
  const { i18n } = useTranslation();
  const isRTL = ["ar", "ur"].includes(i18n.language);

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="min-h-screen bg-background text-foreground"
    >
      <LanguageSwitcher />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-background shadow border-b border-border">
        <Navbar />
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/poems" element={<PoemsPage />} />
        <Route path="/authors" element={<AuthorsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route
          path="/reset-password/:uid/:token"
          element={<ResetPasswordPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
