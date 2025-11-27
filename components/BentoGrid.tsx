import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, PenTool, Terminal, TrendingUp, Rocket, Fingerprint, ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "Development",
    desc: "Engineering scalable ecosystems. From high-performance web apps to complex backend infrastructures.",
    icon: <Terminal className="w-6 h-6" />,
    stack: ["React", "Rust", "Node", "AWS"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    className: "md:col-span-2",
    theme: "dark",
    href: "/services/development"
  },
  {
    id: "02",
    title: "AI Solutions",
    desc: "Cognitive intelligence integration. LLMs, RAG pipelines, and autonomous agents.",
    icon: <BrainCircuit className="w-6 h-6" />,
    stack: ["OpenAI", "Pinecone", "Python", "LangChain"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-2",
    theme: "light",
    href: "/services/ai-solutions"
  },
  {
    id: "03",
    title: "Design Systems",
    desc: "Intuitive, research-backed UI/UX consistency.",
    icon: <PenTool className="w-6 h-6" />,
    stack: ["Figma", "Storybook", "Rive"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    className: "md:col-span-1",
    theme: "light",
    href: "/services/design-systems"
  },
  {
    id: "04",
    title: "Brand Identity",
    desc: "Bold narratives that turn heads and build trust.",
    icon: <Fingerprint className="w-6 h-6" />,
    stack: ["Strategy", "Visuals", "Voice"],
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop",
    className: "md:col-span-1",
    theme: "dark",
    href: "/services/brand-identity"
  },
  {
    id: "05",
    title: "Market Strategy",
    desc: "Data-driven growth engines for maximum visibility.",
    icon: <TrendingUp className="w-6 h-6" />,
    stack: ["SEO", "Analytics", "CRM"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    className: "md:col-span-1",
    theme: "light",
    href: "/services/market-strategy"
  },
  {
    id: "06",
    title: "Venture Advisory",
    desc: "From ideation to IPO. We act as your fractional co-founders.",
    icon: <Rocket className="w-6 h-6" />,
    stack: ["Fundraising", "Legal", "Roadmap"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    className: "md:col-span-2",
    theme: "dark",
    href: "/services/venture-advisory"
  },
];

const BentoGrid: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section id="solutions" className="py-32 bg-off-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <span className="text-swiss-red font-mono text-xs font-bold uppercase tracking-widest mb-4 block">02 — Services</span>
            <h2 className="text-5xl md:text-7xl font-display font-medium tracking-[-0.03em] text-carbon leading-[0.9]">
              MODULAR<br/>INTELLIGENCE.
            </h2>
          </div>
          <div className="mt-8 md:mt-0 max-w-sm border-l-2 border-swiss-red pl-6">
            <p className="text-gray-500 text-sm font-sans leading-relaxed">
              We engineer capabilities. Select the modules your enterprise needs to leapfrog the competition.
            </p>
          </div>
        </div>

        {/* The Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[380px]">
          {services.map((service) => {
            const isDark = service.theme === 'dark';

            return (
              <Link
                to={service.href}
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className={`group relative overflow-hidden ${service.className} border border-gray-200 shadow-sm transition-all duration-500 hover:shadow-2xl cursor-pointer block`}
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
                  />
                  <div className={`absolute inset-0 transition-opacity duration-500 ${isDark ? 'bg-carbon/90 group-hover:bg-carbon/80' : 'bg-white/90 group-hover:bg-white/80'}`} />
                  {/* Gradient for Text Readability */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-black/80' : 'from-white/80'} to-transparent opacity-60`} />
                </div>

                {/* Content Container */}
                <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                  
                  {/* Top Row: Icon & Arrow */}
                  <div className="flex justify-between items-start">
                    <div className={`p-3 rounded-full border backdrop-blur-md ${isDark ? 'bg-white/10 border-white/20 text-white' : 'bg-black/5 border-black/10 text-carbon'}`}>
                      {service.icon}
                    </div>
                    <div className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300 group-hover:bg-swiss-red group-hover:border-swiss-red group-hover:text-white ${isDark ? 'border-white/20 text-white/50' : 'border-black/10 text-black/50'}`}>
                      <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
                    </div>
                  </div>

                  {/* Middle: Big Index Number (Artistic Background) */}
                  <div className={`absolute right-0 top-1/2 -translate-y-1/2 font-display font-bold text-[120px] leading-none opacity-[0.03] select-none pointer-events-none transition-transform duration-700 group-hover:translate-x-4 ${isDark ? 'text-white' : 'text-black'}`}>
                    {service.id}
                  </div>

                  {/* Bottom: Text & Stack */}
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className={`text-3xl font-display font-medium mb-3 ${isDark ? 'text-white' : 'text-carbon'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm font-sans leading-relaxed mb-6 line-clamp-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {service.desc}
                    </p>
                    
                    {/* Tech Stack Pills (Revealed on Hover) */}
                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {service.stack.map(tech => (
                        <span 
                          key={tech} 
                          className={`px-2 py-1 text-[10px] font-mono uppercase tracking-wide border ${isDark ? 'border-white/20 text-gray-300' : 'border-black/10 text-gray-600'} bg-transparent`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;