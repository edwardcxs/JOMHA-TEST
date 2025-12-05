import React from "react";
import { cn } from "../lib/utils";

interface HighlighterProps {
  children?: React.ReactNode;
  className?: string;
  color?: string;
  action?: "highlight"; // Kept for API compatibility with user code
}

export function Highlighter({
  children,
  className,
  color = "#FFD700",
}: HighlighterProps) {
  return (
    <span
      className={cn("relative inline-block px-1 mx-1 group", className)}
    >
        {/* Highlight Background */}
      <span
        className="absolute inset-0 transform scale-x-0 origin-bottom-left group-hover:scale-x-100 transition-transform duration-500 ease-out -z-10 opacity-70 rounded-sm"
        style={{ backgroundColor: color }}
        // Animate in on mount instead of hover for the hero section effect
        ref={(el) => {
            if (el) {
                // Simple animation trigger after mount
                setTimeout(() => {
                    el.style.transform = "scaleX(1)";
                }, 1200);
            }
        }}
      />
      <span className="relative z-10">{children}</span>
    </span>
  );
}