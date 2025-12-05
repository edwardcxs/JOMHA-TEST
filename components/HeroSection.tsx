import React from "react"
import { WordRotate } from "./WordRotate"
import { SparklesText } from "./SparklesText"
import { Highlighter } from "./Highlighter"
import { Facebook, Instagram } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-[100dvh] overflow-hidden bg-[#800000] pt-24 md:pt-16">
      <div
        className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-accent/5 rounded-full blur-3xl opacity-40 animate-pulse"
        style={{ animationDuration: "6s" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl opacity-40 animate-pulse"
        style={{ animationDuration: "8s" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] md:min-h-[100dvh] px-4 sm:px-6 lg:px-8">
        {/* Top tagline */}
        <div className="mb-6 md:mb-8 animate-fade-in-scale mt-4 md:mt-0">
          <span
            className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs md:text-sm font-medium transition-all duration-300 hover:bg-white/20 hover:border-white/40"
            style={{ fontFamily: "inherit" }}
          >
            Welcome to Culinary Excellence
          </span>
        </div>

        {/* Main heading with word rotation and sparkles */}
        <div className="mb-8 text-center animate-slide-up w-full max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-4 mb-6">
            <h1
              className="text-5xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-tighter leading-tight text-white"
              style={{ fontFamily: "inherit" }}
            >
              <SparklesText>
                <WordRotate className="text-white" words={["JOMHA", "जोमहा", "𑢮𑢩𑢶𑢡𑢤𑢡"]} duration={1000} />
              </SparklesText>
            </h1>
            <div className="w-16 md:w-24 bg-gradient-to-r from-white/0 via-white to-white/0 rounded-full animate-glow h-px leading-8 font-bold text-lg border-0" />
          </div>

          <p
            className="text-base sm:text-lg md:text-xl text-white/90 max-w-xs sm:max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in px-2"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            Authentic{" "}
            <Highlighter className="text-white" color="#FFD700">
              Tribal Cuisine
            </Highlighter>{" "}
            Restaurant | Experience the rich heritage and authentic flavors of traditional tribal cooking
          </p>
        </div>

        <div
          className="mt-8 md:mt-12 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
        >
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61575742274043"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/40 rounded-none flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5 md:h-6 md:w-6 text-white" />
            </a>
            <a
              href="https://www.instagram.com/jomha.restro"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/40 rounded-none flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 md:h-6 md:w-6 text-white" />
            </a>
            <a
              href="https://wa.me/918260372068"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/40 rounded-none flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="WhatsApp"
            >
              <svg
                className="h-5 w-5 md:h-6 md:w-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in"
          style={{ animationDelay: "1s", animationFillMode: "forwards" }}
        >
          <div className="flex flex-col items-center gap-2 animate-bounce" style={{ animationDuration: "2s" }}>
            <span className="text-xs md:text-sm text-white/80">Scroll to explore</span>
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}