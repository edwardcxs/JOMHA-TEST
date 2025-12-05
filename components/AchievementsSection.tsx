import React from 'react';
import { ScrollReveal } from './ScrollReveal';

// PLACEHOLDER IMAGES: Add your images to public/images/ and update these paths
const achievements = [
  {
    title: "Culinary Event @IHM",
    image: "/images/Participation/cook.JPG",
    description: "We proudly took part in the Culinary Event at IHM Aurangabad, showcasing our authentic flavours and celebrating regional food culture with aspiring chefs and food lovers."
  },
  {
    title: "Running Notations",
    image: "/images/Participation/notion.webp",
    description: "We recently hosted a soulful acoustic evening at Jomha with the band Running Notations, bringing live music, warm vibes, and an unforgettable atmosphere for our guests."
  },
  {
    title: "Spreading Little Joy",
    image: "/images/Participation/smile.webp",
    description: "Our team visited a local orphanage to spend time with the children, share meals, and bring a little joy to their day. It was a heartfelt experience that reminded us of the importance of community and compassion."
  }
];

export default function AchievementsSection() {
  return (
    <section className="py-12 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="h-px w-8 bg-[#800000]"></span>
              <span className="text-[#800000] uppercase tracking-widest text-xs md:text-sm font-bold">Milestones</span>
              <span className="h-px w-8 bg-[#800000]"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Achievements & Participations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              From local festivals to national recognition, we are proud to share our journey of bringing tribal flavors to the world stage.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col h-full">
                <div className="h-56 overflow-hidden relative shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div className="p-6 md:p-8 flex flex-col grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#800000] transition-colors">{item.title}</h3>
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