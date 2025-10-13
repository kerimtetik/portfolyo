import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (
      localStorage.theme === "light" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: light)").matches)
    ) {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }
  };

  const changeLang = (lang) => i18n.changeLanguage(lang);

  const NavLink = ({ href, label }) => (
    <a
      href={href}
      className="px-3 py-2 text-sm font-medium text-gray-800 dark:text-white/80 hover:text-violet-500 dark:hover:text-violet-400 transition"
    >
      {label}
    </a>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 dark:bg-[#0a0612]/70 backdrop-blur-lg border-b border-gray-300 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between py-3">
        {/* Logo */}
        <Link to="/" className="text-lg font-['Orbitron'] font-semibold text-gray-900 dark:text-white">
          <span className="text-violet-500 dark:text-violet-400">Kerim</span> Tetik
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-3">
          <NavLink href="#home" label={t("nav.home")} />
          <NavLink href="#about" label={t("nav.about")} />
          <NavLink href="#services" label={t("nav.services")} />
          <NavLink href="#experience" label={t("nav.experience")} />
          <NavLink href="#skills" label={t("nav.skills")} />
          <NavLink href="#projects" label={t("nav.projects")} />
          <NavLink href="#contact" label={t("nav.contact")} />
        </nav>

        {/* Dil ve Tema butonları */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => changeLang("tr")}
            className={`px-3 py-1 rounded-md text-sm font-medium transition ${
              i18n.language === "tr"
                ? "bg-violet-500 text-white shadow-[0_0_8px_rgba(139,92,246,.6)]"
                : "text-gray-800 dark:text-white/70 hover:text-violet-500"
            }`}
          >
            🇹🇷 TR
          </button>

          <button
            onClick={() => changeLang("en")}
            className={`px-3 py-1 rounded-md text-sm font-medium transition ${
              i18n.language === "en"
                ? "bg-violet-500 text-white shadow-[0_0_8px_rgba(139,92,246,.6)]"
                : "text-gray-800 dark:text-white/70 hover:text-violet-500"
            }`}
          >
            🇬🇧 EN
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-md border border-transparent hover:border-violet-400 text-gray-800 dark:text-white transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobil Menü */}
        <button
          className="md:hidden text-gray-900 dark:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
