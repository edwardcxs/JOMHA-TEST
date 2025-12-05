import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ArrowRight } from 'lucide-react';

// PLACEHOLDER IMAGES: Add your images to public/images/ and update these paths
const galleryImages = [
  "/images/gallery/IMG_0464.webp",
  "/images/gallery/IMG_0700.JPG",
  "/images/gallery/IMG_0717.JPG",
  "/images/gallery/IMG_9663.webp",
  "/images/gallery/IMG_0366.webp",
  "/images/gallery/img-9056.webp",
  "/images/gallery/IMG_0699.JPG",
  "/images/gallery/IMG_0701.JPG",
  "/images/gallery/img-3537.webp",
];

interface GallerySectionProps {
  onViewMore?: () => void;
}

export default function GallerySection({ onViewMore }: GallerySectionProps) {
  return (
    <section className="py-12 md:py-24 bg-neutral-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-10 md:mb-12 text-center">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-2 mb-2">
              <span className="text-[#800000] uppercase tracking-widest text-xs md:text-sm font-bold">Visual Journey</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Our Photo Gallery</h2>
          </div>
          <div className="w-16 md:w-24 h-1 bg-[#800000] mx-auto rounded-full mt-4 md:mt-6"></div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.2}>
        <div className="relative w-full overflow-hidden mb-10 md:mb-12">
          {/* Gradient overlays for smooth fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-40 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-40 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {/* Double the images for seamless loop */}
            {[...galleryImages, ...galleryImages].map((src, index) => (
              <div key={index} className="w-[260px] h-[260px] md:w-[400px] md:h-[400px] mx-2 md:mx-4 rounded-xl md:rounded-2xl overflow-hidden shadow-lg border border-gray-100 group relative shrink-0">
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <div className="flex justify-center relative z-20 px-4">
          <button 
            onClick={onViewMore}
            className="w-full sm:w-auto px-8 py-3 rounded-none text-base md:text-lg font-medium border-2 border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            View Full Gallery
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
}