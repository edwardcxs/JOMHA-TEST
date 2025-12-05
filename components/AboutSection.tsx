import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full py-12 md:py-24 bg-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] opacity-20 pointer-events-none z-0">
         <div className="absolute inset-0 border-[1.5px] border-dashed border-[#800000]/30 rounded-full animate-[spin_60s_linear_infinite]"></div>
         <div className="absolute inset-8 border border-dotted border-[#FFD700]/40 rounded-full animate-[spin_50s_linear_infinite_reverse]"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/4 w-[25rem] h-[25rem] bg-gradient-to-tr from-[#800000]/5 via-[#FFD700]/10 to-transparent rounded-full blur-3xl animate-pulse pointer-events-none z-0" style={{ animationDuration: '8s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Side - Image */}
          <ScrollReveal>
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-[3/4] bg-gray-100">
                {/* PLACEHOLDER IMAGE: Replace '/images/placeholder.svg' with your own image path e.g., '/images/about-us.jpg' */}
                <img
                  src="/images/JOMHA.jpeg"
                  alt="About JOMHA Restaurant"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay for text contrast/mood */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-16 h-16 md:w-24 md:h-24 bg-[#800000] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDuration: '4s' }}></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 md:w-32 md:h-32 bg-[#FFD700] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDuration: '6s' }}></div>
            </div>
          </ScrollReveal>

          {/* Right Side - Content */}
          <div className="flex flex-col gap-8 md:gap-10">
            <ScrollReveal delay={0.2}>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-px w-8 bg-[#800000]"></span>
                  <span className="text-[#800000] uppercase tracking-widest text-sm font-bold">Our Story</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                  About <span className="text-[#800000]">Us</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid gap-6">
              {/* Card 1: Our Story */}
              <ScrollReveal delay={0.3}>
                <div className="p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#800000]/20 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-[#800000]/5 text-[#800000] group-hover:bg-[#800000] group-hover:text-white transition-colors duration-300 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-[#800000] transition-colors">About JOMHA</h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      <b>JOMHA</b> is more than just a <b>tribal cuisine restaurant</b>-it’s Rourkela’s premium gateway into the soulful world of India’s indigenous heritage. Inspired by the <b>HO tribe’s word for “food,” JOMHA</b> brings together old treditional recipes, earthy aesthetics, and the warmth of a <b>true village-style ambience.</b>Every flavour is a story, every aroma a memory, and every dish a heartfelt tribute to traditions passed down through generations.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 2: Our Mission */}
              <ScrollReveal delay={0.4}>
                <div className="p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#FFD700]/50 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-[#FFD700]/10 text-[#d4af37] group-hover:bg-[#FFD700] group-hover:text-[#800000] transition-colors duration-300 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-[#d4af37] transition-colors">Our Mission</h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        The aim of <b>JOMHA</b> is to preserve and promote the essence of <b>India's tribal heritage</b> through authentic <b>cuisine, art, and ambience</b>. We strive to create a meaningful bridge between <b>tradition</b> and <b>modern dining</b>, offering guests a soulful experience rooted in culture and community. Every dish, every detail at <b>JOMHA</b> reflects our purpose — to <b>celebrate, empower, and honor</b> the beauty of tribal life.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}