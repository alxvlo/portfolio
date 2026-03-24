"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/config/portfolio";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { ListChecks } from "lucide-react";

export function ProcessSection() {
  const { process } = portfolioData;

  return (
    <Section id="process" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-4">
          <span className="text-[#00f0ff] font-mono text-xl md:text-3xl font-light">
            05.
          </span>
          <span className="text-white">Workflow</span>
        </h2>
        <div className="h-px w-full max-w-[200px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent mx-auto mb-8" />
        <p className="text-zinc-400 max-w-2xl mx-auto">
          How I approach building scalable applications and automation pipelines.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {process.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
          >
             <GlassCard glowColor="cyan" className="h-full flex flex-col group relative overflow-hidden transition-all duration-300 hover:-translate-y-2">
                <div className="absolute -top-10 -right-10 text-[10rem] font-black text-white/5 group-hover:text-[#00f0ff]/10 transition-colors duration-500 font-mono select-none pointer-events-none z-0 leading-none">
                  {step.step}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff] group-hover:scale-110 transition-transform duration-300">
                      <ListChecks className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-mono tracking-wide">{step.title}</h3>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mt-auto">
                    {step.description}
                  </p>
                </div>
             </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}