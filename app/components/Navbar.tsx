"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Code2 } from "lucide-react";
import { NAV_LINKS } from "../lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(s);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const go = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navbarHeight = scrolled ? "py-3" : "py-4";
  const mobileTopOffset = scrolled ? "top-[56px]" : "top-[64px]";

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-blue-600/95 backdrop-blur-xl shadow-lg shadow-blue-900/20 ${navbarHeight}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => go("#home")} className="flex items-center gap-2 group shrink-0">
            <div className="w-9 h-9 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center shadow-lg group-hover:bg-white/30 transition-colors">
              <Code2 size={18} className="text-white" />
            </div>
            <span className="font-black text-xl text-white">
              Mike<span className="text-blue-200">Software</span>
            </span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={link.label}>
                  <button
                    onClick={() => go(link.href)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-white bg-white/25 shadow-inner"
                        : "text-blue-100 hover:text-white hover:bg-white/15"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={toggleDark}
              className="w-9 h-9 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-colors"
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              onClick={() => go("#contact")}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-blue-700 text-sm font-bold hover:bg-blue-50 transition-colors shadow-md"
            >
              Hire Me
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`fixed ${mobileTopOffset} left-0 right-0 z-40 bg-blue-700/98 backdrop-blur-xl border-b border-white/10 shadow-2xl lg:hidden`}
          >
            <ul className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => go(link.href)}
                    className="w-full text-left px-4 py-2.5 rounded-lg text-blue-100 hover:text-white hover:bg-white/15 font-medium transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="mt-1 pb-1">
                <button
                  onClick={() => go("#contact")}
                  className="w-full py-2.5 rounded-lg bg-white text-blue-700 font-bold hover:bg-blue-50 transition-colors text-sm"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
