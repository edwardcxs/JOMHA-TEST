import React from 'react';
import { ScrollReveal } from './ScrollReveal';

const testimonials = [
  {
    name: "Rahul Das",
    rating: 5,
    text: "Amazing food! The Bamboo Chicken is a must-try. The flavors are so authentic and unlike anything else in the city."
  },
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Authentic tribal flavors. Loved the ambiance. It feels like a small trip to nature while enjoying delicious meals."
  },
  {
    name: "Amit Kumar",
    rating: 4,
    text: "Great service and very hygienic. The staff explained the dishes well, which helped us choose the best options."
  },
  {
    name: "Sneha Mishra",
    rating: 5,
    text: "Best place in Rourkela for traditional food. The Handi Mutton was cooked to perfection and melted in the mouth."
  },
  {
    name: "Vikram Rathore",
    rating: 5,
    text: "The Patra Poda was exquisite. I've never tasted fish prepared this way before. Highly recommended!"
  },
  {
    name: "Anjali Patel",
    rating: 5,
    text: "Unique experience. A hidden gem for foodies who want to explore the real taste of Odisha's tribal heritage."
  },
  {
    name: "Rohit Behera",
    rating: 4,
    text: "Staff is very polite and welcoming. Good portion sizes and reasonable prices for such high quality."
  },
  {
    name: "Kavita Jena",
    rating: 5,
    text: "Loved the Millet specials. Very healthy and tasty options available for diet-conscious people."
  },
  {
    name: "Aryan Toppo",
    rating: 5,
    text: "Proud to see our tribal cuisine represented so beautifully. The Mandia soup was comforting and delicious."
  },
  {
    name: "Meera Lakra",
    rating: 4,
    text: "Great vibe for family dinners. The outdoor seating area is very pleasant in the evenings."
  }
];

export default function TestimonialsSection() {
  // Create a reversed copy for the second row to vary the content visually
  const reversedTestimonials = [...testimonials].reverse();

  return (
    <section className="py-12 md:py-24 bg-neutral-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="h-px w-8 bg-[#800000]"></span>
              <span className="text-[#800000] uppercase tracking-widest text-xs md:text-sm font-bold">Testimonials</span>
              <span className="h-px w-8 bg-[#800000]"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">What Our Customers Say</h2>
            
            {/* Google Rating Badge */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white px-6 py-3 rounded-2xl sm:rounded-full shadow-md border border-gray-100">
              {/* Official Google Logo SVG */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-gray-900 text-lg">4.7</span>
                  <div className="flex text-yellow-400 text-sm">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                  </div>
                </div>
                <span className="text-xs text-gray-500">Based on 150+ reviews</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee Container */}
      <ScrollReveal delay={0.2}>
        <div className="relative w-full overflow-hidden mb-12 flex flex-col gap-4 md:gap-8">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none"></div>

          {/* Row 1: Right to Left (Original) */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {/* Loop twice for infinite effect */}
            {[...testimonials, ...testimonials].map((item, index) => (
              <div key={`row1-${index}`} className="shrink-0">
                {/* Mobile View: Small Avatar Card */}
                <div className="md:hidden mx-2 w-40 bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center h-full">
                   <div className="w-12 h-12 rounded-full bg-[#800000]/10 flex items-center justify-center text-[#800000] font-bold text-lg mb-2 shadow-sm border border-[#800000]/20">
                      {item.name.charAt(0)}
                   </div>
                   <h4 className="font-bold text-gray-900 text-xs mb-1 truncate w-full">{item.name}</h4>
                   <div className="flex gap-0.5 text-yellow-400 text-[10px] mb-2">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={`fa-solid fa-star ${i < item.rating ? '' : 'text-gray-200'}`}></i>
                      ))}
                   </div>
                   <p className="text-gray-500 text-[10px] italic line-clamp-3 leading-relaxed">"{item.text}"</p>
                </div>

                {/* Desktop View: Full Testimonial Card */}
                <div className="hidden md:flex w-[400px] bg-white mx-4 p-8 rounded-2xl shadow-sm border border-[#800000] flex-col h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-1 text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={`fa-solid fa-star ${i < item.rating ? '' : 'text-gray-200'}`}></i>
                      ))}
                    </div>
                    <i className="fa-solid fa-quote-right text-[#800000]/10 text-4xl"></i>
                  </div>
                  <p className="text-gray-600 italic mb-6 leading-relaxed flex-grow">"{item.text}"</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-[#800000]/10 flex items-center justify-center text-[#800000] font-bold text-lg">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                      <p className="text-xs text-green-600 font-medium flex items-center gap-1">
                        <i className="fa-solid fa-circle-check"></i> Verified Customer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Left to Right (New) */}
          <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
            {/* Loop twice for infinite effect - using reversed array for variety */}
            {[...reversedTestimonials, ...reversedTestimonials].map((item, index) => (
              <div key={`row2-${index}`} className="shrink-0">
                {/* Mobile View: Small Avatar Card */}
                <div className="md:hidden mx-2 w-40 bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center h-full">
                   <div className="w-12 h-12 rounded-full bg-[#800000]/10 flex items-center justify-center text-[#800000] font-bold text-lg mb-2 shadow-sm border border-[#800000]/20">
                      {item.name.charAt(0)}
                   </div>
                   <h4 className="font-bold text-gray-900 text-xs mb-1 truncate w-full">{item.name}</h4>
                   <div className="flex gap-0.5 text-yellow-400 text-[10px] mb-2">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={`fa-solid fa-star ${i < item.rating ? '' : 'text-gray-200'}`}></i>
                      ))}
                   </div>
                   <p className="text-gray-500 text-[10px] italic line-clamp-3 leading-relaxed">"{item.text}"</p>
                </div>

                {/* Desktop View: Full Testimonial Card */}
                <div className="hidden md:flex w-[400px] bg-white mx-4 p-8 rounded-2xl shadow-sm border border-[#800000] flex-col h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-1 text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={`fa-solid fa-star ${i < item.rating ? '' : 'text-gray-200'}`}></i>
                      ))}
                    </div>
                    <i className="fa-solid fa-quote-right text-[#800000]/10 text-4xl"></i>
                  </div>
                  <p className="text-gray-600 italic mb-6 leading-relaxed flex-grow">"{item.text}"</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-[#800000]/10 flex items-center justify-center text-[#800000] font-bold text-lg">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                      <p className="text-xs text-green-600 font-medium flex items-center gap-1">
                        <i className="fa-solid fa-circle-check"></i> Verified Customer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Write a Review Button */}
      <ScrollReveal delay={0.3}>
        <div className="flex justify-center px-4">
          <a 
            href="https://search.google.com/local/writereview?placeid=ChIJplaceholder" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-3 bg-white text-gray-800 font-medium rounded-none shadow-md border border-gray-200 hover:border-[#800000] hover:text-[#800000] transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <i className="fa-solid fa-pen-nib"></i> Write a Review
            </span>
            <div className="absolute inset-0 bg-gray-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-0"></div>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}