import React from "react";
import { cn } from "../lib/utils";

interface WordRotateProps {
  className?: string;
  words: string[];
  duration?: number;
}

export function WordRotate({
  className,
  words,
  duration = 2500,
}: WordRotateProps) {
  const [displayWord, setDisplayWord] = React.useState(words[0]);
  const [index, setIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setDisplayWord(words[(index + 1) % words.length]);
        setIsTransitioning(false);
      }, 350);
    }, duration);
    return () => clearInterval(interval);
  }, [index, words, duration]);

  return (
    <span
      className={cn(
        "inline-block transition-all duration-500 ease-in-out",
        isTransitioning ? "opacity-0 scale-90" : "opacity-100 scale-100",
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {displayWord}
    </span>
  );
}
