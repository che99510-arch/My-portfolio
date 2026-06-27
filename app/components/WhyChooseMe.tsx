"use client";
import { motion } from "framer-motion";
import {
  Star, Zap, DollarSign, MessageSquare, Shield, Cpu,
  TrendingUp, Code, Monitor, Heart, ThumbsUp, Eye,
} from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

const reasons = [
  { Icon: Star,         title: "Professional Quality",    desc: "Pixel-perfect design and enterprise-grade code in every project." },
  { Icon: Zap,          title: "Fast Delivery",           desc: "Efficient workflows that deliver your project on time, every time." },
  { Icon: DollarSign,   title: "Affordable Pricing",      desc: "Premium quality at prices that work for startups and businesses." },
  { Icon: MessageSquare,title: "Excellent Communication", desc: "Clear, transparent updates throughout your entire project." },
  { Icon: Shield,       title: "Reliable Support",        desc: "Post-launch support and maintenance to keep things running smoothly." },
  { Icon: Cpu,          title: "Modern Technologies",     desc: "Always using the latest, most efficient tools and frameworks." },
  { Icon: TrendingUp,   title: "Scalable Solutions",      desc: "Built to grow with your business from day one." },
  { Icon: Code,         title: "Clean Code",              desc: "Readable, maintainable code that your team can work with." },
  { Icon: Monitor,      title: "Responsive Design",       desc: "Flawless experience on every device — desktop, tablet, mobile." },
  { Icon: Eye,          title: "Attention to Detail",     desc: "No corner is cut. Every pixel and every line matters." },
  { Icon: Heart,        title: "Customer Satisfaction",   desc: "Your satisfaction is the metric I optimize for most." },
  { Icon: ThumbsUp,     title: "Proven Track Record",     desc: "Trusted by clients across Cameroon and beyond." },
];

export default function WhyChooseMe() {
  return (
    <section id="whychooseme" className="section-padding bg-white dark:bg-[#0f172a] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badge="Why Me?"
            title="Why Choose"
            accent="Mike Software"
            subtitle="Here's what sets me apart from the rest and why clients keep coming back."
          />
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {reasons.map(({ Icon, title, desc }, i) => (
            <FadeIn key={title} delay={i * 0.04}>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.2 }}
                className="group p-5 rounded-2xl bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-blue-500/15 hover:border-blue-200 dark:hover:border-blue-700/50 transition-all cursor-default h-full"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon size={20} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1.5 group-hover:text-blue-600 transition-colors leading-snug">
                  {title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
