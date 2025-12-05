import React from 'react';
import { ScrollReveal } from './ScrollReveal';

// PLACEHOLDER IMAGES: Add your images to public/images/ and update these paths
const menuItems = [
  {
    title: "Bamboo Biryani",
    image: "/images/menu/bamboo.jpg",
    description: "Aromatic rice and marinated meat slow-cooked inside fresh bamboo shoots over an open flame, infusing a unique woody and smoky flavor that defines tribal delicacy."
  },
  {
    title: "Patra Poda",
    image: "/images/menu/poda1.jpg",
    description: "Marinated fish or meat wrapped in sal leaves and roasted to perfection. The leaves impart a distinct herbal aroma, keeping the meat succulent and flavorful."
  },
  {
    title: "Handi Mansa",
    image: "/images/menu/jandi.jpeg",
    description: "Rich and tender mutton curry slow-cooked in a traditional clay pot (handi) with whole spices. The clay pot cooking technique enhances the earthy taste of the dish."
  },
  {
    title: "Mudhi Mansa",
    image: "/images/menu/mudhi-mansa.jpeg",
    description: "A classic Baripada specialty featuring spicy, gravy-rich mutton curry served alongside crisp puffed rice (mudhi). A beloved breakfast or snack combination."
  },
  {
    title: "Desi Chicken",
    image: "/images/menu/desi.jpg",
    description: "Country chicken cooked in a rustic village style with hand-ground spices and local herbs. This dish offers a robust texture and an authentic, fiery taste."
  },
  {
    title: "Millet Special",
    image: "/images/menu/ladu.jpeg",
    description: "Wholesome and nutritious dishes made from ragi and other millets, celebrating the staple grains of the tribal heartland. A healthy and delicious choice."
  }
];

interface SpecialMenuSectionProps {
  onViewMenu?: () => void;
}

export default function SpecialMenuSection({ onViewMenu }: SpecialMenuSectionProps) {
  return (
    <section className="py-12 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="h-px w-8 bg-[#800000]"></span>
              <span className="text-[#800000] uppercase tracking-widest text-xs md:text-sm font-bold">Culinary Highlights</span>
              <span className="h-px w-8 bg-[#800000]"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">JOMHA Special Menu</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Discover our signature dishes, meticulously crafted to bring you the true essence of tribal heritage and flavor.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {menuItems.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="group bg-neutral-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col h-full">
                {/* Image Container */}
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-xl md:text-2xl font-bold drop-shadow-md translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">{item.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base flex-grow">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View Full Menu Button */}
        <ScrollReveal delay={0.3}>
          <div className="flex justify-center">
              <button 
                  onClick={onViewMenu}
                  className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-[#800000] transition duration-300 ease-out border-2 border-[#800000] rounded-none shadow-md group hover:text-white"
              >
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#800000] group-hover:translate-x-0 ease">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-[#800000] transition-all duration-300 transform group-hover:translate-x-full ease">View Full Menu</span>
                  <span className="relative invisible">View Full Menu</span>
              </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}