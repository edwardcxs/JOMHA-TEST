import React from 'react';
import { ScrollReveal } from './ScrollReveal';

// PLACEHOLDER IMAGES: Add your images to public/images/ and update these paths
const contributions = [
  {
    title: "We Support Local Vendors",
    image: "/images/contribution/local-vendor.webp",
    description: "We are committed to sourcing our ingredients directly from local tribal markets and farmers. By eliminating middlemen, we ensure fair prices for the growers and the freshest, most authentic produce for our kitchen. This partnership helps sustain the local economy and preserves traditional farming practices."
  },
  {
    title: "We Feed Street Animals",
    image: "/images/contribution/street-animal.jpg",
    description: "We believe in compassion for all beings. As part of our commitment to the community, we regularly feed street animals in our neighborhood. Every day, we provide nutritious food to stray dogs, cats, and other animals who need care. "
  }
];

export default function ContributionsSection() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="h-px w-8 bg-[#800000]"></span>
              <span className="text-[#800000] uppercase tracking-widest text-xs md:text-sm font-bold">Community Impact</span>
              <span className="h-px w-8 bg-[#800000]"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Contributions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Beyond serving great food, we believe in serving our community. Here is how we give back to the ecosystem that sustains us.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {contributions.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="flex flex-col bg-neutral-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group h-full">
                <div className="h-64 md:h-80 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                  
                  {/* Overlay Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-[#800000] font-bold text-xs uppercase tracking-wider shadow-sm">
                    {index === 0 ? "Sustainability" : "Compassion"}
                  </div>
                </div>
                
                <div className="p-6 md:p-8 flex flex-col grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#800000] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base grow">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}