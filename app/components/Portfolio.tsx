"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import {
  Github, ExternalLink, Globe, Smartphone, Monitor, Palette, Layout,
  X, Maximize2, RefreshCw, ChevronLeft, ChevronRight, Lock
} from "lucide-react";

const categories = ["All", "Web Development", "Mobile Apps", "Desktop Software", "Graphic Design", "UI/UX"];

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart, payments via Stripe, and admin dashboard.",
    category: "Web Development",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
    color: "from-blue-600 to-blue-800",
    icon: Globe,
    github: "https://github.com",
    demoType: "iframe" as const,
    demoUrl: "https://vercel.com",
    screens: [] as { img: string; label: string; desc: string }[],
  },
  {
    title: "School Management System",
    description: "Desktop application for managing student records, fees, attendance, timetables, and staff data.",
    category: "Desktop Software",
    tags: ["Python", "Django", "MySQL", "React"],
    color: "from-indigo-600 to-blue-700",
    icon: Monitor,
    github: "https://github.com",
    demoType: "images" as const,
    demoUrl: "",
    screens: [
      {
        img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
        label: "Dashboard Overview",
        desc: "Main admin dashboard showing student count, fee stats, attendance rate and quick action buttons.",
      },
      {
        img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
        label: "Student Records",
        desc: "Full CRUD student management — search, filters, photo upload, class assignment and grade tracking.",
      },
      {
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
        label: "Fee Management",
        desc: "Fee collection tracking, payment history, receipt generation and automated reminders.",
      },
    ],
  },
  {
    title: "Business Booking App",
    description: "Cross-platform mobile app for appointment booking, with real-time notifications and payment integration.",
    category: "Mobile Apps",
    tags: ["React Native", "Expo", "Firebase", "Node.js"],
    color: "from-blue-500 to-cyan-600",
    icon: Smartphone,
    github: "https://github.com",
    demoType: "images" as const,
    demoUrl: "",
    screens: [
      {
        img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
        label: "Booking Screen",
        desc: "Intuitive calendar UI with available time slots, service selection and provider profile.",
      },
      {
        img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80",
        label: "Mobile Dashboard",
        desc: "Real-time notifications for booking confirmations, reminders and status updates.",
      },
      {
        img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80",
        label: "Payment Flow",
        desc: "Secure in-app payment with card, mobile money and wallet options.",
      },
    ],
  },
  {
    title: "Corporate Brand Identity",
    description: "Complete brand identity package including logo, business cards, letterhead, and social media kits.",
    category: "Graphic Design",
    tags: ["Adobe Illustrator", "Photoshop", "Canva"],
    color: "from-violet-600 to-blue-600",
    icon: Palette,
    github: "https://github.com",
    demoType: "images" as const,
    demoUrl: "",
    screens: [
      {
        img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=1200&q=80",
        label: "Logo & Brand Colors",
        desc: "Primary logo, monogram, color palette and typography guidelines for consistent branding.",
      },
      {
        img: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&q=80",
        label: "Business Cards",
        desc: "Premium double-sided business card designs for the full executive team.",
      },
      {
        img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&q=80",
        label: "Social Media Kit",
        desc: "Post templates, story formats, cover photos and highlight icons.",
      },
    ],
  },
  {
    title: "Hospital Management System",
    description: "Comprehensive hospital software covering patient records, appointments, billing, inventory, and reports.",
    category: "Desktop Software",
    tags: ["Python", "Tkinter", "MySQL", "ReportLab"],
    color: "from-blue-600 to-indigo-700",
    icon: Monitor,
    github: "https://github.com",
    demoType: "images" as const,
    demoUrl: "",
    screens: [
      {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80",
        label: "Patient Records",
        desc: "Complete patient profiles with medical history, prescriptions, lab results and visit logs.",
      },
      {
        img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
        label: "Appointment System",
        desc: "Doctor scheduling, patient queue management and automated appointment reminders.",
      },
      {
        img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80",
        label: "Billing & Reports",
        desc: "Invoice generation, payment tracking, PDF reports and financial analytics.",
      },
    ],
  },
  {
    title: "Portfolio Website",
    description: "Modern responsive portfolio for a creative photographer with gallery, contact form, and dark mode.",
    category: "Web Development",
    tags: ["Next.js", "Framer Motion", "Tailwind", "Supabase"],
    color: "from-cyan-500 to-blue-600",
    icon: Globe,
    github: "https://github.com",
    demoType: "iframe" as const,
    demoUrl: "https://nextjs.org",
    screens: [] as { img: string; label: string; desc: string }[],
  },
  {
    title: "Food Delivery App UI",
    description: "Complete UI/UX design for a food delivery mobile application — wireframes through high-fidelity prototypes.",
    category: "UI/UX",
    tags: ["Figma", "Prototype", "Mobile UI"],
    color: "from-blue-500 to-indigo-600",
    icon: Layout,
    github: "https://github.com",
    demoType: "images" as const,
    demoUrl: "",
    screens: [
      {
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80",
        label: "Food Home Feed",
        desc: "Personalized restaurant feed with search, categories, promotions and quick reorder.",
      },
      {
        img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&q=80",
        label: "Menu & Ordering",
        desc: "Rich food detail pages with photos, ingredients, reviews and add-to-cart flow.",
      },
      {
        img: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=1200&q=80",
        label: "Order Tracking",
        desc: "Live order tracking with map view, status steps and driver contact option.",
      },
    ],
  },
  {
    title: "Inventory POS System",
    description: "Point-of-sale and inventory management desktop software for retail businesses with receipt printing.",
    category: "Desktop Software",
    tags: ["Python", "PyQt5", "SQLite", "Barcode"],
    color: "from-indigo-500 to-blue-600",
    icon: Monitor,
    github: "https://github.com",
    demoType: "images" as const,
    demoUrl: "",
    screens: [
      {
        img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
        label: "POS Terminal",
        desc: "Clean point-of-sale terminal with barcode scanning, product search and cart management.",
      },
      {
        img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
        label: "Inventory Management",
        desc: "Stock level tracking, low-stock alerts, supplier management and purchase orders.",
      },
      {
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
        label: "Sales Reports",
        desc: "Daily, weekly, monthly sales charts, top products and exportable PDF reports.",
      },
    ],
  },
  {
    title: "Social Media Marketing Kit",
    description: "Complete social media design templates — Instagram, Facebook posts, stories, and covers.",
    category: "Graphic Design",
    tags: ["Photoshop", "Illustrator", "Canva"],
    color: "from-blue-600 to-cyan-500",
    icon: Palette,
    github: "https://github.com",
    demoType: "images" as const,
    demoUrl: "",
    screens: [
      {
        img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80",
        label: "Instagram Posts",
        desc: "12 square post templates with consistent branding, typography and color scheme.",
      },
      {
        img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
        label: "Stories & Reels",
        desc: "Vertical story templates with animated elements, countdown stickers and CTA buttons.",
      },
      {
        img: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&q=80",
        label: "Facebook Covers",
        desc: "Business page cover designs with profile alignment, tagline and contact info.",
      },
    ],
  },
];

// ── Demo Modal ────────────────────────────────────────────────────────────────
function DemoModal({
  project,
  onClose,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
}) {
  const [slide, setSlide] = useState(0);
  const [dir, setDir] = useState(1);
  const [iframeKey, setIframeKey] = useState(0);
  const screens = project.screens;

  const go = (d: number) => {
    setDir(d);
    setSlide((prev) => (prev + d + screens.length) % screens.length);
  };

  const displayUrl =
    project.demoUrl ||
    `demo.mikesoftware.com/${project.title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.88, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.88, opacity: 0, y: 30 }}
        transition={{ type: "spring", damping: 22, stiffness: 260 }}
        className="w-full max-w-5xl bg-[#0f172a] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Browser chrome ── */}
        <div className="flex items-center gap-3 px-5 py-3 bg-[#1e293b] border-b border-white/10">
          {/* Traffic lights */}
          <button
            onClick={onClose}
            className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-400 transition-colors"
          />
          <div className="w-3.5 h-3.5 rounded-full bg-yellow-400" />
          <div className="w-3.5 h-3.5 rounded-full bg-green-500" />

          {/* URL bar */}
          <div className="flex-1 flex items-center gap-2 mx-3 px-3 py-1.5 rounded-lg bg-[#0f172a] border border-white/10">
            <Lock size={11} className="text-green-400 shrink-0" />
            <span className="text-gray-400 text-xs truncate font-mono">{displayUrl}</span>
          </div>

          <button
            onClick={() => setIframeKey((k) => k + 1)}
            className="text-gray-500 hover:text-white transition-colors"
            title="Reload"
          >
            <RefreshCw size={14} />
          </button>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-white transition-colors ml-1"
          >
            <X size={16} />
          </button>
        </div>

        {/* ── Content area ── */}
        <div className="relative bg-black" style={{ height: "520px" }}>
          {project.demoType === "iframe" ? (
            // Real website in iframe
            <iframe
              key={iframeKey}
              src={project.demoUrl}
              className="w-full h-full border-0"
              title={project.title}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          ) : (
            // Real images with slide animation
            <>
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={slide}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -dir * 80 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  {/* Full screenshot image */}
                  <Image
                    src={screens[slide].img}
                    alt={screens[slide].label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 900px"
                    unoptimized
                  />

                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

                  {/* Caption */}
                  <div className="absolute bottom-5 left-6 right-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-600/90 text-white text-xs font-bold mb-2">
                      {screens[slide].label}
                    </span>
                    <p className="text-white/80 text-sm leading-relaxed max-w-xl">
                      {screens[slide].desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Prev / Next arrows */}
              {screens.length > 1 && (
                <>
                  <button
                    onClick={() => go(-1)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors z-10 backdrop-blur-sm"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => go(1)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors z-10 backdrop-blur-sm"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </>
          )}
        </div>

        {/* ── Footer bar ── */}
        <div className="flex items-center justify-between px-5 py-3 bg-[#1e293b] border-t border-white/10">
          {/* Slide dots */}
          <div className="flex items-center gap-2">
            {project.demoType === "images" &&
              screens.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDir(i > slide ? 1 : -1);
                    setSlide(i);
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    i === slide
                      ? "w-6 h-2.5 bg-blue-500"
                      : "w-2.5 h-2.5 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            {project.demoType === "iframe" && (
              <span className="text-gray-400 text-xs">
                Live website — scroll &amp; interact freely
              </span>
            )}
          </div>

          {/* Project title + GitHub */}
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-xs hidden sm:block font-medium">
              {project.title}
            </span>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
            >
              <Github size={13} /> GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Fade-in helper ─────────────────────────────────────────────────────────────
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [demoProject, setDemoProject] = useState<(typeof projects)[0] | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="section-padding bg-gray-50 dark:bg-[#0a1628] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
            My Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Click{" "}
            <span className="text-blue-600 font-semibold">Live Demo</span> to
            see real screenshots and live previews of each project.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mt-4" />
        </FadeIn>

        {/* Filter tabs */}
        <FadeIn delay={0.1} className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-white dark:bg-[#1e293b] text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </FadeIn>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => {
              const Icon = project.icon;
              const thumb = project.screens[0]?.img;
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="group bg-white dark:bg-[#1e293b] rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700/50 shadow-lg card-hover"
                >
                  {/* Thumbnail */}
                  <div
                    className={`relative h-44 overflow-hidden ${
                      thumb ? "" : `bg-gradient-to-br ${project.color}`
                    }`}
                  >
                    {thumb ? (
                      <>
                        <Image
                          src={thumb}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Icon
                          size={52}
                          className="text-white/80 group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-semibold">
                      {project.category}
                    </span>
                    {/* Screen count badge */}
                    {project.screens.length > 0 && (
                      <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/40 backdrop-blur-sm">
                        {project.screens.map((_, si) => (
                          <div
                            key={si}
                            className="w-1.5 h-1.5 rounded-full bg-white/70"
                          />
                        ))}
                        <span className="text-white/70 text-xs ml-1">
                          {project.screens.length} screens
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        <Github size={15} /> GitHub
                      </a>
                      <button
                        onClick={() => setDemoProject(project)}
                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20"
                      >
                        <ExternalLink size={15} /> Live Demo
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Demo Modal */}
      <AnimatePresence>
        {demoProject && (
          <DemoModal
            project={demoProject}
            onClose={() => setDemoProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
