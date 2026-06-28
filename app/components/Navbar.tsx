"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import Image from "next/image";
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

  const mobileTopOffset = scrolled ? "top-[56px]" : "top-[65px]";

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-blue-600/95 backdrop-blur-xl shadow-lg shadow-blue-900/20 ${scrolled ? "py-2.5" : "py-3.5"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

          {/* ── Logo ── */}
          <button
            onClick={() => go("#home")}
            className="shrink-0 flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-lg"
            aria-label="Go to home"
          >
            <div className="w-9 h-9 rounded-lg overflow-hidden bg-white/10 border border-white/20 shadow-md flex items-center justify-center group-hover:scale-105 transition-transform">
              <Image
                src="/logodesign.jpeg"
                alt="Mike Software Logo"
                width={36}
                height={36}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <span className="font-black text-lg text-white leading-none tracking-tight">
              Mike<span className="text-blue-200">Software</span>
            </span>
          </button>

          {/* ── Desktop nav — evenly spaced ── */}
          <ul className="hidden lg:flex items-center gap-2 flex-1 justify-center">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={link.label}>
                  <button
                    onClick={() => go(link.href)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
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

          {/* ── Actions ── */}
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
              className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-lg bg-white text-blue-700 text-sm font-bold hover:bg-blue-50 transition-colors shadow-md whitespace-nowrap"
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

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`fixed ${mobileTopOffset} left-0 right-0 z-40 bg-blue-700/98 backdrop-blur-xl border-b border-white/10 shadow-2xl lg:hidden`}
          >
            <div className="max-w-7xl mx-auto px-4 py-3">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const id = link.href.replace("#", "");
                  const isActive = activeSection === id;
                  return (
                    <li key={link.label}>
                      <button
                        onClick={() => go(link.href)}
                        className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition-all text-sm ${
                          isActive
                            ? "text-white bg-white/20"
                            : "text-blue-100 hover:text-white hover:bg-white/15"
                        }`}
                      >
                        {link.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-2 pt-2 border-t border-white/10">
                <button
                  onClick={() => go("#contact")}
                  className="w-full py-3 rounded-xl bg-white text-blue-700 font-bold hover:bg-blue-50 transition-colors text-sm"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
