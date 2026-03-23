"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/config/portfolio";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { Code2, Cpu, Rocket } from "lucide-react";

export function AboutSection() {
  const { professionalSummary, principles } = portfolioData.about;

  const iconMap = [
    <Rocket className="w-8 h-8 text-[#ff5e00] mb-4" key="1" />,
    <Cpu className="w-8 h-8 text-[#00f0ff] mb-4" key="2" />,
    <Code2 className="w-8 h-8 text-[#39ff14] mb-4" key="3" />,
  ];

  const colorMap = ["orange", "cyan", "green"] as const;

  return (
    <Section id="about" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 flex items-center gap-4">
          <span className="text-[#00f0ff] font-mono text-xl md:text-3xl font-light">
            01.
          </span>
          <span className="text-white">About_Me</span>
        </h2>
        <div className="h-px w-full max-w-[200px] bg-gradient-to-r from-[#00f0ff] to-transparent mb-8" />
        <p className="text-lg text-zinc-400 max-w-3xl leading-relaxed">
          {professionalSummary}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {principles.map((principle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <GlassCard glowColor={colorMap[index]} className="h-full flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
              <div>
                {iconMap[index]}
                <h3 className="text-xl font-bold text-white mb-2 tracking-wide font-mono">
                  {principle.title}
                </h3>
              </div>
              <p className="text-zinc-500 text-sm mt-4">
                {principle.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
