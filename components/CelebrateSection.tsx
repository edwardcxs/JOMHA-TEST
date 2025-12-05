import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Cake, Users, Utensils } from 'lucide-react';

const events = [
  {
    title: "Birthday Party",
    Icon: Cake,
    description: "Make your special day truly unforgettable. Whether it's an intimate gathering or a grand celebration, our vibrant tribal ambiance and customized feast menus create the perfect backdrop for your birthday bash. Let us handle the details while you make memories."
  },
  {
    title: "Social Events",
    Icon: Users,
    description: "From anniversaries and reunions to social events, JOMHA provides a warm and welcoming space for all your social gatherings. Enjoy our signature hospitality and authentic cuisine that brings people together."
  },
  {
    title: "Catering Service",
    Icon: Utensils,
    description: "Bring the unique flavors of JOMHA to your doorstep. Our outdoor catering service ensures that your guests experience the same high-quality tribal cuisine at your venue. We offer bespoke catering solutions tailored to your event's specific needs."
  }
];

export default function CelebrateSection() {
  return (
    <section className="py-12 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="h-px w-8 bg-[#800000]"></span>
              <span className="text-[#800000] uppercase tracking-widest text-xs md:text-sm font-bold">Host With Us</span>
              <span className="h-px w-8 bg-[#800000]"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Celebrate Your Special Day With Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Create lasting memories with our dedicated event services. We bring the celebration to life with authentic flavors and unmatched hospitality.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center h-full">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-md border border-gray-100 group-hover:border-[#800000]/20 transition-colors">
                  <event.Icon 
                    strokeWidth={1.5} 
                    className="w-10 h-10 md:w-12 md:h-12 text-[#800000] group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#800000] transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {event.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}