"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/config/portfolio";

export function Footer() {
  const { githubUrl, linkedinUrl, email } = portfolioData.personal;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0a0a0c] py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-zinc-500 font-mono">
            &copy; {year} Designed & Built by {portfolioData.personal.name}. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-[#00f0ff] transition-colors"
          >
            <span className="sr-only">GitHub</span>
            <Github className="w-5 h-5" />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-[#39ff14] transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${email}`}
            className="text-zinc-500 hover:text-[#ff00ff] transition-colors"
          >
            <span className="sr-only">Email</span>
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
