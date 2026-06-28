"use client";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

const techCategories = [
  {
    name: "Frontend",
    emoji: "🖥️",
    gradient: "from-orange-500 to-yellow-400",
    bg: "bg-orange-50 dark:bg-orange-900/10",
    border: "border-orange-200 dark:border-orange-800/30",
    techs: [
      { name: "HTML5",        bg: "#E34F26", fg: "#fff",    letter: "H5" },
      { name: "CSS3",         bg: "#1572B6", fg: "#fff",    letter: "C3" },
      { name: "JavaScript",   bg: "#F7DF1E", fg: "#222",    letter: "JS" },
      { name: "TypeScript",   bg: "#3178C6", fg: "#fff",    letter: "TS" },
      { name: "React",        bg: "#20232A", fg: "#61DAFB", letter: "Re" },
      { name: "Next.js",      bg: "#000000", fg: "#fff",    letter: "Nx" },
      { name: "Tailwind CSS", bg: "#06B6D4", fg: "#fff",    letter: "TW" },
      { name: "Bootstrap",    bg: "#7952B3", fg: "#fff",    letter: "BS" },
    ],
  },
  {
    name: "Backend",
    emoji: "⚙️",
    gradient: "from-green-500 to-emerald-500",
    bg: "bg-green-50 dark:bg-green-900/10",
    border: "border-green-200 dark:border-green-800/30",
    techs: [
      { name: "Python",      bg: "#3776AB", fg: "#FFD43B", letter: "Py" },
      { name: "FastAPI",     bg: "#009688", fg: "#fff",    letter: "FA" },
      { name: "Django",      bg: "#092E20", fg: "#44B78B", letter: "Dj" },
      { name: "Node.js",     bg: "#339933", fg: "#fff",    letter: "No" },
      { name: "Express.js",  bg: "#303030", fg: "#fff",    letter: "Ex" },
      { name: "PHP",         bg: "#777BB4", fg: "#fff",    letter: "PH" },
      { name: "Laravel",     bg: "#FF2D20", fg: "#fff",    letter: "La" },
    ],
  },
  {
    name: "Mobile Development",
    emoji: "📱",
    gradient: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50 dark:bg-blue-900/10",
    border: "border-blue-200 dark:border-blue-800/30",
    techs: [
      { name: "Flutter",      bg: "#02569B", fg: "#54C5F8", letter: "Fl" },
      { name: "React Native", bg: "#20232A", fg: "#61DAFB", letter: "RN" },
      { name: "Android",      bg: "#3DDC84", fg: "#fff",    letter: "An" },
      { name: "Kotlin",       bg: "#7F52FF", fg: "#fff",    letter: "Ko" },
    ],
  },
  {
    name: "Databases",
    emoji: "🗄️",
    gradient: "from-blue-600 to-indigo-600",
    bg: "bg-indigo-50 dark:bg-indigo-900/10",
    border: "border-indigo-200 dark:border-indigo-800/30",
    techs: [
      { name: "MySQL",      bg: "#4479A1", fg: "#fff",    letter: "My" },
      { name: "PostgreSQL", bg: "#336791", fg: "#fff",    letter: "PG" },
      { name: "MongoDB",    bg: "#47A248", fg: "#fff",    letter: "Mo" },
      { name: "SQLite",     bg: "#003B57", fg: "#fff",    letter: "SL" },
      { name: "Firebase",   bg: "#FFCA28", fg: "#222",    letter: "Fb" },
      { name: "Supabase",   bg: "#3ECF8E", fg: "#1a1a1a", letter: "Sb" },
    ],
  },
  {
    name: "Tools & Platforms",
    emoji: "🔧",
    gradient: "from-gray-500 to-slate-700",
    bg: "bg-slate-50 dark:bg-slate-800/20",
    border: "border-slate-200 dark:border-slate-700/30",
    techs: [
      { name: "Git",        bg: "#F05032", fg: "#fff",    letter: "Gi" },
      { name: "GitHub",     bg: "#181717", fg: "#fff",    letter: "GH" },
      { name: "Docker",     bg: "#2496ED", fg: "#fff",    letter: "Do" },
      { name: "Postman",    bg: "#FF6C37", fg: "#fff",    letter: "Pm" },
      { name: "VS Code",    bg: "#007ACC", fg: "#fff",    letter: "VS" },
      { name: "Figma",      bg: "#F24E1E", fg: "#fff",    letter: "Fi" },
      { name: "Vercel",     bg: "#000000", fg: "#fff",    letter: "Ve" },
      { name: "Render",     bg: "#46E3B7", fg: "#111",    letter: "Rn" },
      { name: "Cloudinary", bg: "#3448C5", fg: "#fff",    letter: "Cl" },
    ],
  },
];

function TechPill({
  name, bg, fg, letter, index,
}: { name: string; bg: string; fg: string; letter: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay: index * 0.035 }}
      whileHover={{ scale: 1.05, y: -3 }}
      className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white dark:bg-[#0f172a] border border-gray-100 dark:border-gray-700/40 shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-700/50 transition-all cursor-default group"
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm shadow group-hover:scale-110 transition-transform duration-200 shrink-0"
        style={{ backgroundColor: bg, color: fg }}
      >
        {letter}
      </div>
      <span className="text-[11px] font-semibold text-gray-600 dark:text-gray-400 text-center leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors w-full">
        {name}
      </span>
    </motion.div>
  );
}

export default function Technologies() {
  return (
    <section id="technologies" className="section-padding bg-white dark:bg-[#0f172a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badge="Tech Stack"
            title="Technologies I"
            accent="Use"
            subtitle="The modern tools and frameworks I use to build fast, scalable, and beautiful digital products."
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {techCategories.map((cat, ci) => (
            <FadeIn key={cat.name} delay={ci * 0.08}>
              {/* Category card */}
              <div className={`rounded-2xl border ${cat.border} ${cat.bg} p-5 h-full`}>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200 dark:border-gray-700/40">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-lg shadow-md shrink-0`}>
                    {cat.emoji}
                  </div>
                  <div>
                    <h3 className="font-black text-gray-900 dark:text-white text-sm leading-none">{cat.name}</h3>
                    <p className="text-gray-400 text-xs mt-0.5">{cat.techs.length} technologies</p>
                  </div>
                </div>

                {/* Tech grid — 3 cols on mobile, 4 on larger */}
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
                  {cat.techs.map((tech, ti) => (
                    <TechPill key={tech.name} {...tech} index={ti} />
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
