"use client";
import { Globe, Smartphone, Monitor, Palette, Brush, Layout } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";
import { scrollTo } from "../lib/constants";

const services = [
  {
    Icon: Globe, title: "Custom Website Development",
    color: "from-blue-500 to-blue-700", shadow: "shadow-blue-500/10",
    items: ["Business Websites","Portfolio Websites","Corporate Websites","E-Commerce Websites","Web Applications","Landing Pages","Website Maintenance"],
  },
  {
    Icon: Smartphone, title: "Mobile Application Development",
    color: "from-indigo-500 to-blue-600", shadow: "shadow-indigo-500/10",
    items: ["Android Apps","iOS Apps","Cross-platform Apps","Business Apps","School Apps","Booking Systems","Management Systems"],
  },
  {
    Icon: Monitor, title: "Desktop Software",
    color: "from-blue-600 to-cyan-500", shadow: "shadow-cyan-500/10",
    items: ["Custom Desktop Applications","Inventory Systems","School Management Systems","Hospital Management Systems","Fee Verification Systems","POS Systems","Payroll Systems"],
  },
  {
    Icon: Layout, title: "UI/UX Design",
    color: "from-violet-500 to-blue-600", shadow: "shadow-violet-500/10",
    items: ["Wireframing","Prototyping","Responsive Interfaces","Dashboard Design","Mobile UI","Website UI"],
  },
  {
    Icon: Brush, title: "Graphic Design",
    color: "from-blue-500 to-indigo-600", shadow: "shadow-blue-500/10",
    items: ["Flyers & Posters","Business Cards","Wedding & Birthday Invitations","Logos & Brochures","Roll-up Banners","Social Media Designs","Company Profiles","Certificates"],
  },
  {
    Icon: Palette, title: "Brand Identity & Marketing",
    color: "from-cyan-500 to-blue-600", shadow: "shadow-cyan-500/10",
    items: ["Brand Identity Design","Menus & Product Packaging","Marketing Materials","Advertising Designs","Social Media Branding","Corporate Stationery"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white dark:bg-[#0f172a] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badge="What I Do"
            title="My"
            accent="Services"
            subtitle="Comprehensive digital solutions tailored to help your business grow and thrive in the digital world."
          />
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const { Icon, title, color, shadow, items } = service;
            return (
              <FadeIn key={title} delay={i * 0.07}>
                <div className={`group h-full bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-gray-100 dark:border-gray-700/50 card-hover shadow-md ${shadow}`}>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={26} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors leading-snug">
                    {title}
                  </h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-gray-600 dark:text-gray-400 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className={`mt-5 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${color} rounded-full transition-all duration-500`} />
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* CTA banner */}
        <FadeIn delay={0.25} className="mt-14">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 sm:p-12 text-center shadow-2xl shadow-blue-500/20">
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-blue-400/20 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">Have a project in mind?</h3>
              <p className="text-blue-100 mb-7 max-w-xl mx-auto leading-relaxed">
                Let&apos;s work together to build something amazing. I&apos;m available for freelance projects and collaborations.
              </p>
              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-white text-blue-700 text-sm font-bold hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
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
