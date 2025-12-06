import React from 'react';
import { ScrollReveal } from './ScrollReveal';

// PLACEHOLDER IMAGES: Add your images to public/images/ and update these paths
const honoredGuests = [
  {
    name: "Shri Jual Oram",
    designation: "Minister of Tribal Affairs, Govt. Of India",
    image: "/images/guest/jual.jpg",
    text: "I spent some time at Jomha and tried their food, and it honestly made me so happy to see people in today’s modern era still carrying our culture with pride. The way they promote authentic tribal food-so healthy and rooted-is truly admirable, and I genuinely appreciate it."
  },
  {
    name: "Shri Dashrath Gagrai",
    designation: "MLA of Saraikela, Kharsawa, Jharkhand ",
    image: "/images/guest/das.jpg",
    text: "I visited Jomha Restaurant, and the food and atmosphere instantly reminded me of my village. The flavours truly matched the authentic taste of our tribal dishes, something you rarely find in restaurants. Seeing this made me genuinely happy, and my happiness is completely justified."
  }
];

const bestWishes = [
  {
    name: "Padma Shri Bulu Imam",
    designation: "Indian Environmentalist",
    image: "/images/guest/Bulu_Imam.jpg",
    text: "Wishing the entire team at JOMHA monumental success. You are setting a new benchmark for regional cuisine representation."
  },
  {
    name: "Dr.Paul Streamer",
    designation: "Historian, Rural Economist",
    image: "/images/guest/dr.paul.webp",
    text: "May your kitchen always be filled with the aroma of joy and your tables with happy guests. Best wishes for this incredible journey."
  },
  {
    name: "Padma Shri Janum Singh Soy",
    designation: "Tribal Ho Language Scholar",
    image: "/images/guest/janum.jpeg",
    text: "Heartiest congratulations to JOMHA for bringing our traditions to the forefront. May you continue to grow and inspire."
  }
];

export default function GuestsSection() {
  return (
    <section className="py-12 md:py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#800000]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="h-px w-8 bg-[#800000]"></span>
              <span className="text-[#800000] uppercase tracking-widest text-xs md:text-sm font-bold">People</span>
              <span className="h-px w-8 bg-[#800000]"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Special Honored Guests</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are privileged to have hosted distinguished personalities who share our passion for preserving and celebrating tribal culture.
            </p>
          </div>
        </ScrollReveal>

        {/* Honored Guests Grid - Updated for 2 items centered */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
          {honoredGuests.map((guest, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-neutral-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-neutral-100 flex flex-col items-center text-center group h-full">
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-[#800000]/10 group-hover:border-[#800000] transition-colors">
                  <img 
                    src={guest.image} 
                    alt={guest.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{guest.name}</h3>
                <p className="text-[#800000] text-xs uppercase font-semibold tracking-wide mb-4">{guest.designation}</p>
                <p className="text-gray-600 text-sm italic leading-relaxed">"{guest.text}"</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Best Wishes Sub-Section */}
        <div className="relative">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 relative inline-block">
                Our Best Wishes
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#FFD700] rounded-full opacity-50"></div>
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
            {bestWishes.map((wisher, index) => (
              <ScrollReveal key={index} delay={0.2 + (index * 0.1)}>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100 flex flex-col sm:flex-row lg:flex-col gap-6 items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center transition-transform hover:-translate-y-1 duration-300 h-full">
                  <div className="w-20 h-20 shrink-0 rounded-full overflow-hidden border-2 border-[#FFD700] shadow-sm">
                    <img 
                      src={wisher.image} 
                      alt={wisher.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{wisher.name}</h4>
                    <p className="text-gray-500 text-sm font-medium mb-3">{wisher.designation}</p>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {wisher.text}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
