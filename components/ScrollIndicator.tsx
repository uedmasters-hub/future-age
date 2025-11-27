import React, { useState, useEffect } from 'react';

const ScrollIndicator: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false); // Start invisible, let logic decide
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    let idleTimer: ReturnType<typeof setTimeout>;

    const checkScrollPosition = () => {
      // 1. Check if we are at the bottom of the page
      const scrollPosition = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      // Use a small buffer (50px) to account for minor calculation diffs
      const atBottom = scrollPosition >= docHeight - 50;

      setIsAtBottom(atBottom);
      
      // 2. Hide immediately on action
      setIsVisible(false);

      // 3. Reset idle timer
      clearTimeout(idleTimer);
      
      // 4. If not at bottom, schedule reappearance
      if (!atBottom) {
        idleTimer = setTimeout(() => {
          setIsVisible(true);
        }, 3000); // 3 seconds of inactivity (reading time) triggers the nudge
      }
    };

    // Initial check on mount
    checkScrollPosition();

    window.addEventListener('scroll', checkScrollPosition);
    window.addEventListener('resize', checkScrollPosition);

    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('resize', checkScrollPosition);
      clearTimeout(idleTimer);
    };
  }, []);

  if (isAtBottom) return null;

  return (
    <div 
      className={`fixed bottom-14 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 transition-all duration-700 ease-out pointer-events-none ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="w-[26px] h-[42px] border border-carbon/30 rounded-full relative bg-white/10 backdrop-blur-[2px] shadow-sm">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-swiss-red rounded-full animate-[scrollWheel_2.5s_infinite]" />
      </div>
      
      <style>{`
        @keyframes scrollWheel {
          0% { transform: translate(-50%, 0); opacity: 1; }
          100% { transform: translate(-50%, 12px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default ScrollIndicator;