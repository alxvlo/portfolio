import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "cyan" | "green" | "orange" | "pink" | "default";
}

export function Badge({ children, variant = "default", className, ...props }: BadgeProps) {
  const variants = {
    default: "bg-white/5 text-zinc-300 border border-white/10 hover:bg-white/10 hover:text-white",
    cyan: "bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 shadow-[0_0_10px_rgba(0,240,255,0.1)] hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:bg-[#00f0ff]/20",
    green: "bg-[#39ff14]/10 text-[#39ff14] border border-[#39ff14]/30 shadow-[0_0_10px_rgba(57,255,20,0.1)] hover:shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:bg-[#39ff14]/20",
    orange: "bg-[#ff5e00]/10 text-[#ff5e00] border border-[#ff5e00]/30 shadow-[0_0_10px_rgba(255,94,0,0.1)] hover:shadow-[0_0_15px_rgba(255,94,0,0.3)] hover:bg-[#ff5e00]/20",
    pink: "bg-[#ff00ff]/10 text-[#ff00ff] border border-[#ff00ff]/30 shadow-[0_0_10px_rgba(255,0,255,0.1)] hover:shadow-[0_0_15px_rgba(255,0,255,0.3)] hover:bg-[#ff00ff]/20",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-mono transition-all duration-300 cursor-default",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
