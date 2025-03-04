"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion, useScroll, useTransform } from "framer-motion"
import { Sparkles } from "@/components/ui/sparkles"

interface NavMenuProps {
  className?: string
}

export function NavMenu({ className }: NavMenuProps) {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = React.useState(false)
  
  // Transform values for animation
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.85)", "rgba(255, 255, 255, 0.95)"]
  )
  
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ["0 4px 6px rgba(0, 0, 0, 0)", "0 4px 10px rgba(0, 0, 0, 0.1)"]
  )

  // Glow effect transform - increased opacity
  const glowOpacity = useTransform(
    scrollY,
    [0, 100],
    [0.9, 0.6]
  )
  
  // Check if scrolled for class changes
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Approach", href: "#approach" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ]
  
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1200px]" style={{ width: isScrolled ? "90%" : "80%" }}>
      {/* Glow effect behind navbar - enhanced with stronger colors and larger blur */}
      <motion.div 
        className="absolute inset-0 rounded-full blur-lg"
        style={{ 
          background: "linear-gradient(90deg, rgba(99, 102, 241, 0.5), rgba(168, 85, 247, 0.5), rgba(236, 72, 153, 0.5))",
          opacity: glowOpacity,
          transform: "scale(1.05)",
        }}
      />
      
      {/* Additional inner glow for more intensity */}
      <motion.div 
        className="absolute inset-0 rounded-full blur-md"
        style={{ 
          background: "linear-gradient(45deg, rgba(99, 102, 241, 0.4), rgba(168, 85, 247, 0.4), rgba(236, 72, 153, 0.4))",
          opacity: glowOpacity,
          transform: "scale(1.02)",
        }}
      />
      
      <Sparkles 
        background={true}
        backgroundColors={["#6366f1", "#a855f7", "#ec4899", "#8b5cf6", "#d946ef"]}
        minSize={3}
        maxSize={6}
        quantity={20}
        speed={0.4}
        className="absolute inset-0 rounded-full overflow-hidden"
      >
        <div className="w-full h-full" />
      </Sparkles>
      
      <motion.nav
        className={cn(
          "relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 border border-transparent",
          isScrolled ? "backdrop-blur-md" : "backdrop-blur-sm",
          className
        )}
        style={{
          backgroundColor,
          boxShadow,
        }}
      >
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-slate-900 w-8 h-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16" className="text-slate-900">
                <path d="M9.167 4.5a1.167 1.167 0 1 1-2.334 0 1.167 1.167 0 0 1 2.334 0"/>
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1 8a7 7 0 0 1 7-7 3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 0 0 7 7 7 0 0 1-7-7m7 4.667a1.167 1.167 0 1 1 0-2.334 1.167 1.167 0 0 1 0 2.334"/>
              </svg>
            </div>
            <span className="font-display text-xl font-medium text-slate-900">M22</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-full transition-colors hover:bg-white/50"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="md:hidden">
          <button className="p-2 text-slate-700 hover:text-slate-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.nav>
    </div>
  )
} 