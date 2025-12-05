import React, { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "../lib/utils"

interface NavbarProps {
  theme?: "default" | "light"; // default is red/transparent, light is white background
  onNavigate?: (page: string) => void;
}

export default function Navbar({ theme = "default", onNavigate }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "#hero", page: "home" },
    { name: "Menu", href: "/menu", page: "menu" },
    { name: "Gallery", href: "/gallery", page: "gallery" },
    { name: "Contact", href: "#contact", page: "contact" },
  ]

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    e.preventDefault();
    
    // Close mobile menu
    setIsMobileMenuOpen(false);

    if (link.page === "gallery" && onNavigate) {
      onNavigate("gallery");
      return;
    }

    if (link.page === "menu" && onNavigate) {
      onNavigate("menu");
      return;
    }

    if (link.page === "home" && onNavigate) {
      onNavigate("home");
      // If we are navigating home, also scroll to top or hero
      setTimeout(() => {
         const hero = document.getElementById("hero");
         if (hero) hero.scrollIntoView({ behavior: "smooth" });
         else window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
      return;
    }

    // Default scroll behavior for anchors on home page (like contact)
    if (onNavigate) {
        onNavigate("home");
        setTimeout(() => {
            if (link.href.startsWith("#")) {
                const element = document.querySelector(link.href)
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                }
            }
        }, 100);
    }
  }

  const isLightMode = theme === "light";
  
  // Static classes based on theme only - consistent shape and background
  const navBackground = isLightMode 
    ? "bg-white/95 backdrop-blur-md shadow-sm py-6 border-b border-gray-100" 
    : "bg-[#800000]/95 backdrop-blur-md shadow-lg py-6";

  const textColor = isLightMode ? "text-gray-900" : "text-white";
  const hoverColor = isLightMode ? "hover:text-[#800000]" : "hover:text-[#FFD700]";
  const logoColor = isLightMode ? "text-[#800000]" : "text-white";
  const mobileMenuBg = isLightMode ? "bg-white" : "bg-[#800000]";
  const mobileTextColor = isLightMode ? "text-gray-900" : "text-white/90";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        navBackground
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); onNavigate && onNavigate("home"); }}
          className={cn("text-sm font-bold tracking-wide uppercase", logoColor)} 
          style={{ fontFamily: 'inherit' }}
        >
          JOMHA
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className={cn(
                "transition-colors font-medium text-sm tracking-wide uppercase",
                textColor,
                hoverColor
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn("md:hidden p-2 rounded-none transition-colors", textColor, isLightMode ? "hover:bg-gray-100" : "hover:bg-white/10")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 border-t shadow-xl transition-all duration-300 origin-top",
          mobileMenuBg,
          isLightMode ? "border-gray-100" : "border-white/10",
          isMobileMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col p-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className={cn(
                "font-medium text-lg py-2 border-b last:border-0 transition-colors",
                mobileTextColor,
                hoverColor,
                isLightMode ? "border-gray-100" : "border-white/5"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}