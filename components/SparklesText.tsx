import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Sparkle {
  id: string;
  x: number;
  y: number;
  color: string;
  delay: number;
  scale: number;
  lifespan: number;
}

const random = (min: number, max: number) => Math.random() * (max - min) + min;

const generateSparkle = (color: string = "#FFF"): Sparkle => {
  return {
    id: Math.random().toString(36).substring(7),
    x: random(-20, 120), // Percentage relative to container
    y: random(-20, 120),
    color: color,
    delay: random(0, 1),
    scale: random(0.5, 1.5),
    lifespan: random(1, 2),
  };
};

const SparkleInstance: React.FC<{ sparkle: Sparkle }> = ({ sparkle }) => {
  return (
    <motion.span
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, sparkle.scale, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: sparkle.lifespan,
        delay: sparkle.delay,
        ease: "easeInOut",
      }}
      style={{
        position: "absolute",
        left: `${sparkle.x}%`,
        top: `${sparkle.y}%`,
        color: sparkle.color,
        pointerEvents: "none",
        zIndex: 2,
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
          fill="currentColor"
        />
      </svg>
    </motion.span>
  );
};

interface SparklesTextProps {
  children?: React.ReactNode;
  colors?: string[];
  sparkleCount?: number;
}

export function SparklesText({
  children,
  colors = ["#FFD700", "#FFFFFF", "#FFA500"],
  sparkleCount = 10,
}: SparklesTextProps) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setSparkles((currentSparkles) => {
        // Remove expired sparkles (simplified check)
        const nextSparkles = currentSparkles.length > 20 ? currentSparkles.slice(10) : currentSparkles;
        
        // Add new sparkles
        if (nextSparkles.length < sparkleCount) {
             const newSparkle = generateSparkle(colors[Math.floor(Math.random() * colors.length)]);
             return [...nextSparkles, newSparkle];
        }
        return nextSparkles;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [colors, sparkleCount]);

  // Initial population
  useEffect(() => {
    setSparkles(Array.from({ length: 5 }).map(() => generateSparkle(colors[0])));
  }, []);

  return (
    <div className="relative inline-block">
      {sparkles.map((sparkle) => (
        <SparkleInstance key={sparkle.id} sparkle={sparkle} />
      ))}
      <span className="relative z-10">{children}</span>
    </div>
  );
}