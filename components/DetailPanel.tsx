import React, { useState, useEffect } from 'react';
import { BackwardIcon } from './Icons';

interface DetailPanelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const DetailPanel: React.FC<DetailPanelProps> = ({ isOpen, onClose, title, children }) => {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsAnimatingOut(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimatingOut(true);
    setTimeout(onClose, 500); // Match animation duration
  };

  if (!isOpen && !isAnimatingOut) return null;

  const animationClass = isOpen && !isAnimatingOut ? 'animate-slideIn' : 'animate-slideOut';

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 z-30 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
      />
      
      {/* Panel */}
      <aside 
        className={`fixed top-0 right-0 h-full w-full max-w-2xl bg-gray-800 shadow-2xl z-40 p-6 sm:p-8 flex flex-col ${animationClass}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="panel-title"
      >
        <header className="flex items-center justify-between pb-4 border-b border-gray-700">
          <h2 id="panel-title" className="text-xl sm:text-2xl font-bold text-white">{title}</h2>
          <button 
            onClick={handleClose}
            className="p-1 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
            aria-label="Go back"
          >
            <div className="w-6 h-6">
              <BackwardIcon />
            </div>
          </button>
        </header>
        <div className="flex-grow overflow-y-auto mt-6 text-gray-300 pr-2">
          {children}
        </div>
      </aside>
    </>
  );
};