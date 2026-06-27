"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe, Smartphone, Monitor, Palette, Brush,
  Layout
} from "lucide-react";

const services = [
  {
    Icon: Globe,
    title: "Custom Website Development",
    color: "from-blue-500 to-blue-700",
    shadow: "shadow-blue-500/20",
    items: [
      "Business Websites",
      "Portfolio Websites",
      "Corporate Websites",
      "E-Commerce Websites",
      "Web Applications",
      "Landing Pages",
      "Website Maintenance",
    ],
  },
  {
    Icon: Smartphone,
    title: "Mobile Application Development",
    color: "from-indigo-500 to-blue-600",
    shadow: "shadow-indigo-500/20",
    items: [
      "Android Apps",
      "iOS Apps",
      "Cross-platform Apps",
      "Business Apps",
      "School Apps",
      "Booking Systems",
      "Management Systems",
    ],
  },
  {
    Icon: Monitor,
    title: "Desktop Software",
    color: "from-blue-600 to-cyan-500",
    shadow: "shadow-cyan-500/20",
    items: [
      "Custom Desktop Applications",
      "Inventory Systems",
      "School Management Systems",
      "Hospital Management Systems",
      "Business Management Systems",
      "Fee Verification Systems",
      "POS Systems",
      "Payroll Systems",
    ],
  },
  {
    Icon: Layout,
    title: "UI/UX Design",
    color: "from-violet-500 to-blue-600",
    shadow: "shadow-violet-500/20",
    items: [
      "Wireframing",
      "Prototyping",
      "Responsive Interfaces",
      "Dashboard Design",
      "Mobile UI",
      "Website UI",
    ],
  },
  {
    Icon: Brush,
    title: "Graphic Design",
    color: "from-blue-500 to-indigo-600",
    shadow: "shadow-blue-500/20",
    items: [
      "Flyers & Posters",
      "Business Cards",
      "Wedding & Birthday Invitations",
      "Logos & Brochures",
      "Roll-up Banners",
      "Social Media Designs",
      "Company Profiles",
      "Certificates",
    ],
  },
  {
    Icon: Palette,
    title: "Brand Identity & Marketing",
    color: "from-cyan-500 to-blue-600",
    shadow: "shadow-cyan-500/20",
    items: [
      "Brand Identity Design",
      "Menus & Product Packaging",
      "Marketing Materials",
      "Advertising Designs",
      "Social Media Branding",
      "Corporate Stationery",
    ],
  },
];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
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

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white dark:bg-[#0f172a] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
            What I Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive digital solutions tailored to help your business grow and thrive in the digital world.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mt-4" />
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const { Icon, title, color, shadow, items } = service;
            return (
              <FadeIn key={title} delay={i * 0.07}>
                <div className={`group h-full bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-gray-100 dark:border-gray-700/50 card-hover shadow-lg ${shadow}`}>
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={26} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors">
                    {title}
                  </h3>

                  {/* Items */}
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Bottom hover bar */}
                  <div className={`mt-5 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${color} rounded-full transition-all duration-500`} />
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* CTA banner */}
        <FadeIn delay={0.3} className="mt-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 sm:p-12 text-center shadow-2xl shadow-blue-500/30">
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-blue-400/20 rounded-full blur-2xl" />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                Have a project in mind?
              </h3>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                Let&apos;s work together to build something amazing. I&apos;m available for freelance projects and collaborations.
              </p>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3.5 rounded-xl bg-white text-blue-700 font-bold hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-0.5"
              >
                Start a Project
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
