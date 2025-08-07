import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle"; // For light/dark mode if available
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between rtl">
        {/* Site Name (Right aligned in RTL) */}
        <Link
          to="/"
          className="text-2xl font-bold text-primary font-arabic italic tracking-tight"
        >
          مدونة الشعر العربي
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center text-foreground text-lg font-medium font-arabic">
          <li>
            <Link
              to="/"
              className="hover:text-accent transition-colors duration-200"
            >
              الصفحة الرئيسية
            </Link>
          </li>
          <li>
            <Link
              to="/poems"
              className="hover:text-accent transition-colors duration-200"
            >
              القصائد
            </Link>
          </li>
          <li>
            <Link
              to="/authors"
              className="hover:text-accent transition-colors duration-200"
            >
              الشعراء
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-accent transition-colors duration-200"
            >
              من نحن
            </Link>
          </li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Link to="/login">
            <Button variant="outline" className="font-arabic hidden md:inline">
              تسجيل الدخول
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-muted-foreground"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 font-arabic text-lg">
          <ul className="space-y-2 text-right">
            <li>
              <Link to="/" className="block hover:text-accent">
                الصفحة الرئيسية
              </Link>
            </li>
            <li>
              <Link to="/poems" className="block hover:text-accent">
                القصائد
              </Link>
            </li>
            <li>
              <Link to="/authors" className="block hover:text-accent">
                الشعراء
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => console.log("clicked.")}
                className="block hover:text-accent"
              >
                من نحن
              </Link>
            </li>
            <li>
              <Link
                to={"/login"}
                onClick={() => console.log("this link is worked...")}
                className="block hover:text-accent"
              >
                تسجيل الدخول
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
