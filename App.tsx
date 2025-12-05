import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SpecialMenuSection from './components/SpecialMenuSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';
import FullGallery from './components/FullGallery';
import FullMenu from './components/FullMenu';
import GuestsSection from './components/GuestsSection';
import AchievementsSection from './components/AchievementsSection';
import ContributionsSection from './components/ContributionsSection';
import CelebrateSection from './components/CelebrateSection';
import TestimonialsSection from './components/TestimonialsSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'gallery' | 'menu'>('home');

  const navigateToGallery = () => {
    window.scrollTo(0, 0);
    setCurrentPage('gallery');
  };

  const navigateToMenu = () => {
    window.scrollTo(0, 0);
    setCurrentPage('menu');
  };

  const navigateToHome = (page: string = 'home') => {
    if (page === 'gallery') {
      navigateToGallery();
    } else if (page === 'menu') {
      navigateToMenu();
    } else {
      window.scrollTo(0, 0);
      setCurrentPage('home');
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#800000]">
      <Navbar 
        theme="default" 
        onNavigate={navigateToHome}
      />
      
      {currentPage === 'home' && (
        <>
          <HeroSection />
          <AboutSection />
          <GallerySection onViewMore={navigateToGallery} />
          <GuestsSection />
          <AchievementsSection />
          <ContributionsSection />
          <CelebrateSection />
          <SpecialMenuSection onViewMenu={navigateToMenu} />
          <TestimonialsSection />
          <TeamSection />
          <ContactSection />
        </>
      )}

      {currentPage === 'gallery' && (
        <FullGallery onBack={() => navigateToHome('home')} />
      )}

      {currentPage === 'menu' && (
        <FullMenu onBack={() => navigateToHome('home')} />
      )}

      <Footer theme="default" />
    </div>
  );
}