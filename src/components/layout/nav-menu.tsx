"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion, useScroll, useTransform } from "framer-motion"

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
    ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.95)"]
  )
  
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ["0 4px 6px rgba(0, 0, 0, 0)", "0 4px 10px rgba(0, 0, 0, 0.1)"]
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
    <motion.nav
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300",
        isScrolled ? "backdrop-blur-md" : "backdrop-blur-sm",
        className
      )}
      style={{
        backgroundColor,
        boxShadow,
        width: isScrolled ? "90%" : "80%",
        maxWidth: "1200px"
      }}
    >
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-slate-900 w-8 h-8">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-900">
              <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="none" stroke="currentColor" stroke-width="1.5"/>
              <path d="M20 0C20 0 30 8.9543 30 20C30 31.0457 20 40 20 40C20 40 10 31.0457 10 20C10 8.9543 20 0 20 0Z" fill="currentColor"/>
              <circle cx="20" cy="10" r="3" fill="white"/>
              <circle cx="20" cy="30" r="3" fill="currentColor" stroke="white" stroke-width="1.5"/>
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
            className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-full transition-colors"
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
  )
} 