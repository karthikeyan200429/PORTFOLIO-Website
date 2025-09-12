import React, { useState, useEffect, useRef } from 'react';
import { PortfolioContent } from './components/PortfolioContent';
import { ResumePanel, SkillsPanel, ProjectsPanel, ExperiencePanel, ContactPanel } from './components/SectionPanels';
import ParticleBackground from './components/ParticleBackground';
import { UpArrowIcon } from './components/Icons';

// A new wrapper component for consistent section styling
const PageSection: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => (
  <section id={id} className="w-full max-w-4xl mx-auto py-8 sm:py-12 px-6">
    <div className="bg-gray-800/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 sm:p-12 border border-white/10">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 border-b-2 border-brand-teal-700 pb-3">{title}</h2>
      {children}
    </div>
  </section>
);


const App: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (container.scrollTop > window.innerHeight / 2) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleScrollToTop = () => {
    scrollContainerRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  const sections = [
    { id: 'resume', title: 'Resume', component: <ResumePanel /> },
    { id: 'skills', title: 'Skills', component: <SkillsPanel /> },
    { id: 'projects', title: 'Projects', component: <ProjectsPanel /> },
    { id: 'experience', title: 'Experience', component: <ExperiencePanel /> },
    { id: 'contact', title: 'Contact', component: <ContactPanel /> },
  ];

  return (
    <div 
      ref={scrollContainerRef}
      className="relative bg-gray-900 h-screen w-full font-sans text-white overflow-y-auto overflow-x-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle at top left, rgba(31, 41, 55, 0.8), transparent 40%), radial-gradient(circle at bottom right, rgba(30, 75, 88, 0.6), transparent 50%)',
      }}
    >
      <ParticleBackground />
      
      <main className="relative z-10 flex flex-col items-center">
        {/* Top "hero" section */}
  <div id="home" className="min-h-[60vh] w-full flex flex-col items-center px-4 pb-4 pt-4 sm:pt-6">
          <PortfolioContent onButtonClick={handleScrollToSection} />
        </div>

        {/* Scrollable content sections */}
        <div className="w-full">
          {sections.map(section => (
            <PageSection key={section.id} id={section.id} title={section.title}>
              {section.component}
            </PageSection>
          ))}
        </div>
      </main>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-9 right-36 z-50 p-3 bg-brand-teal-700 text-white rounded-full shadow-lg hover:scale-110 hover:bg-brand-teal-600 transition-all duration-300 animate-fadeIn"
          aria-label="Back to top"
        >
          <div className="w-6 h-6">
            <UpArrowIcon />
          </div>
        </button>
      )}
    </div>
  );
};

export default App;