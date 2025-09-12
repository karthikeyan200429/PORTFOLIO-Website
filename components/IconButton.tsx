import React from 'react';

interface IconButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, label, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="group flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 text-base bg-brand-teal-800 text-white rounded-full shadow-lg transform transition-all duration-300 hover:bg-brand-teal-700 hover:-translate-y-2 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-brand-teal-500 focus:ring-opacity-50"
    >
      <div className="w-10 h-10 mb-2 text-cyan-200 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <span className="font-medium">{label}</span>
    </button>
  );
};