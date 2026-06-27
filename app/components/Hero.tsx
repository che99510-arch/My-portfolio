"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import {
  ArrowRight, Eye, Github, Linkedin, MessageCircle,
  Code2, Smartphone, Palette, Globe, Database, Layers,
} from "lucide-react";
import { scrollTo } from "../lib/constants";

const floatingIcons = [
  { Icon: Code2,      top: "15%", left: "8%",  delay: 0,   color: "text-blue-500" },
  { Icon: Smartphone, top: "25%", right: "6%", delay: 0.5, color: "text-indigo-400" },
  { Icon: Palette,    top: "65%", left: "5%",  delay: 1,   color: "text-purple-400" },
  { Icon: Globe,      top: "70%", right: "8%", delay: 1.5, color: "text-blue-400" },
  { Icon: Database,   top: "40%", left: "3%",  delay: 0.8, color: "text-cyan-400" },
  { Icon: Layers,     top: "45%", right: "4%", delay: 1.2, color: "text-blue-500" },
];

const stats = [
  { value: "5+",  label: "Projects Done" },
  { value: "3+",  label: "Happy Clients" },
  { value: "3",   label: "Years Experience" },
  { value: "10+", label: "Technologies" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#0f172a] hero-grid"
    >
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl blob-animation pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl blob-animation-delay pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl blob-animation-delay2 pointer-events-none" />

      {/* Floating icons — desktop only */}
      {floatingIcons.map(({ Icon, top, left, right, delay, color }, i) => (
        <motion.div
          key={i}
          className={`absolute hidden lg:flex items-center justify-center w-12 h-12 rounded-xl glass shadow-lg ${color} float-animation`}
          style={{ top, left, right, animationDelay: `${delay}s` } as React.CSSProperties}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + delay * 0.2, duration: 0.5, type: "spring" }}
        >
          <Icon size={22} />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: text ── */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              Available for freelance work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight text-gray-900 dark:text-white mb-4"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Mike</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl sm:text-3xl font-bold text-gray-700 dark:text-gray-200 mb-6 min-h-[40px]"
            >
              <TypeAnimation
                sequence={[
                  "Software Engineer",    2000,
                  "Full-Stack Developer", 2000,
                  "Mobile App Developer", 2000,
                  "UI/UX Designer",       2000,
                  "Graphic Designer",     2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-blue-600"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8 max-w-xl"
            >
              Build Websites. Develop Mobile Apps. Create Powerful Software.
              Design Amazing Brands.
              <br />
              <span className="text-blue-600 font-semibold">
                Transforming Your Vision into Innovative Digital Solutions.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <button
                onClick={() => scrollTo("#contact")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 pulse-glow"
              >
                Hire Me <ArrowRight size={18} />
              </button>
              <button
                onClick={() => scrollTo("#portfolio")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl gradient-border text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all hover:-translate-y-0.5"
              >
                View My Work <Eye size={18} />
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex items-center gap-4"
            >
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Find me on:</span>
              {[
                { Icon: Github,        href: "https://github.com/che99510-arch",       label: "GitHub" },
                { Icon: Linkedin,      href: "https://linkedin.com",                   label: "LinkedIn" },
                { Icon: MessageCircle, href: "https://wa.me/237679911937",             label: "WhatsApp" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:scale-110 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: photo + stats ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="order-1 lg:order-2 flex flex-col items-center gap-8"
          >
            {/* Photo */}
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/30 to-indigo-600/20 blur-2xl scale-110" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden gradient-border shadow-2xl">
                <Image
                  src="/mike.jpeg"
                  alt="Mike — Software Engineer & Creative Designer"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 256px, 320px"
                />
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-2 shadow-xl"
              >
                <p className="text-xs text-gray-500 dark:text-gray-400">Based in</p>
                <p className="font-bold text-gray-800 dark:text-white text-sm">🇨🇲 Cameroon</p>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -left-4 glass rounded-2xl px-4 py-2 shadow-xl"
              >
                <p className="text-xs text-gray-500 dark:text-gray-400">Experience</p>
                <p className="font-bold text-gray-800 dark:text-white text-sm">3 Years</p>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3 w-full">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="text-center p-4 glass rounded-xl card-hover"
                >
                  <p className="text-2xl font-black gradient-text">{s.value}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium leading-tight">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
      >
        <span className="text-xs font-medium tracking-wide">Scroll down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-start justify-center pt-1"
        >
          <div className="w-1 h-2 rounded-full bg-blue-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
