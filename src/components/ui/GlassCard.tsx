import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "cyan" | "purple" | "pink" | "none";
}

export function GlassCard({ children, className, hover = true, glow = "none" }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-effect rounded-xl p-6",
        hover && "glass-hover",
        glow === "cyan" && "glow-cyan",
        glow === "purple" && "glow-purple",
        glow === "pink" && "glow-pink",
        className
      )}
    >
      {children}
    </div>
  );
}
