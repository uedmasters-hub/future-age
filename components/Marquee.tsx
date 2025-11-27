import React from 'react';

const words = [
  "GENERATIVE AI", "PREDICTIVE ANALYTICS", "NEURAL ARCHITECTURES", "AUTOMATION", "DATA SYNTHESIS", "QUANTUM READY",
  "GENERATIVE AI", "PREDICTIVE ANALYTICS", "NEURAL ARCHITECTURES", "AUTOMATION", "DATA SYNTHESIS", "QUANTUM READY"
];

const Marquee: React.FC = () => {
  return (
    <div className="w-full bg-black text-white py-4 overflow-hidden border-b border-black">
      <div className="whitespace-nowrap animate-marquee flex gap-12 items-center">
        {words.map((word, i) => (
          <span key={i} className="text-sm md:text-base font-mono uppercase tracking-widest flex items-center gap-12">
            {word} <span className="w-2 h-2 bg-swiss-red rounded-full block" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;