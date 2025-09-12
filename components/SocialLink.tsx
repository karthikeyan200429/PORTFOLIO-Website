import React from 'react';

interface SocialLinkProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ icon, label, href }) => {
  return (
    <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-base text-gray-400 hover:text-white transition-colors duration-300">
      <div className="w-6 h-6 transform transition-transform duration-300 group-hover:scale-125">
        {icon}
      </div>
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
};