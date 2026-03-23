"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/config/portfolio";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink, Github, FolderOpen } from "lucide-react";
import { useState } from "react";

export function ProjectsSection() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(projects.flatMap((p) => p.categories)))];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(filter));

  return (
    <Section id="projects" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 flex items-center gap-4">
          <span className="text-[#ff00ff] font-mono text-xl md:text-3xl font-light">
            03.
          </span>
          <span className="text-white">Featured_Work</span>
        </h2>
        <div className="h-px w-full max-w-[200px] bg-gradient-to-r from-[#ff00ff] to-transparent mb-8" />
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap gap-4 mb-12"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full font-mono text-sm transition-all duration-300 border ${
              filter === cat
                ? "bg-[#ff00ff]/20 text-[#ff00ff] border-[#ff00ff]/50 shadow-[0_0_15px_rgba(255,0,255,0.4)]"
                : "bg-transparent text-zinc-400 border-white/10 hover:border-white/30 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Project Grid */}
      <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <GlassCard glowColor="pink" className="h-full flex flex-col group relative overflow-visible">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                <FolderOpen className="w-32 h-32 text-[#ff00ff]" strokeWidth={1} />
              </div>
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="space-y-1">
                  <span className="text-[#ff00ff] font-mono text-sm">
                    {project.role}
                  </span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-[#00f0ff] transition-colors hover:scale-110"
                    aria-label="GitHub Link"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-[#00f0ff] transition-colors hover:scale-110"
                    aria-label="External Link"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="relative z-10 bg-[#0a0a0c]/80 border border-white/5 p-4 rounded-lg mb-6 shadow-inner text-zinc-300 text-sm leading-relaxed flex-grow backdrop-blur-md">
                <p className="mb-4">{project.description}</p>
                <p className="text-[#39ff14]/80 font-mono text-xs">
                  &gt; Impact: {project.impact}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="default" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
