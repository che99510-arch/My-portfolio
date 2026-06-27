"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

const contactInfo = [
  { Icon: Phone,         label: "Phone / WhatsApp", value: "+237 679 911 937",      href: "https://wa.me/237679911937",    color: "from-green-500 to-emerald-600", isLink: true  },
  { Icon: Mail,          label: "Email",             value: "che44367@gmail.com",    href: "mailto:che44367@gmail.com",     color: "from-blue-500 to-blue-700",     isLink: true  },
  { Icon: MapPin,        label: "Location",          value: "Cameroon 🇨🇲",         href: null,                           color: "from-orange-500 to-red-500",    isLink: false },
  { Icon: Clock,         label: "Availability",      value: "Mon – Sat, 8AM – 8PM WAT", href: null,                       color: "from-violet-500 to-blue-600",   isLink: false },
];

function ContactCard({ Icon, label, value, href, color, isLink }: typeof contactInfo[0]) {
  const inner = (
    <div className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-gray-700/50 hover:border-blue-200 dark:hover:border-blue-700/50 hover:shadow-md transition-all group">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md`}>
        <Icon size={21} className="text-white" />
      </div>
      <div>
        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-0.5">{label}</p>
        <p className="text-gray-800 dark:text-white font-bold text-sm">{value}</p>
      </div>
    </div>
  );

  if (isLink && href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02, y: -2 }}
        transition={{ duration: 0.2 }}
      >
        {inner}
      </motion.a>
    );
  }
  return <div>{inner}</div>;
}

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white dark:bg-[#0f172a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badge="Get In Touch"
            title="Let's"
            accent="Work Together"
            subtitle="Have a project in mind? Reach out directly — I'd love to hear about it."
          />
        </FadeIn>

        {/* Brand card */}
        <FadeIn delay={0.1}>
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 sm:p-10 text-white shadow-2xl shadow-blue-500/20 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                  <MessageCircle size={22} className="text-white" />
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
                <MessageCircle size={17} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {contactInfo.map((info, i) => (
            <FadeIn key={info.label} delay={0.15 + i * 0.08}>
              <ContactCard {...info} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
