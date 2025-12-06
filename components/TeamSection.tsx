import React from 'react';
import { cn } from "../lib/utils";
import { ScrollReveal } from './ScrollReveal';

// PLACEHOLDER IMAGES: Add your images to public/images/ and update these paths
const teamMembers = [
  // Row 1
  { name: "Lalita Samad", role: "Founder", image: "/images/team/lalita samad.jpeg" },
  { name: "Reeta Samad", role: "Co-Founder", image: "/images/team/reeta-samad.jpg" },
  { name: "Krishna Jha", role: "Chief Executive Officer", image: "/images/team/memoji.jpeg" },
  { name: "Dinabandhu Soren", role: "Tribal Art Designer", image: "/images/team/memoji.jpeg" },
  { name: "Dr.Patrick Chabu", role: "Marketing Advisor", image: "/images/team/pat.jpeg" },
  { name: "Edward Kindo", role: "Technical Expert", image: "/images/team/edward-kindo.jpeg" },
  { name: "Atish Niketan", role: "Asst. Technical Expert", image: "/images/team/atish niketan.jpeg" },
  { name: "Gautam Haldar", role: "Printing Partner", image: "/images/team/memoji.jpeg" },
  { name: "Hemant Gagrai", role: "Finance Advisor", image: "/images/team/hemant-gagrai.jpg" },
  { name: "Sikandar Samad", role: "Senior Server", image: "/images/team/memoji.jpeg" },
  
  // Row 2
  { name: "Sikandar Kumar", role: "Head Chef", image: "/images/team/sikandar kumar.jpeg" },
  { name: "Sinu Bhoi", role: "Asst. Chef", image: "/images/team/sinu bhoi.jpeg" },
  { name: "Nitima Naik", role: "Asst. Chef", image: "/images/team/nitima nayak.jpeg" },
  { name: "Mahadev Samad", role: "Service Incharge", image: "/images/team/memoji.jpeg" },
  { name: "Sitla Samad", role: "N/A", image: "/images/team/dp.jpeg" },
  { name: "Karan Pradhan", role: "Staff", image: "/images/team/karan pradhan.jpeg" },
  { name: "Sankar Mandal", role: "Interior Designer", image: "/images/team/memoji.jpeg" },
];

const row1 = teamMembers.slice(0, 8);
const row2 = teamMembers.slice(8, 16);

export default function TeamSection() {
  return (
    <section className="py-12 md:py-24 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 md:mb-12 text-center">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-2 mb-2">
              <span className="text-[#800000] uppercase tracking-widest text-xs md:text-sm font-bold">The People Behind The Magic</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Meet Our Team</h2>
          </div>
          <div className="w-16 md:w-24 h-1 bg-[#800000] mx-auto rounded-full mt-4 md:mt-6"></div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.2}>
        <div className="flex flex-col gap-6 md:gap-14 relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none"></div>

          {/* Row 1 - Left to Right (Reverse Marquee) */}
          <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
            {[...row1, ...row1, ...row1].map((member, index) => (
              <div key={`row1-${index}`} className="mx-2 md:mx-5 w-32 md:w-72 bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col shrink-0 group">
                <div className="relative md:w-full md:h-80 w-20 h-20 mx-auto mt-4 md:mt-0 rounded-full md:rounded-none overflow-hidden border-2 md:border-0 border-gray-100 shrink-0">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"></div>
                </div>
                <div className="p-2 md:p-5 text-center bg-white relative flex-grow flex flex-col justify-center md:justify-start">
                  <h3 className="font-bold text-gray-900 text-xs md:text-lg mb-1 truncate w-full">{member.name}</h3>
                  <p className="text-[#800000] text-[10px] md:text-sm font-semibold uppercase tracking-wider truncate w-full">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 - Right to Left (Standard Marquee) */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...row2, ...row2, ...row2].map((member, index) => (
              <div key={`row2-${index}`} className="mx-2 md:mx-5 w-32 md:w-72 bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col shrink-0 group">
                <div className="relative md:w-full md:h-80 w-20 h-20 mx-auto mt-4 md:mt-0 rounded-full md:rounded-none overflow-hidden border-2 md:border-0 border-gray-100 shrink-0">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"></div>
                </div>
                <div className="p-2 md:p-5 text-center bg-white relative flex-grow flex flex-col justify-center md:justify-start">
                  <h3 className="font-bold text-gray-900 text-xs md:text-lg mb-1 truncate w-full">{member.name}</h3>
                  <p className="text-[#800000] text-[10px] md:text-sm font-semibold uppercase tracking-wider truncate w-full">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
