"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const techCategories = [
  {
    name: "Frontend",
    techs: [
      { name: "React", icon: "⚛️", color: "#61DAFB" },
      { name: "Next.js", icon: "▲", color: "#000000" },
      { name: "TypeScript", icon: "TS", color: "#3178C6" },
      { name: "Tailwind", icon: "🌊", color: "#06B6D4" },
      { name: "HTML5", icon: "🌐", color: "#E34F26" },
      { name: "CSS3", icon: "🎨", color: "#1572B6" },
    ],
  },
  {
    name: "Mobile",
    techs: [
      { name: "Flutter", icon: "🦋", color: "#02569B" },
      { name: "Android", icon: "🤖", color: "#3DDC84" },
      { name: "iOS", icon: "🍎", color: "#555555" },
    ],
  },
  {
    name: "Backend",
    techs: [
      { name: "Django", icon: "🐍", color: "#092E20" },
      { name: "FastAPI", icon: "⚡", color: "#009688" },
      { name: "Python", icon: "🐍", color: "#3776AB" },
    ],
  },
  {
    name: "Database",
    techs: [
      { name: "MySQL", icon: "🐬", color: "#4479A1" },
      { name: "PostgreSQL", icon: "🐘", color: "#336791" },
      { name: "SQLite", icon: "🗄️", color: "#003B57" },
    ],
  },
  {
    name: "DevOps & Cloud",
    techs: [
      { name: "Git", icon: "🌿", color: "#F05032" },
      { name: "GitHub", icon: "🐙", color: "#181717" },
      { name: "Docker", icon: "🐳", color: "#2496ED" },
      { name: "Vercel", icon: "▲", color: "#000000" },
      { name: "Netlify", icon: "🌐", color: "#00C7B7" },
      { name: "Render", icon: "☁️", color: "#46E3B7" },
    ],
  },
  {
    name: "Design Tools",
    techs: [
      { name: "Figma", icon: "🎨", color: "#F24E1E" },
      { name: "Photoshop", icon: "Ps", color: "#31A8FF" },
      { name: "VS Code", icon: "💻", color: "#007ACC" },
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

export default function Technologies() {
  return (
    <section id="technologies" className="section-padding bg-white dark:bg-[#0f172a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
            Tech Stack
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Technologies I <span className="gradient-text">Use</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Modern tools and frameworks I use to build fast, scalable, and beautiful digital products.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mt-4" />
        </FadeIn>

        <div className="space-y-8">
          {techCategories.map((cat, ci) => (
            <FadeIn key={cat.name} delay={ci * 0.08}>
              <div>
                <h3 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-blue-600 rounded-full" />
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {cat.techs.map((tech, ti) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: ti * 0.05 }}
                      whileHover={{ scale: 1.08, y: -3 }}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-700 transition-all cursor-default group"
                    >
                      <span className="text-lg leading-none">{tech.icon}</span>
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 transition-colors">
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
