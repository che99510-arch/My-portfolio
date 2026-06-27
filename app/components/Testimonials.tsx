"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    name: "Emmanuel Nkwi",
    role: "Principal, Bright Future Academy",
    country: "🇨🇲 Cameroon",
    rating: 5,
    text: "The school management system Mike built for us transformed our operations completely. Student records, fee tracking, attendance — all in one place. Our staff is more productive and parents are impressed. Excellent work!",
    initials: "EN",
    color: "from-indigo-500 to-blue-600",
  },
  {
    name: "Amara Diallo",
    role: "Founder, Diallo Boutique",
    country: "🇸🇳 Senegal",
    rating: 5,
    text: "My brand identity is now something I am truly proud of. From the logo to the social media templates, Mike brought my vision to life with creativity and professionalism. He understood exactly what I wanted.",
    initials: "AD",
    color: "from-blue-600 to-cyan-500",
  },
  {
    name: "David Osei",
    role: "Operations Manager, MediCare Clinic",
    country: "🇬🇭 Ghana",
    rating: 5,
    text: "The hospital management software streamlined our entire workflow. Patient registration, billing, inventory — it all works perfectly. Mike was thorough, patient, and delivered on time. Will definitely work with him again.",
    initials: "DO",
    color: "from-violet-500 to-blue-600",
  },
  {
    name: "Mama Chantal Ngo",
    role: "Owner, Boutique Mama Chantal",
    country: "🇨🇲 Cameroon",
    rating: 5,
    text: "The POS system Mike developed for my shop is incredible. It handles sales, tracks inventory, and even prints receipts. My business now runs smoother than ever. I recommend Mike to every business owner I know.",
    initials: "MC",
    color: "from-blue-500 to-indigo-600",
  },
];

const miniStats = [
  { value: "3+", label: "Happy Clients" },
  { value: "5+", label: "Projects Completed" },
  { value: "5★", label: "Average Rating" },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const go = (d: number) => {
    setDirection(d);
    setCurrent((prev) => (prev + d + testimonials.length) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="section-padding bg-gray-50 dark:bg-[#0a1628] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badge="Client Stories"
            title="What Clients"
            accent="Say"
            subtitle="Real feedback from real clients who trusted me with their most important projects."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 60 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white dark:bg-[#1e293b] rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 dark:border-gray-700/50 relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-48 h-48 rounded-full bg-gradient-to-br ${t.color} opacity-5 blur-2xl pointer-events-none`} />
                <Quote size={44} className="text-blue-100 dark:text-blue-900/50 mb-5" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={17} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl leading-relaxed mb-8 relative z-10">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className={`w-13 h-13 w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center shadow-lg shrink-0`}>
                    <span className="text-white font-bold text-base">{t.initials}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white text-base">{t.name}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{t.role}</p>
                    <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mt-0.5">{t.country}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={() => go(-1)}
                className="w-10 h-10 rounded-full bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    className={`rounded-full transition-all duration-300 ${i === current ? "w-8 h-2.5 bg-blue-600" : "w-2.5 h-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-blue-400"}`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => go(1)}
                className="w-10 h-10 rounded-full bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Mini stats */}
        <FadeIn delay={0.2} className="grid sm:grid-cols-3 gap-4 mt-10">
          {miniStats.map((stat) => (
            <div key={stat.label} className="text-center p-5 bg-white dark:bg-[#1e293b] rounded-2xl border border-gray-100 dark:border-gray-700/50 shadow-sm">
              <p className="text-3xl font-black gradient-text">{stat.value}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
