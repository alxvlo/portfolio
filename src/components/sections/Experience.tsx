"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/config/portfolio";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { Briefcase, Calendar } from "lucide-react";

export function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <Section id="experience" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 flex items-center gap-4">
          <span className="text-[#ff5e00] font-mono text-xl md:text-3xl font-light">
            04.
          </span>
          <span className="text-white">Experience_Log</span>
        </h2>
        <div className="h-px w-full max-w-[200px] bg-gradient-to-r from-[#ff5e00] to-transparent mb-8" />
      </motion.div>

      <div className="relative pl-6 md:pl-0">
        {/* Timeline Vertical Line (Hidden on small mobile, visible on md+) */}
        <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-white/10" />

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center justify-between w-full group ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-[50%] -translate-x-1/2 w-8 h-8 rounded-full bg-[#0a0a0c] border-2 border-[#ff5e00] items-center justify-center shadow-[0_0_10px_rgba(255,94,0,0.5)] z-10 transition-transform duration-300 group-hover:scale-125 group-hover:bg-[#ff5e00]">
                <Briefcase className="w-3 h-3 text-[#ff5e00] group-hover:text-black" />
              </div>

              {/* Content Card */}
              <div
                className={`w-full md:w-[45%] ${
                  index % 2 === 0 ? "md:pl-8 lg:pl-16" : "md:pr-8 lg:pr-16"
                }`}
              >
                <GlassCard
                  glowColor="orange"
                  className="hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                    <span className="text-6xl font-mono text-[#ff5e00]">
                      {`0${index + 1}`}
                    </span>
                  </div>
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-[#ff5e00] transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center text-[#ff5e00] text-sm font-mono whitespace-nowrap bg-[#ff5e00]/10 px-3 py-1 rounded-full border border-[#ff5e00]/20">
                        <Calendar className="w-3 h-3 mr-2" />
                        {exp.period}
                      </div>
                    </div>
                    <div className="text-lg font-medium text-zinc-300 mb-4 border-b border-white/10 pb-4 inline-block">
                      @ {exp.company}
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
