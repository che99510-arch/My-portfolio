"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Instagram, MessageCircle, Heart, ArrowUp, Github } from "lucide-react";
import Image from "next/image";
import { NAV_LINKS, scrollTo } from "../lib/constants";

const social = [
  { Icon: Github,        href: "https://github.com/che99510-arch", label: "GitHub" },
  { Icon: Linkedin,      href: "https://linkedin.com",              label: "LinkedIn" },
  { Icon: Instagram,     href: "https://instagram.com",             label: "Instagram" },
  { Icon: MessageCircle, href: "https://wa.me/237679911937",        label: "WhatsApp" },
];

const services = [
  "Website Development",
  "Mobile App Development",
  "Desktop Software",
  "UI/UX Design",
  "Graphic Design",
  "Brand Identity",
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handle = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <footer className="relative bg-[#0a1628] text-white overflow-hidden">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-blue-900/40 border border-blue-500/30 flex items-center justify-center shadow-lg">
                <Image src="/logodesign.jpeg" alt="Mike Software Logo" width={40} height={40} className="object-contain w-full h-full" />
              </div>
              <span className="text-xl font-black text-white leading-none">
                Mike<span className="text-blue-400">Software</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-1">
              Software Engineer | Web &amp; Graphic Designer
            </p>
            <p className="text-blue-400 text-sm font-medium mb-6">
              Transforming Your Vision into Innovative Digital Solutions.
            </p>
            <div className="flex flex-wrap gap-3">
              {social.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-900/30 transition-all"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-white mb-5 text-xs uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors animated-underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-5 text-xs uppercase tracking-widest">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors animated-underline text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px bg-white/5 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Mike Software. Made with{" "}
            <Heart size={12} className="inline text-red-500 fill-red-500" /> in Cameroon.
          </p>
          <p className="text-gray-600 text-xs">All rights reserved.</p>
        </div>
      </div>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/40 hover:bg-blue-700 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
