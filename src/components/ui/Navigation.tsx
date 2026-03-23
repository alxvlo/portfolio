"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { portfolioData } from "@/config/portfolio";
import { Download, Menu, X } from "lucide-react";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const { resumeLink } = portfolioData.personal;

  const navLinks = [
    { name: "Home", href: "#home", color: "#00f0ff" },
    { name: "About", href: "#about", color: "#00f0ff" },
    { name: "Skills", href: "#skills", color: "#39ff14" },
    { name: "Projects", href: "#projects", color: "#ff00ff" },
    { name: "Experience", href: "#experience", color: "#ff5e00" },
    { name: "Contact", href: "#contact", color: "#39ff14" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple intersection observer logic for active section
      const sections = navLinks.map((link) => link.href.substring(1));
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }

      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, navLinks]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass border-t-0 border-l-0 border-r-0 rounded-none bg-[#0a0a0c]/80"
            : "bg-transparent py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-mono text-2xl font-bold tracking-tighter">
              <a
                href="#home"
                onClick={(e) => scrollToSection(e, "#home")}
                className="text-white hover:text-[#00f0ff] transition-colors"
              >
                &lt;J/&gt;
              </a>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium font-mono transition-colors relative group",
                      activeSection === link.href.substring(1)
                        ? "text-white"
                        : "text-zinc-400 hover:text-white"
                    )}
                  >
                    <span className="text-xs mr-1 opacity-50 group-hover:opacity-100 transition-opacity" style={{ color: link.color }}>
                      //
                    </span>
                    {link.name}
                    {activeSection === link.href.substring(1) && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 shadow-[0_0_10px_currentColor]"
                        style={{ backgroundColor: link.color }}
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                ))}

                <a
                  href={resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors border border-[#39ff14]/50 bg-transparent hover:bg-[#39ff14]/10 hover:text-[#39ff14] text-white h-9 px-4 py-2 font-mono group"
                >
                  <Download className="mr-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
                  Resume
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="h-1 bg-gradient-to-r from-[#00f0ff] via-[#39ff14] to-[#ff00ff] origin-left z-50"
          style={{ scaleX }}
        />
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#0a0a0c]/95 backdrop-blur-md flex items-center justify-center">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center w-full max-w-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={cn(
                  "block px-3 py-4 rounded-md text-2xl font-mono font-medium text-center w-full border-b border-white/5",
                  activeSection === link.href.substring(1)
                    ? "text-white bg-white/5"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                )}
                style={{ color: activeSection === link.href.substring(1) ? link.color : undefined }}
              >
                {link.name}
              </a>
            ))}
             <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center whitespace-nowrap rounded-md text-xl font-medium transition-colors border border-[#39ff14]/50 bg-transparent hover:bg-[#39ff14]/10 text-[#39ff14] h-14 px-8 py-2 w-full font-mono"
              >
                <Download className="mr-3 h-6 w-6" />
                Download Resume
              </a>
          </div>
        </div>
      )}
    </>
  );
}
