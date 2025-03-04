"use client";

import React, { useEffect, useRef, useState } from "react";

interface GlowingEffectProps {
  blur?: number;
  borderWidth?: number;
  spread?: number;
  glow?: boolean;
  disabled?: boolean;
  proximity?: number;
  inactiveZone?: number;
  color?: string;
  animated?: boolean;
}

export function GlowingEffect({
  blur = 24,
  borderWidth = 8,
  spread = 100,
  glow = true,
  disabled = false,
  proximity = 100,
  inactiveZone = 0.01,
  color = "linear-gradient(90deg, rgb(99, 102, 241), rgb(168, 85, 247), rgb(236, 73, 153), rgb(244, 63, 94), rgb(99, 102, 241))",
  animated = true,
}: GlowingEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (disabled) return;

    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!glow) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate distance from center as a percentage of the element's dimensions
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const distanceX = Math.abs(x - centerX) / centerX;
      const distanceY = Math.abs(y - centerY) / centerY;
      
      // If mouse is within the active zone
      if (distanceX <= 1 - inactiveZone && distanceY <= 1 - inactiveZone) {
        setPosition({ x, y });
        setOpacity(1);
        setIsHovered(true);
      } else {
        setOpacity(1);
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setOpacity(1);
      setIsHovered(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (container) {
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [disabled, glow, inactiveZone]);

  // Calculate the actual border width (doubled when hovered)
  const actualBorderWidth = isHovered ? borderWidth * 2 : borderWidth;

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-visible"
      style={{
        borderRadius: 'inherit',
      }}
    >
      {/* Massive outer glow */}
      <div
        className={`absolute -inset-16 transition-all duration-300 ${animated ? 'animate-border-massive-glow' : ''}`}
        style={{
          opacity: disabled ? 0 : 1,
          boxShadow: `0 0 ${spread * 4}px ${spread * 2}px ${typeof color === 'string' ? color : 'rgba(99, 102, 241, 0.8)'}`,
          borderRadius: 'inherit',
        }}
      />

      {/* Outer glow for extra visibility */}
      <div
        className={`absolute -inset-8 transition-all duration-300 ${animated ? 'animate-border-outer-glow' : ''}`}
        style={{
          opacity: disabled ? 0 : 1,
          boxShadow: `0 0 ${blur * 4}px ${blur * 3}px ${typeof color === 'string' ? color : 'rgba(99, 102, 241, 0.8)'}`,
          borderRadius: 'inherit',
        }}
      />
      
      {/* Animated border glow effect */}
      <div
        className={`absolute inset-0 transition-all duration-300 ${animated ? 'animate-border-glow' : ''}`}
        style={{
          opacity: disabled ? 0 : 1,
          boxShadow: `inset 0 0 ${blur * 2}px ${actualBorderWidth}px ${typeof color === 'string' ? color : 'rgba(99, 102, 241, 0.8)'}`,
          filter: `blur(${isHovered ? blur * 2 : blur}px) brightness(2)`,
          borderRadius: 'inherit',
        }}
      />
      
      {/* Solid border underneath */}
      <div
        className={`absolute inset-0 transition-all duration-300 ${animated ? 'animate-border-pulse' : ''}`}
        style={{
          boxShadow: `inset 0 0 0 ${borderWidth}px ${typeof color === 'string' ? color : 'rgba(99, 102, 241, 0.8)'}`,
          borderRadius: 'inherit',
        }}
      />

      {/* Add keyframes for the animations */}
      <style jsx global>{`
        @keyframes border-glow {
          0% {
            filter: blur(${blur * 2}px) brightness(2);
          }
          50% {
            filter: blur(${blur * 3}px) brightness(2.5);
          }
          100% {
            filter: blur(${blur * 2}px) brightness(2);
          }
        }
        
        @keyframes border-pulse {
          0% {
            opacity: 0.95;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.95;
          }
        }
        
        @keyframes border-outer-glow {
          0% {
            opacity: 0.95;
            box-shadow: 0 0 ${blur * 4}px ${blur * 3}px ${typeof color === 'string' ? color : 'rgba(99, 102, 241, 0.8)'};
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 ${blur * 5}px ${blur * 4}px ${typeof color === 'string' ? color : 'rgba(99, 102, 241, 0.8)'};
          }
          100% {
            opacity: 0.95;
            box-shadow: 0 0 ${blur * 4}px ${blur * 3}px ${typeof color === 'string' ? color : 'rgba(99, 102, 241, 0.8)'};
          }
        }

        @keyframes border-massive-glow {
          0% {
            opacity: 0.9;
            box-shadow: 0 0 ${spread * 4}px ${spread * 2}px ${typeof color === 'string' ? color : 'rgba(99, 102, 241, 0.8)'};
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 ${spread * 6}px ${spread * 3}px ${typeof color === 'string' ? color : 'rgba(99, 102, 241, 0.8)'};
          }
          100% {
            opacity: 0.9;
            box-shadow: 0 0 ${spread * 4}px ${spread * 2}px ${typeof color === 'string' ? color : 'rgba(99, 102, 241, 0.8)'};
          }
        }
      `}</style>
    </div>
  );
} 