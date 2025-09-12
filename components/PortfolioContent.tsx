import React, { useState, useEffect } from 'react';
import { IconButton } from './IconButton';
import { SocialLink } from './SocialLink';
import { 
    DocumentIcon, 
    CodeIcon, 
    ProjectIcon, 
    ExperienceIcon, 
    ContactIcon, 
    LinkedInIcon, 
    GitHubIcon,
    LeetCodeIcon,
    TwitterIcon
} from './Icons';

interface PortfolioContentProps {
  onButtonClick: (sectionId: string) => void;
}

const buttons = [
  { icon: <DocumentIcon />, label: 'Resume' },
  { icon: <CodeIcon />, label: 'Skills' },
  { icon: <ProjectIcon />, label: 'Projects' },
  { icon: <ExperienceIcon />, label: 'Experience' },
  { icon: <ContactIcon />, label: 'Contact' },
] as const;

const socialLinks = [
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/karthikeyan-p-239a05258/' },
  { icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com/karthikeyan200429' },
  { icon: <LeetCodeIcon />, label: 'LeetCode', href: 'https://leetcode.com/u/karthikeyankk20/' },
  { icon: <TwitterIcon />, label: 'Twitter', href: 'https://x.com/Karthikeyan508' },
];

export const PortfolioContent: React.FC<PortfolioContentProps> = ({ onButtonClick }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const baseTransition = 'transition-all duration-700 ease-out';
  const animationState = (isAnimated: boolean) => isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5';

  return (
    <div className="flex flex-col items-center w-full max-w-4xl p-4">

      {/* Main Content */}
      <div className={`flex flex-col items-center text-center`}>
        <div 
          className={`relative p-1.5 bg-gradient-to-tr from-cyan-400 to-brand-teal-600 rounded-full shadow-lg ${baseTransition} ${animationState(animated)}`}
          style={{ transitionDelay: '100ms' }}
        >
          <img
            src="/profile.jpg"
            alt="Karthikeyan Profile"
            className="w-40 h-40 sm:w-47 sm:h-47 rounded-full border-4 border-gray-800 object-cover"
          />
        </div>
        <h1 
          className={`mt-6 text-4xl sm:text-5xl font-bold text-white uppercase ${baseTransition} ${animationState(animated)}`}
          style={{ transitionDelay: '200ms' }}
        >
          Karthikeyan P
        </h1>
        <p 
          className={`mt-3 text-lg sm:text-xl text-gray-300 ${baseTransition} ${animationState(animated)}`}
          style={{ transitionDelay: '300ms' }}
        >
          💻 <span className="text-brand-teal-400 font-semibold">Java Developer</span> | 🌐 <span className="text-brand-teal-400 font-semibold">Web Development Enthusiast</span> | 📊 <span className="text-brand-teal-400 font-semibold">Problem Solver</span>
        </p>
        <p 
          className={`mt-6 max-w-2xl text-base sm:text-lg text-gray-400 leading-relaxed ${baseTransition} ${animationState(animated)}`}
          style={{ transitionDelay: '400ms' }}
        >
          A passionate engineering student with a strong foundation in computer science and an eye for creating impactful solutions. Exploring new technologies and building meaningful projects. Driven by curiosity and innovation, I aim to grow as a software developer and contribute to solving real-world challenges.
        </p>
      </div>

      {/* Icon Buttons */}
      <div 
        className={`flex-grow flex items-center justify-center my-4 sm:my-10 w-full ${baseTransition} ${animationState(animated)}`}
        style={{ transitionDelay: '500ms' }}
      >
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          {buttons.map((button) => (
            <IconButton 
              key={button.label} 
              icon={button.icon} 
              label={button.label} 
              onClick={() => onButtonClick(button.label.toLowerCase())}
            />
          ))}
        </div>
      </div>
      
      {/* Footer Social Links */}
      <footer 
        className={`flex items-center justify-center gap-4 text-gray-400 ${baseTransition} ${animationState(animated)}`}
        style={{ transitionDelay: '600ms' }}
      >
        {socialLinks.map(link => (
          <SocialLink key={link.label} icon={link.icon} label={link.label} href={link.href} />
        ))}
      </footer>
    </div>
  );
};