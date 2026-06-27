"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

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

const contactInfo = [
  {
    Icon: Phone,
    label: "Phone / WhatsApp",
    value: "+237 679 911 937",
    href: "https://wa.me/237679911937",
    color: "from-green-500 to-emerald-600",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "che44367@gmail.com",
    href: "mailto:che44367@gmail.com",
    color: "from-blue-500 to-blue-700",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "Cameroon 🇨🇲",
    href: "#",
    color: "from-orange-500 to-red-500",
  },
  {
    Icon: Clock,
    label: "Availability",
    value: "Mon – Sat, 8AM – 8PM WAT",
    href: "#",
    color: "from-violet-500 to-blue-600",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white dark:bg-[#0f172a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Reach out directly — I&apos;d love to hear about it.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mt-4" />
        </FadeIn>

        {/* Brand card */}
        <FadeIn delay={0.1}>
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 sm:p-10 text-white shadow-2xl shadow-blue-500/30 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl" />
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                  <MessageCircle size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-black mb-1">Mike Software</h3>
                <p className="text-blue-100 text-sm">Software Engineer | Web &amp; Graphic Designer</p>
                <p className="text-blue-200 text-xs mt-1">Transforming Your Vision into Innovative Digital Solutions.</p>
              </div>
              <a
                href="https://wa.me/237679911937"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-700 font-bold text-sm hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Contact cards grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {contactInfo.map(({ Icon, label, value, href, color }, i) => (
            <FadeIn key={label} delay={0.15 + i * 0.08}>
              <motion.a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -3 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-gray-700/50 hover:border-blue-200 dark:hover:border-blue-700/50 hover:shadow-lg transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-0.5">{label}</p>
                  <p className="text-gray-800 dark:text-white font-bold text-sm">{value}</p>
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
