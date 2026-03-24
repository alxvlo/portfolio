"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/config/portfolio";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { Database, Layout, Server, Sparkles, Wrench } from "lucide-react";

export function SkillsSection() {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="w-6 h-6 text-[#00f0ff]" />,
      items: skills.frontend,
      color: "cyan",
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6 text-[#39ff14]" />,
      items: skills.backend,
      color: "green",
    },
    {
      title: "AI & Automation",
      icon: <Sparkles className="w-6 h-6 text-[#ff00ff]" />,
      items: skills.aiAutomation,
      color: "pink",
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="w-6 h-6 text-[#ff5e00]" />,
      items: skills.tools,
      color: "orange",
    },
  ] as const;

  return (
    <Section id="skills" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 flex items-center gap-4">
          <span className="text-[#39ff14] font-mono text-xl md:text-3xl font-light">
            02.
          </span>
          <span className="text-white">Tech_Stack</span>
        </h2>
        <div className="h-px w-full max-w-[200px] bg-gradient-to-r from-[#39ff14] to-transparent mb-8" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <GlassCard
              glowColor={category.color}
              className="h-full group hover:bg-[#141419]/90"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-3 rounded-xl bg-${category.color}-500/10 border border-${category.color}-500/20 shadow-[0_0_15px_rgba(currentColor,0.2)] text-${category.color}-500 group-hover:scale-110 transition-transform duration-300`}
                >
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white tracking-wider">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <Badge key={skill} variant={category.color}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
