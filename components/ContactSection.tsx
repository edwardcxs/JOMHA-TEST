import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="h-px w-8 bg-[#800000]"></span>
              <span className="text-[#800000] uppercase tracking-widest text-xs md:text-sm font-bold">Get In Touch</span>
              <span className="h-px w-8 bg-[#800000]"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              We'd love to hear from you. Visit us, call us, or drop an email to experience the taste of tradition.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info Column */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                {/* Location */}
                <ScrollReveal delay={0.1}>
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-neutral-50 border border-gray-100 hover:shadow-md hover:border-[#800000]/20 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-full bg-[#800000]/10 flex items-center justify-center text-[#800000] group-hover:bg-[#800000] group-hover:text-white transition-colors duration-300 shrink-0">
                          <i className="fa-solid fa-location-dot text-xl"></i>
                      </div>
                      <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">Location</h3>
                          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            1st Floor,Upper Blackberry Showroom Near Uditnagar Petrol Pump,Kachery Road,Uditnagar,Rourkela
                          </p>
                      </div>
                  </div>
                </ScrollReveal>

                {/* Phone */}
                <ScrollReveal delay={0.2}>
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-neutral-50 border border-gray-100 hover:shadow-md hover:border-[#800000]/20 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-full bg-[#800000]/10 flex items-center justify-center text-[#800000] group-hover:bg-[#800000] group-hover:text-white transition-colors duration-300 shrink-0">
                          <i className="fa-solid fa-phone text-xl"></i>
                      </div>
                      <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
                          <p className="text-gray-600 text-sm md:text-base">
                              <a href="tel:+918260372068" className="hover:text-[#800000] transition-colors">
                                  +91 82603 72068
                              </a>
                          </p>
                      </div>
                  </div>
                </ScrollReveal>

                {/* Mail */}
                <ScrollReveal delay={0.3}>
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-neutral-50 border border-gray-100 hover:shadow-md hover:border-[#800000]/20 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-full bg-[#800000]/10 flex items-center justify-center text-[#800000] group-hover:bg-[#800000] group-hover:text-white transition-colors duration-300 shrink-0">
                          <i className="fa-solid fa-envelope text-xl"></i>
                      </div>
                      <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                          <p className="text-gray-600 text-sm md:text-base break-all">
                              <a href="mailto:jomhatribalcuisine@gmail.com" className="hover:text-[#800000] transition-colors">
                                  jomhatribalcuisine@gmail.com
                              </a>
                          </p>
                      </div>
                  </div>
                </ScrollReveal>

                {/* Hours */}
                <ScrollReveal delay={0.4}>
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-neutral-50 border border-gray-100 hover:shadow-md hover:border-[#800000]/20 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-full bg-[#800000]/10 flex items-center justify-center text-[#800000] group-hover:bg-[#800000] group-hover:text-white transition-colors duration-300 shrink-0">
                          <i className="fa-solid fa-clock text-xl"></i>
                      </div>
                      <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">Hours</h3>
                          <p className="text-gray-600 text-sm md:text-base">
                              Mon - Sun: 11:00 AM - 10:00 PM
                          </p>
                      </div>
                  </div>
                </ScrollReveal>
            </div>

            {/* Map Column */}
            <ScrollReveal delay={0.2} className="h-full">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-full min-h-[300px] md:min-h-[450px] relative bg-gray-100">
                  <div style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0}}>
                      <iframe 
                          className="w-full h-full border-0"
                          src="https://maps.google.com/maps?width=600&height=450&hl=en&q=jomha&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                          title="JOMHA Location Map"
                          loading="lazy"
                          allowFullScreen
                      ></iframe>
                  </div>
                  {/* Hidden attribution link from the provided snippet kept for compliance if needed, but styled invisibly/minimally */}
                  <a href="https://sprunkiretake.net" className="absolute bottom-0 left-0 text-[1px] opacity-0 pointer-events-none -z-10">sprunki retake</a>
              </div>
            </ScrollReveal>
        </div>
      </div>
    </section>
  );
}