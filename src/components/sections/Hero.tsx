"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/config/portfolio";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Section } from "@/components/ui/Section";

export function HeroSection() {
  const { name, tagline, shortIntro, resumeLink } = portfolioData.personal;

  return (
    <Section id="home" className="min-h-screen pt-32 pb-16 justify-center">
      <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-[#39ff14] font-mono mb-4 text-sm md:text-base tracking-widest uppercase">
              // Initialization Sequence Complete
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
              <span className="block opacity-90">Hi, I'm</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#39ff14] to-[#00f0ff] text-glow animate-pulse-slow">
                {name}
              </span>
            </h1>
            <h3 className="text-xl md:text-2xl text-zinc-400 font-medium font-mono">
              &gt; {tagline}_
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-zinc-400 max-w-2xl leading-relaxed"
          >
            {shortIntro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button size="lg" className="group" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" asChild className="group border-[#39ff14]/30 hover:bg-[#39ff14]/10 hover:text-[#39ff14] text-[#39ff14]">
              <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
                Resume.exe
              </a>
            </Button>
          </motion.div>

          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.5, delay: 0.8 }}
             className="flex items-center gap-6 pt-8 text-zinc-500"
          >
            <a href={portfolioData.personal.githubUrl} className="hover:text-[#00f0ff] transition-colors hover:scale-110 duration-200">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href={portfolioData.personal.linkedinUrl} className="hover:text-[#00f0ff] transition-colors hover:scale-110 duration-200">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
             <a href={`mailto:${portfolioData.personal.email}`} className="hover:text-[#00f0ff] transition-colors hover:scale-110 duration-200">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
        </div>

        {/* Decorative / Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 w-full max-w-md hidden md:flex justify-center"
        >
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 bg-[#00f0ff] blur-[100px] opacity-20 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 border border-[#00f0ff]/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 border border-[#39ff14]/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="glass absolute inset-8 rounded-full flex items-center justify-center overflow-hidden border-[#00f0ff]/50 shadow-[0_0_30px_rgba(0,240,255,0.2)]">
               <span className="text-6xl font-mono text-[#00f0ff] opacity-50">&lt;/&gt;</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
