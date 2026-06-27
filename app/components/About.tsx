"use client";
import { Briefcase, GraduationCap, Heart, CheckCircle2 } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";
import { scrollTo } from "../lib/constants";

const highlights = [
  "3 Years of Professional Experience",
  "Full-Stack Web Development",
  "Native & Cross-Platform Mobile Apps",
  "UI/UX Design & Prototyping",
  "Professional Graphic Design",
  "Clean, Scalable & Maintainable Code",
];

const cards = [
  { Icon: Briefcase,    title: "Professional", desc: "Delivering enterprise-grade solutions that scale.", color: "from-blue-500 to-blue-700" },
  { Icon: GraduationCap, title: "Experienced",  desc: "3 years building digital products for real businesses.", color: "from-indigo-500 to-blue-600" },
  { Icon: Heart,        title: "Passionate",   desc: "Genuinely care about quality and client success.", color: "from-blue-600 to-cyan-500" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-[#0a1628] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader badge="About Me" title="Who I" accent="Am" />
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Left — code visual */}
          <FadeIn delay={0.1}>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/20 to-indigo-600/10 blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden gradient-border shadow-2xl">
                <div className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] p-6 sm:p-10">
                  <div className="bg-[#0f1629]/80 rounded-2xl p-5 font-mono text-sm mb-5">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                      <span className="ml-2 text-gray-400 text-xs">mike.ts</span>
                    </div>
                    <div className="space-y-1.5 text-xs sm:text-sm leading-relaxed">
                      <p><span className="text-purple-400">const</span> <span className="text-blue-300">mike</span> = {"{"}</p>
                      <p className="pl-4"><span className="text-green-400">name</span>: <span className="text-yellow-300">&quot;Mike Software&quot;</span>,</p>
                      <p className="pl-4"><span className="text-green-400">role</span>: <span className="text-yellow-300">&quot;Software Engineer&quot;</span>,</p>
                      <p className="pl-4"><span className="text-green-400">location</span>: <span className="text-yellow-300">&quot;Cameroon 🇨🇲&quot;</span>,</p>
                      <p className="pl-4"><span className="text-green-400">skills</span>: [</p>
                      <p className="pl-8"><span className="text-yellow-300">&quot;Full-Stack Dev&quot;</span>,</p>
                      <p className="pl-8"><span className="text-yellow-300">&quot;Mobile Apps&quot;</span>,</p>
                      <p className="pl-8"><span className="text-yellow-300">&quot;UI/UX Design&quot;</span>,</p>
                      <p className="pl-8"><span className="text-yellow-300">&quot;Graphic Design&quot;</span></p>
                      <p className="pl-4">],</p>
                      <p className="pl-4"><span className="text-green-400">passion</span>: <span className="text-yellow-300">&quot;Building amazing things&quot;</span></p>
                      <p>{"}"}</p>
                      <p className="mt-3 text-gray-500">// Always learning, always building</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {cards.map(({ Icon, title, desc, color }) => (
                      <div key={title} className="bg-white/10 rounded-xl p-3 text-center">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-2`}>
                          <Icon size={15} className="text-white" />
                        </div>
                        <p className="text-white font-bold text-xs">{title}</p>
                        <p className="text-blue-200 text-[10px] mt-1 leading-tight">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right — text */}
          <FadeIn delay={0.2}>
            <div className="space-y-5">
              <h3 className="text-3xl font-black text-gray-900 dark:text-white leading-tight">
                Passionate About Building{" "}
                <span className="gradient-text">Digital Solutions</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                I am a passionate Software Engineer and Creative Designer dedicated to transforming ideas into digital solutions that make businesses grow. I specialize in developing scalable websites, mobile applications, desktop software, business systems, and visually appealing graphic designs that combine creativity with technology.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                My goal is to help businesses establish a powerful digital presence through innovative software solutions and outstanding branding. Whether you are a startup, an established business, a school, or an organization — I deliver results that exceed expectations.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-1">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={17} className="text-blue-600 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => scrollTo("#contact")}
                  className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 hover:-translate-y-0.5"
                >
                  Get In Touch
                </button>
                <button
                  onClick={() => scrollTo("#portfolio")}
                  className="px-6 py-3 rounded-xl gradient-border text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all hover:-translate-y-0.5"
                >
                  My Portfolio
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
