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
}: GlowingEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
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
        setOpacity(0);
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setOpacity(0);
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
      {/* Border glow effect */}
      <div
        className="absolute inset-0 z-[-1] rounded-[inherit] transition-all duration-300"
        style={{
          opacity: disabled ? 0 : isHovered ? 1 : 0.5,
          boxShadow: `inset 0 0 0 ${actualBorderWidth}px ${typeof color === 'string' ? color : 'rgba(99, 102, 241, 0.8)'}`,
          filter: `blur(${isHovered ? blur : blur / 2}px)`,
        }}
      />
      
      {/* Solid border underneath */}
      <div
        className="absolute inset-0 z-[-2] rounded-[inherit] transition-all duration-300"
        style={{
          boxShadow: `inset 0 0 0 ${borderWidth}px ${typeof color === 'string' ? color : 'rgba(99, 102, 241, 0.8)'}`,
        }}
      />
    </div>
  );
} 