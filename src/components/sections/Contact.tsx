"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/config/portfolio";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Mail, MessageSquare, Send } from "lucide-react";

export function ContactSection() {
  const { email } = portfolioData.personal;

  return (
    <Section id="contact" className="py-24 min-h-[60vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-4">
          <span className="text-[#39ff14] font-mono text-xl md:text-3xl font-light">
            06.
          </span>
          <span className="text-white">What's_Next?</span>
        </h2>
        <div className="h-px w-full max-w-[200px] bg-gradient-to-r from-transparent via-[#39ff14] to-transparent mx-auto mb-8" />

        <p className="text-zinc-400 mb-8 text-lg">
          I'm currently open to new opportunities in Web Development and AI/Automation Engineering.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button size="lg" className="group text-lg px-8 h-14" asChild>
             <a href={`mailto:${email}`}>
                Say Hello
                <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
             </a>
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
}