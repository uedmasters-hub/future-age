
import React from 'react';
import { ArrowUpRight, Plane, Clapperboard, Zap, LineChart, Globe } from 'lucide-react';

const clients = [
  {
    category: "Aviation",
    title: "Major International Airline",
    desc: "Blueprinting neural architecture for predictive maintenance and fleet logistics.",
    metric: "Fleet Efficiency +15%",
    span: "md:col-span-2",
    icon: <Plane className="w-3.5 h-3.5" />
  },
  {
    category: "Media",
    title: "Global Ad Agency",
    desc: "Establishing an AI Centre of Excellence to automate creative workflows.",
    metric: "Workflow Auto 80%",
    span: "md:col-span-2",
    icon: <Clapperboard className="w-3.5 h-3.5" />
  },
  {
    category: "Automotive",
    title: "EV Venture",
    desc: "Designing the HMI and digital experience for the next generation of mobility.",
    metric: "Time-to-Market -4mo",
    span: "md:col-span-2",
    icon: <Zap className="w-3.5 h-3.5" />
  },
  {
    category: "Venture Capital",
    title: "Tier-1 VC Fund",
    desc: "Developing a growth-hacking engine for a portfolio of 50+ funded startups.",
    metric: "Portfolio Value 2x",
    span: "md:col-span-3",
    icon: <LineChart className="w-3.5 h-3.5" />
  },
  {
    category: "Travel Tech",
    title: "B2B Agent Platform",
    desc: "End-to-end digital transformation: Branding, UX, and predictive booking engines.",
    metric: "Booking Vol +200%",
    span: "md:col-span-3",
    icon: <Globe className="w-3.5 h-3.5" />
  }
];

const ClientGrid: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-white text-carbon relative overflow-hidden">
      {/* Light Grid Texture */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-[0.3] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-gray-200 pb-8">
          <div>
             <span className="text-swiss-red font-mono text-xs font-bold uppercase tracking-widest mb-4 block">03 — Impact</span>
             <h2 className="text-5xl md:text-7xl font-display font-medium tracking-[-0.03em] text-carbon leading-[0.9]">
              TRUSTED BY<br/>VISIONARIES.
            </h2>
          </div>
          <div className="mt-8 md:mt-0 max-w-sm text-right">
             <p className="text-gray-500 text-sm font-sans leading-relaxed mb-2">
                We measure success in shipping, scaling, and ROI.
             </p>
             <p className="font-mono text-xs uppercase tracking-widest text-carbon">
                Global Deployment // Series A to Fortune 500
             </p>
          </div>
        </div>

        {/* 1px Grid Layout - Light Mode */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-px bg-gray-200 border border-gray-200 shadow-sm">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className={`${client.span} relative group bg-white p-8 md:p-10 hover:bg-gray-50 transition-all duration-500 min-h-[380px] flex flex-col justify-between overflow-hidden`}
            >
              {/* Dot Pattern Hover Effect */}
              <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />

              {/* Animated Red Bottom Bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-swiss-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] origin-left z-20" />

              {/* Top Row: Category Tag & Link */}
              <div className="relative z-10 flex justify-between items-start">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-white text-[10px] font-bold font-mono uppercase tracking-widest text-gray-500 group-hover:border-carbon group-hover:text-carbon transition-all duration-300">
                   <span className="text-swiss-red">{client.icon}</span>
                   {client.category}
                </div>
                <div className="w-8 h-8 flex items-center justify-center rounded-full border border-transparent group-hover:border-gray-200 bg-transparent group-hover:bg-white transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-swiss-red transition-colors duration-300" />
                </div>
              </div>

              {/* Middle Row: Content */}
              <div className="relative z-10 mt-auto pt-8 pr-12">
                <h3 className="text-3xl md:text-4xl font-display font-medium mb-4 text-carbon group-hover:-translate-y-1 transition-transform duration-500 leading-tight">
                  {client.title}
                </h3>
                <p className="text-gray-500 font-sans text-sm leading-relaxed max-w-md group-hover:text-gray-800 transition-colors duration-300">
                  {client.desc}
                </p>
              </div>

               {/* Bottom Row: Metric & Index */}
               <div className="relative z-10 pt-8 flex justify-between items-end border-t border-gray-100 mt-8 group-hover:border-gray-200 transition-colors">
                  <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1">Impact Metric</span>
                      <span className="text-lg font-display font-bold text-swiss-red">{client.metric}</span>
                  </div>
                  <div className="text-4xl font-display font-bold text-gray-100 group-hover:text-gray-200 transition-colors pointer-events-none select-none leading-none">
                     0{idx + 1}
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientGrid;
