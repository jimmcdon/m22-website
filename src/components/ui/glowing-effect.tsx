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
  blur = 10,
  borderWidth = 2,
  spread = 50,
  glow = true,
  disabled = false,
  proximity = 50,
  inactiveZone = 0.01,
  color = "linear-gradient(90deg, #6366f1, #a855f7, #ec4899, #6366f1)",
  animated = true,
}: GlowingEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0.8); // Start with visible opacity
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
        // Mouse is outside the active zone
        setOpacity(0.8); // Keep high opacity even when not hovered
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setOpacity(0.8); // Keep high opacity even when not hovered
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
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]"
    >
      {/* Outer glow for extra visibility */}
      <div
        className={`absolute inset-0 z-[-3] rounded-[inherit] transition-all duration-300 ${animated ? 'animate-border-outer-glow' : ''}`}
        style={{
          opacity: disabled ? 0 : 0.9,
          boxShadow: `0 0 ${blur * 2}px ${blur}px ${typeof color === 'string' ? color : 'rgba(99, 102, 241, 0.8)'}`,
        }}
      />
      
      {/* Animated border glow effect */}
      <div
        className={`absolute inset-0 z-[-1] rounded-[inherit] transition-all duration-300 ${animated ? 'animate-border-glow' : ''}`}
        style={{
          opacity: disabled ? 0 : isHovered ? 1 : 0.9,
          boxShadow: `inset 0 0 0 ${actualBorderWidth}px ${typeof color === 'string' ? color : 'rgba(99, 102, 241, 0.8)'}`,
          filter: `blur(${isHovered ? blur : blur / 1.5}px)`,
        }}
      />
      
      {/* Solid border underneath */}
      <div
        className={`absolute inset-0 z-[-2] rounded-[inherit] transition-all duration-300 ${animated ? 'animate-border-pulse' : ''}`}
        style={{
          boxShadow: `inset 0 0 0 ${borderWidth}px ${typeof color === 'string' ? color : 'rgba(99, 102, 241, 0.8)'}`,
        }}
      />

      {/* Add keyframes for the animations */}
      <style jsx global>{`
        @keyframes border-glow {
          0% {
            filter: blur(${blur}px) brightness(1);
          }
          50% {
            filter: blur(${blur * 1.5}px) brightness(1.2);
          }
          100% {
            filter: blur(${blur}px) brightness(1);
          }
        }
        
        @keyframes border-pulse {
          0% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.8;
          }
        }
        
        @keyframes border-outer-glow {
          0% {
            opacity: 0.7;
            box-shadow: 0 0 ${blur * 2}px ${blur}px ${typeof color === 'string' ? color : 'rgba(99, 102, 241, 0.8)'};
          }
          50% {
            opacity: 0.9;
            box-shadow: 0 0 ${blur * 2.5}px ${blur * 1.5}px ${typeof color === 'string' ? color : 'rgba(99, 102, 241, 0.8)'};
          }
          100% {
            opacity: 0.7;
            box-shadow: 0 0 ${blur * 2}px ${blur}px ${typeof color === 'string' ? color : 'rgba(99, 102, 241, 0.8)'};
          }
        }
        
        .animate-border-glow {
          animation: border-glow 3s infinite;
        }
        
        .animate-border-pulse {
          animation: border-pulse 3s infinite;
        }
        
        .animate-border-outer-glow {
          animation: border-outer-glow 4s infinite;
        }
      `}</style>
    </div>
  );
} 