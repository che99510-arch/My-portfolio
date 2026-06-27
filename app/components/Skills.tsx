"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

const skillGroups = [
  {
    category: "Programming Languages",
    color: "from-blue-600 to-blue-400",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Python",     level: 85 },
      { name: "Java",       level: 75 },
      { name: "HTML5 / CSS3", level: 98 },
      { name: "SQL",        level: 85 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    color: "from-indigo-600 to-blue-500",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "Flutter",         level: 80 },
      { name: "Django",          level: 78 },
    ],
  },
  {
    category: "Databases",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "MySQL",      level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "SQLite",     level: 82 },
    ],
  },
  {
    category: "Design & Tools",
    color: "from-violet-600 to-blue-500",
    skills: [
      { name: "Figma / UI/UX",    level: 92 },
      { name: "Adobe Photoshop",  level: 88 },
      { name: "Git / GitHub",     level: 92 },
      { name: "Docker / Vercel",  level: 75 },
    ],
  },
];

function SkillBar({ name, level, color, index }: { name: string; level: number; color: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{level}%</span>
      </div>
      <div className="h-2.5 bg-gray-100 dark:bg-gray-700/60 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.08, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-[#0a1628] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badge="My Expertise"
            title="Skills &"
            accent="Proficiency"
            subtitle="A snapshot of my technical skillset built through years of real-world projects."
          />
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <FadeIn key={group.category} delay={gi * 0.1}>
              <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-gray-100 dark:border-gray-700/50 shadow-md hover:shadow-blue-500/10 transition-shadow h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${group.color}`} />
                  <h3 className="font-black text-gray-900 dark:text-white text-base">{group.category}</h3>
                </div>
                <div className="space-y-4">
                  {group.skills.map((skill, si) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} color={group.color} index={si} />
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
