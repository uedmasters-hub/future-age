
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ChevronDown, BrainCircuit, Terminal, PenTool, Fingerprint, Rocket, TrendingUp, Users, Globe, HelpCircle, Sparkles, FileText, Cpu, Search, BarChart3, Zap, Database, Building2 } from 'lucide-react';

// --- Types & Data ---

type SubLink = {
  label: string;
  href: string;
  desc?: string;
  icon?: React.ReactNode;
};

type MegaMenuItem = {
  id: string;
  label: string;
  columns: {
    title: string;
    items: SubLink[];
  }[];
  featured?: {
    title: string;
    desc: string;
    href: string;
    image: string;
  };
};

const NAV_DATA: MegaMenuItem[] = [
  {
    id: 'services',
    label: 'Services',
    columns: [
      {
        title: 'Product & Engineering',
        items: [
          { label: 'Development', href: '/services/development', desc: 'Full-stack ecosystems.', icon: <Terminal className="w-4 h-4" /> },
          { label: 'AI Solutions', href: '/services/ai-solutions', desc: 'LLMs & autonomous agents.', icon: <BrainCircuit className="w-4 h-4" /> },
          { label: 'Design Systems', href: '/services/design-systems', desc: 'UI/UX Architecture.', icon: <PenTool className="w-4 h-4" /> },
        ]
      },
      {
        title: 'Brand & Venture',
        items: [
          { label: 'Brand Identity', href: '/services/brand-identity', desc: 'Visual narratives.', icon: <Fingerprint className="w-4 h-4" /> },
          { label: 'Market Strategy', href: '/services/market-strategy', desc: 'Growth engines.', icon: <TrendingUp className="w-4 h-4" /> },
          { label: 'Venture Advisory', href: '/services/venture-advisory', desc: 'Fractional leadership.', icon: <Rocket className="w-4 h-4" /> },
        ]
      }
    ],
    featured: {
      title: 'Client Impact',
      desc: 'See how we delivered 200% growth for a Tier-1 VC fund.',
      href: '/company/clients',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
    }
  },
  {
    id: 'company',
    label: 'Company',
    columns: [
      {
        title: 'Organization',
        items: [
          { label: 'Overview', href: '/company/overview', desc: 'Our story & mission.', icon: <Building2 className="w-4 h-4" /> },
          { label: 'Leadership', href: '/company/leadership', desc: 'Fractional executives.', icon: <Users className="w-4 h-4" /> },
          { label: 'Clients', href: '/company/clients', desc: 'Trusted by visionaries.', icon: <Globe className="w-4 h-4" /> },
        ]
      },
      {
        title: 'Resources',
        items: [
          { label: 'Support / FAQ', href: '/company/faq', desc: 'Common queries.', icon: <HelpCircle className="w-4 h-4" /> },
          { label: 'Manifesto', href: '/company/manifesto', desc: 'Our vision.', icon: <FileText className="w-4 h-4" /> },
        ]
      }
    ],
    featured: {
      title: 'Make Us Your Team',
      desc: 'Embed our fractional leaders directly into your workflows.',
      href: '/company/leadership',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop'
    }
  },
  {
    id: 'intelligence',
    label: 'Intelligence',
    columns: [
      {
        title: 'Core Engines',
        items: [
          { label: 'Foresight Engine', href: '/intelligence/foresight-engine', desc: 'Generative strategy modeling.', icon: <Cpu className="w-4 h-4" /> },
          { label: 'Nexus Core', href: '/intelligence/nexus-core', desc: 'Cross-platform data synthesis.', icon: <Database className="w-4 h-4" /> },
          { label: 'Velocity', href: '/intelligence/velocity', desc: 'Rapid-prototyping pipelines.', icon: <Zap className="w-4 h-4" /> },
        ]
      },
      {
        title: 'Live Analysis',
        items: [
          { label: 'Market Sentiment', href: '/intelligence/market-sentiment', desc: 'Real-time behavioral tracking.', icon: <TrendingUp className="w-4 h-4" /> },
          { label: 'Vector Search', href: '/intelligence/vector-search', desc: 'Semantic knowledge retrieval.', icon: <Search className="w-4 h-4" /> },
          { label: 'Predictive Models', href: '/intelligence/predictive-models', desc: 'Revenue & churn forecasting.', icon: <BarChart3 className="w-4 h-4" /> },
        ]
      }
    ],
    featured: {
      title: 'The Playground',
      desc: 'Access our experimental sandbox. Test prompt engineering strategies against our diverse model garden.',
      href: '/intelligence/foresight-engine',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
    }
  }
];

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle outside click to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const toggleMobileExpand = (id: string) => {
    setMobileExpanded(mobileExpanded === id ? null : id);
  };

  // Helper to check if a menu section is active based on current path
  const isSectionActive = (id: string) => {
    return location.pathname.startsWith(`/${id}`);
  };

  return (
    <nav 
      ref={navRef}
      onMouseLeave={handleMouseLeave}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled || activeDropdown || mobileMenuOpen 
          ? 'bg-white/95 backdrop-blur-md border-gray-200 text-carbon py-4 shadow-sm' 
          : 'bg-transparent border-transparent text-carbon py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center relative z-50">
          
          {/* LEFT: Logo */}
          <Link to="/" className="flex items-center gap-3 group relative z-50">
            <div className="text-carbon group-hover:opacity-80 transition-opacity duration-300">
              {/* Custom Grid "F" Logo */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="7" height="7" fill="currentColor"/>
                  <rect x="8.5" width="7" height="7" fill="currentColor"/>
                  <rect x="17" width="7" height="7" fill="#FF2E00"/>
                  
                  <rect y="8.5" width="7" height="7" fill="currentColor"/>
                  <rect x="8.5" y="8.5" width="7" height="7" fill="currentColor"/>
                  
                  <rect y="17" width="7" height="7" fill="currentColor"/>
              </svg>
            </div>
            <span className={`font-display font-bold text-xl tracking-tighter uppercase transition-colors duration-300 ${scrolled || activeDropdown || mobileMenuOpen ? 'text-black' : 'text-black'}`}>
              Future Age
            </span>
          </Link>

          {/* RIGHT: Navigation & CTA */}
          <div className="flex items-center gap-8 lg:gap-12">
            
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_DATA.map((item) => (
                <button 
                  key={item.id}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  className={`group relative flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest py-2 transition-all duration-300 ${
                    activeDropdown === item.id || isSectionActive(item.id)
                      ? 'text-carbon' 
                      : 'text-gray-500 hover:text-carbon'
                  }`}
                >
                  {(activeDropdown === item.id || isSectionActive(item.id)) && (
                    <span className="w-1.5 h-1.5 bg-swiss-red rounded-full absolute -left-3 animate-pulse" />
                  )}
                  {item.label}
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 opacity-50 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                </button>
              ))}
            </div>

            {/* Separator */}
            <div className="hidden lg:block w-px h-6 bg-gray-200" />

            {/* CTA Button */}
            <div className="flex items-center gap-6">
              <Link 
                to="/contact"
                className={`hidden md:flex items-center gap-2 px-6 py-2.5 border text-xs font-bold uppercase tracking-widest transition-all duration-300 group ${
                  scrolled || activeDropdown || mobileMenuOpen 
                  ? 'border-black text-black hover:bg-black hover:text-white'
                  : 'border-black text-black hover:bg-black hover:text-white'
                }`}
              >
                Start Project 
                <ArrowUpRight className="w-3 h-3 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              {/* Mobile Toggle */}
              <button 
                className="lg:hidden text-black focus:outline-none relative z-50 p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* MEGA MENU DROPDOWN (Desktop) */}
      <div 
        className={`absolute top-full left-0 w-full bg-off-white border-b border-gray-200 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] origin-top ${
          activeDropdown ? 'max-h-[600px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-30 pointer-events-none" />
        
        {NAV_DATA.map((item) => (
          <div 
            key={item.id} 
            className={`container mx-auto px-6 py-16 relative z-10 grid grid-cols-12 gap-12 ${activeDropdown === item.id ? 'block' : 'hidden'}`}
          >
            {/* Left: Columns */}
            <div className="col-span-8 grid grid-cols-2 gap-12">
              {item.columns.map((col, idx) => (
                <div key={idx} className="space-y-6">
                  <h3 className="font-mono text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-200 pb-2">
                    {col.title}
                  </h3>
                  <div className="space-y-4">
                    {col.items.map((sub, sIdx) => (
                      <Link 
                        key={sIdx} 
                        to={sub.href}
                        className="group flex items-start gap-4 p-3 -mx-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="mt-1 text-gray-400 group-hover:text-swiss-red transition-colors">
                          {sub.icon}
                        </div>
                        <div>
                          <div className="font-display font-medium text-lg text-carbon group-hover:text-swiss-red transition-colors">
                            {sub.label}
                          </div>
                          {sub.desc && (
                            <p className="text-sm text-gray-500 font-sans leading-relaxed mt-0.5">
                              {sub.desc}
                            </p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Featured Card */}
            {item.featured && (
              <div className="col-span-4 border-l border-gray-200 pl-12">
                <h3 className="font-mono text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
                  Featured
                </h3>
                <Link 
                  to={item.featured.href} 
                  className="group block relative overflow-hidden h-[240px] bg-gray-100"
                  onClick={() => setActiveDropdown(null)}
                >
                  <img 
                    src={item.featured.image} 
                    alt={item.featured.title} 
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                    <h4 className="font-display font-bold text-xl mb-2 group-hover:text-swiss-red transition-colors">
                      {item.featured.title}
                    </h4>
                    <p className="text-sm text-gray-300 font-sans leading-relaxed mb-4">
                      {item.featured.desc}
                    </p>
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-white/30 pb-1 group-hover:border-swiss-red transition-colors">
                      Explore <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* MOBILE MENU (Accordion) */}
      <div 
        className={`fixed inset-0 top-[73px] bg-white z-40 lg:hidden overflow-y-auto transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 pb-32">
          {NAV_DATA.map((item) => (
            <div key={item.id} className="border-b border-gray-100 last:border-none">
              <button 
                onClick={() => toggleMobileExpand(item.id)}
                className="w-full flex justify-between items-center py-6 text-left group"
              >
                <span className={`text-2xl font-display font-medium uppercase tracking-tight ${mobileExpanded === item.id ? 'text-swiss-red' : 'text-carbon'}`}>
                  {item.label}
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileExpanded === item.id ? 'rotate-180 text-swiss-red' : 'text-gray-400'}`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${mobileExpanded === item.id ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pb-8 pl-4 space-y-8">
                  {item.columns.map((col, cIdx) => (
                    <div key={cIdx}>
                      <h4 className="font-mono text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                        {col.title}
                      </h4>
                      <div className="space-y-4">
                        {col.items.map((sub, sIdx) => (
                          <Link 
                            key={sIdx} 
                            to={sub.href}
                            className="block"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <div className="text-lg font-display text-carbon mb-1">
                              {sub.label}
                            </div>
                            {sub.desc && (
                              <p className="text-sm text-gray-500">
                                {sub.desc}
                              </p>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          <div className="mt-8 pt-8 border-t border-gray-100">
             <Link 
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-black text-white py-4 font-bold uppercase tracking-widest text-sm hover:bg-swiss-red transition-colors"
            >
              Start Project <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
