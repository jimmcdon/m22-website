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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const sparkleIdCounterRef = useRef(0);

  const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
  const randomColor = () => backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

  // Generate a unique ID for each sparkle
  const generateUniqueId = () => {
    sparkleIdCounterRef.current += 1;
    return `sparkle-${Date.now()}-${sparkleIdCounterRef.current}-${Math.random().toString(36).substr(2, 9)}`;
  };

  const createSparkle = () => {
    if (!sparklesRef.current) return null;
    
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
    if (!sparklesRef.current) return;
    
    const newSparkles = Array.from({ length: quantity }, () => createSparkle()).filter(Boolean) as Array<{ id: string; size: number; color: string; position: { x: number; y: number; }; createdAt: number; }>;
    setSparkles(newSparkles);
  };

  useEffect(() => {
    // Delay the initial sparkles to ensure the container is properly sized
    const timer = setTimeout(() => {
      createSparkles();
      
      if (background) {
        timeoutRef.current = setInterval(() => {
          createSparkles();
        }, 2000 / speed);
      }
    }, 100);
    
    return () => {
      clearTimeout(timer);
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, []);

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