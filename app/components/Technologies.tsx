"use client";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

const techCategories = [
  {
    name: "Frontend",
    techs: [
      { name: "React",       icon: "⚛️" },
      { name: "Next.js",     icon: "𝗡" },
      { name: "TypeScript",  icon: "TS" },
      { name: "Tailwind",    icon: "🌊" },
      { name: "HTML5",       icon: "🌐" },
      { name: "CSS3",        icon: "🎨" },
    ],
  },
  {
    name: "Mobile",
    techs: [
      { name: "Flutter",  icon: "🦋" },
      { name: "Android",  icon: "🤖" },
      { name: "iOS",      icon: "🍎" },
    ],
  },
  {
    name: "Backend",
    techs: [
      { name: "Django",   icon: "🐍" },
      { name: "FastAPI",  icon: "⚡" },
      { name: "Python",   icon: "Py" },
    ],
  },
  {
    name: "Database",
    techs: [
      { name: "MySQL",       icon: "🐬" },
      { name: "PostgreSQL",  icon: "🐘" },
      { name: "SQLite",      icon: "🗄️" },
    ],
  },
  {
    name: "DevOps & Cloud",
    techs: [
      { name: "Git",      icon: "🌿" },
      { name: "GitHub",   icon: "🐙" },
      { name: "Docker",   icon: "🐳" },
      { name: "Vercel",   icon: "▲" },
      { name: "Netlify",  icon: "🌍" },
      { name: "Render",   icon: "☁️" },
    ],
  },
  {
    name: "Design Tools",
    techs: [
      { name: "Figma",      icon: "🎨" },
      { name: "Photoshop",  icon: "Ps" },
      { name: "VS Code",    icon: "💻" },
    ],
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className="section-padding bg-white dark:bg-[#0f172a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badge="Tech Stack"
            title="Technologies I"
            accent="Use"
            subtitle="Modern tools and frameworks I use to build fast, scalable, and beautiful digital products."
          />
        </FadeIn>

        <div className="space-y-8">
          {techCategories.map((cat, ci) => (
            <FadeIn key={cat.name} delay={ci * 0.08}>
              <div>
                <h3 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-6 h-0.5 bg-blue-600 rounded-full" />
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {cat.techs.map((tech, ti) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: ti * 0.04 }}
                      whileHover={{ scale: 1.07, y: -3 }}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600 transition-all cursor-default group"
                    >
                      <span className="text-base leading-none w-5 text-center">{tech.icon}</span>
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
