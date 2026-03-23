import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: "cyan" | "green" | "orange" | "pink" | "none";
}

export function GlassCard({ children, className, glowColor = "none", ...props }: GlassCardProps) {
  const glowMap = {
    none: "",
    cyan: "hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:border-[#00f0ff]/40",
    green: "hover:shadow-[0_0_20px_rgba(57,255,20,0.2)] hover:border-[#39ff14]/40",
    orange: "hover:shadow-[0_0_20px_rgba(255,94,0,0.2)] hover:border-[#ff5e00]/40",
    pink: "hover:shadow-[0_0_20px_rgba(255,0,255,0.2)] hover:border-[#ff00ff]/40",
  };

  return (
    <div
      className={cn(
        "glass p-6 md:p-8 transition-all duration-300 relative overflow-hidden group",
        glowMap[glowColor],
        className
      )}
      {...props}
    >
      {/* Optional ambient inner glow on hover */}
      {glowColor !== "none" && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500 bg-gradient-to-br from-transparent to-current"></div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
