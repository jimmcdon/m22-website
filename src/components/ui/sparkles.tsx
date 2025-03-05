"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface SparklesProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: boolean;
  backgroundColors?: string[];
  minSize?: number;
  maxSize?: number;
  quantity?: number;
  speed?: number;
}

export const Sparkles = ({
  children,
  className,
  id,
  background = false,
  backgroundColors = ["#FFC700", "#FF0000", "#2AD0CA", "#e9ec6b", "#6becc0"],
  minSize = 10,
  maxSize = 20,
  quantity = 20,
  speed = 1,
}: SparklesProps) => {
  const [sparkles, setSparkles] = useState<Array<{ id: string; size: number; color: string; position: { x: number; y: number; }; createdAt: number; }>>([]);
  const sparklesRef = useRef<HTMLDivElement>(null);
  const sparkleIdCounterRef = useRef(0);
  const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

  // Generate a unique ID for each sparkle
  const generateUniqueId = () => {
    sparkleIdCounterRef.current += 1;
    return `sparkle-${Date.now()}-${sparkleIdCounterRef.current}-${Math.random().toString(36).substr(2, 9)}`;
  };

  useEffect(() => {
    const randomColor = () => backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
    
    const createSparkle = (): { id: string; size: number; color: string; position: { x: number; y: number; }; createdAt: number; } => {
      if (!sparklesRef.current) return { id: "", size: 0, color: "", position: { x: 0, y: 0 }, createdAt: 0 };
      
      const rect = sparklesRef.current.getBoundingClientRect();
      const size = random(minSize, maxSize);
      
      return {
        id: generateUniqueId(),
        size,
        color: randomColor(),
        position: {
          x: random(0, Math.max(1, rect.width - size)),
          y: random(0, Math.max(1, rect.height - size)),
        },
        createdAt: Date.now(),
      };
    };

    const createSparkles = () => {
      const newSparkles = [];
      for (let i = 0; i < quantity; i++) {
        newSparkles.push(createSparkle());
      }
      setSparkles(newSparkles);
    };

    // Initial sparkles with delay to ensure container is sized
    const initialTimer = setTimeout(createSparkles, 100);

    // Create new sparkles periodically if background mode is enabled
    const intervalTimer = background ? setInterval(createSparkles, 2000 / speed) : null;

    return () => {
      clearTimeout(initialTimer);
      if (intervalTimer) clearInterval(intervalTimer);
    };
  }, [background, speed, quantity, minSize, maxSize, backgroundColors]);

  return (
    <div className={cn("relative", className)} id={id} ref={sparklesRef}>
      {background && (
        <AnimatePresence>
          {sparkles.map((sparkle) => (
            <motion.div
              key={sparkle.id}
              className="absolute rounded-full z-0 pointer-events-none"
              style={{
                width: sparkle.size,
                height: sparkle.size,
                backgroundColor: sparkle.color,
                top: sparkle.position.y,
                left: sparkle.position.x,
                boxShadow: `0 0 ${sparkle.size / 2}px ${sparkle.color}`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.9 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 1 / speed }}
            />
          ))}
        </AnimatePresence>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}; 