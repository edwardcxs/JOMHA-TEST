import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface FullGalleryProps {
  onBack: () => void;
}

// PLACEHOLDER IMAGES: Add your images to public/images/ and update these paths
const allImages = [
  { src: "/images/gallery/IMG_0700.JPG", alt: "Culinary preparation" },
  { src: "/images/gallery/IMG_0366.webp", alt: "Salad dish" },
  { src: "/images/gallery/IMG_0707.JPG", alt: "Main course" },
  { src: "/images/gallery/IMG_0699.JPG", alt: "Restaurant ambiance" },
  { src: "/images/gallery/img-0458.webp", alt: "Plated food" },
  { src: "/images/gallery/IMG_0701.JPG", alt: "Drink and meal" },
  { src: "/images/gallery/IMG_9663.webp", alt: "Indian Curry" },
  { src: "/images/gallery/img-9103.webp", alt: "Spices" },
  { src: "/images/gallery/sdm.WEBP", alt: "Samosas" },
  { src: "/images/gallery/img-3542.webp", alt: "Buffet spread" },
  { src: "/images/gallery/img-0464.webp", alt: "Rice dish" },
  { src: "/images/gallery/IMG_0709.JPG", alt: "Traditional thali" },
];

export default function FullGallery({ onBack }: FullGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % allImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + allImages.length) % allImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-10 md:mb-12">
            <button 
                onClick={onBack}
                className="self-start mb-6 mt-9 flex items-center gap-2 text-[#800000] font-medium hover:underline transition-all"
            >
                <ChevronLeft size={20} /> Back to Home
            </button>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 text-center">Our Gallery</h1>
            <div className="w-16 md:w-24 h-1 bg-[#800000] rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl text-center text-sm md:text-base px-2">
                Explore the visual journey of JOMHA, from our kitchen to your table.
            </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {allImages.map((img, index) => (
            <div 
                key={index} 
                className="group relative aspect-square rounded-lg md:rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(index)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 text-white text-xs md:text-base font-medium bg-black/30 px-3 py-1 md:px-4 md:py-2 rounded-none backdrop-blur-sm transition-opacity duration-300 transform scale-90 group-hover:scale-100">
                      View
                  </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div 
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-2 md:p-4 animate-fade-in"
            onClick={closeLightbox}
        >
          <button 
            className="absolute top-2 right-2 md:top-4 md:right-4 text-white/70 hover:text-white p-2 transition-colors z-50 bg-black/20 rounded-none"
            onClick={closeLightbox}
          >
            <X size={24} className="md:w-8 md:h-8" />
          </button>
          
          <button 
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 transition-colors z-50 bg-black/20 rounded-none"
            onClick={prevImage}
          >
            <ChevronLeft size={32} className="md:w-12 md:h-12" />
          </button>
          
          <img 
            src={allImages[lightboxIndex].src} 
            alt={allImages[lightboxIndex].alt} 
            className="max-h-[80vh] md:max-h-[85vh] max-w-full object-contain rounded-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button 
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 transition-colors z-50 bg-black/20 rounded-none"
            onClick={nextImage}
          >
            <ChevronRight size={32} className="md:w-12 md:h-12" />
          </button>

          <div className="absolute bottom-6 left-0 right-0 text-center text-white/80 font-medium text-sm md:text-base">
            {lightboxIndex + 1} / {allImages.length}
          </div>
        </div>
      )}
    </div>
  );
}