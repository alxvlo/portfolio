"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLMotionProps<"section"> {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, className, children, ...props }, ref) => {
    return (
      <motion.section
        id={id}
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "min-h-[80vh] flex flex-col justify-center py-20 px-4 md:px-8 max-w-6xl mx-auto w-full",
          className
        )}
        {...props}
      >
        {children}
      </motion.section>
    );
  }
);

Section.displayName = "Section";
