import React from "react"
import { Facebook, Instagram } from "lucide-react"
import { cn } from "../lib/utils"

interface FooterProps {
  theme?: "default" | "light"; // default = red, light = white
}

export default function Footer({ theme = "default" }: FooterProps) {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const isLight = theme === "light";
  
  const bgClass = isLight ? "bg-white border-t border-gray-200" : "bg-[#800000] border-t border-white/10";
  const textClass = isLight ? "text-gray-600" : "text-white";
  const headingClass = isLight ? "text-gray-900" : "text-white";
  const subTextClass = isLight ? "text-gray-500" : "text-white/80";
  const linkHoverClass = isLight ? "hover:text-[#800000]" : "hover:text-white";
  const iconBgClass = isLight ? "bg-gray-100 hover:bg-gray-200 text-[#800000]" : "bg-white/20 hover:bg-white/40 text-white";

  return (
    <footer className={cn("py-12 md:py-16 px-4 md:px-8", bgClass, textClass)}>
      <div className="max-w-7xl mx-auto">
        <div className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 pb-8 border-b", isLight ? "border-gray-200" : "border-white/20")}>
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <h3 className={cn("text-2xl font-bold mb-4", headingClass)}>JOMHA</h3>
            <p className={cn("text-sm md:text-base font-medium", subTextClass)}>
              Experience authentic tribal cuisine and cultural heritage in every dish we serve.
            </p>
          </div>

          <div>
            <h4 className={cn("font-bold mb-4 text-lg", headingClass)}>Quick Links</h4>
            <ul className={cn("space-y-2 text-sm font-medium", subTextClass)}>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleSmoothScroll(e, "#about")}
                  className={cn("transition-colors", linkHoverClass)}
                >
                  About Us
                </a>
              </li>
              <li>
                <a href="/menu" className={cn("transition-colors", linkHoverClass)}>
                  Menu
                </a>
              </li>
              <li>
                <a href="/gallery" className={cn("transition-colors", linkHoverClass)}>
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, "#contact")}
                  className={cn("transition-colors", linkHoverClass)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={cn("font-bold mb-4 text-lg", headingClass)}>Contact Info</h4>
            <ul className={cn("space-y-2 text-sm font-medium", subTextClass)}>
              <li>Udit Nagar, Rourkela</li>
              <li>Odisha 769012</li>
              <li>Phone: +91 82603 72068</li>
              <li>Email: jomhatribalcuisine@gmail.com</li>
            </ul>
          </div>

          <div>
            <h4 className={cn("font-bold mb-4 text-lg", headingClass)}>Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61575742274043"
                target="_blank"
                rel="noopener noreferrer"
                className={cn("w-10 h-10 rounded flex items-center justify-center transition-all duration-300 hover:scale-110", iconBgClass)}
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/jomha.restro"
                target="_blank"
                rel="noopener noreferrer"
                className={cn("w-10 h-10 rounded flex items-center justify-center transition-all duration-300 hover:scale-110", iconBgClass)}
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className={cn("mt-4 font-medium text-sm", isLight ? "text-gray-400" : "text-white/60")}>All Day 11AM - 10PM</p>
          </div>
        </div>

        <div className={cn("text-center text-xs md:text-sm", isLight ? "text-gray-400" : "text-white/70")}>
          © 2025 JOMHA Restaurant. All rights reserved. | Developed With ❤️ By{" "}
          <a
            href="https://kindo-brutal-flow.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn("transition-colors font-semibold", linkHoverClass)}
          >
            Edward Kindo
          </a>{" "}
          &{" "}
          <a
            href="https://www.instagram.com/atty_a30/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn("transition-colors font-semibold", linkHoverClass)}
          >
            Atish Niketan
          </a>
        </div>
      </div>
    </footer>
  )
}