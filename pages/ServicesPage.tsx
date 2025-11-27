
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StatusBar from '../components/StatusBar';
import Breadcrumbs from '../components/Breadcrumbs';
import { Terminal, BrainCircuit, PenTool, Fingerprint, TrendingUp, Rocket, ArrowRight, Layers, Code2, Cpu, Globe, Database, Zap } from 'lucide-react';

const ServicesPage: React.FC = () => {
  
  const serviceCategories = [
    {
      title: "Product & Engineering",
      desc: "Building the technical backbone of the cognitive enterprise.",
      services: [
        {
          title: "Full-Stack Development",
          desc: "Engineering resilient, scalable ecosystems. We prioritize type safety, performance, and long-term maintainability over trends.",
          icon: <Terminal className="w-6 h-6" />,
          link: "/services/development",
          modules: ["Systems Architecture", "CI/CD Pipelines", "Cloud Native Infra"]
        },
        {
          title: "AI Solutions",
          desc: "Moving beyond chatbots. We engineer enterprise-grade neural architectures that integrate deep into your operational stack.",
          icon: <BrainCircuit className="w-6 h-6" />,
          link: "/services/ai-solutions",
          modules: ["RAG Pipelines", "Autonomous Agents", "Predictive Vision"]
        },
        {
          title: "Design Systems",
          desc: "Bridging the gap between brand promise and product reality. We ensure consistency at infinite scale through atomic architecture.",
          icon: <PenTool className="w-6 h-6" />,
          link: "/services/design-systems",
          modules: ["Figma Orchestration", "React Component Kits", "Visual Governance"]
        }
      ]
    },
    {
      title: "Brand & Strategy",
      desc: "Defining the narrative and growth vectors for market dominance.",
      services: [
        {
          title: "Brand Identity",
          desc: "A brand is a pattern of behavior. We engineer coherent visual and verbal systems that cut through the noise.",
          icon: <Fingerprint className="w-6 h-6" />,
          link: "/services/brand-identity",
          modules: ["Visual Systems", "Verbal Identity", "Strategic Positioning"]
        },
        {
          title: "Market Strategy",
          desc: "Hope is not a strategy. We use data and behavioral psychology to engineer predictable growth engines.",
          icon: <TrendingUp className="w-6 h-6" />,
          link: "/services/market-strategy",
          modules: ["Product-Led Growth", "Account-Based Marketing", "Brand Performance"]
        },
        {
          title: "Venture Advisory",
          desc: "Acting as fractional co-founders. We help ambitious founders navigate the valley of death from ideation to exit.",
          icon: <Rocket className="w-6 h-6" />,
          link: "/services/venture-advisory",
          modules: ["Fundraising Strategy", "Board Management", "Exit Planning"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-off-white selection:bg-carbon selection:text-white font-sans pb-10 flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32">
        <div className="container mx-auto px-6 mb-8">
            <Breadcrumbs />
        </div>

        {/* Page Hero */}
        <section className="container mx-auto px-6 mb-24 relative">
          <div className="max-w-5xl">
            <span className="text-swiss-red font-mono text-xs font-bold uppercase tracking-widest mb-6 block">02 — Capabilities</span>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] text-carbon mb-12">
              THE COGNITIVE<br/>SUITE.
            </h1>
            <div className="flex flex-col md:flex-row gap-12 items-start border-t border-gray-200 pt-12">
                <p className="text-xl md:text-2xl text-gray-600 font-sans leading-relaxed max-w-2xl">
                    We don't sell hours; we sell outcomes. Our service architecture is modular, 
                    allowing enterprises to compose the exact stack of capabilities needed to 
                    leapfrog the competition.
                </p>
            </div>
          </div>
        </section>

        {/* Services Catalog */}
        <section className="bg-white border-y border-gray-200">
            {serviceCategories.map((category, catIdx) => (
                <div key={catIdx} className="relative">
                    {/* Category Header */}
                    <div className="bg-gray-50 py-16 border-b border-gray-200">
                        <div className="container mx-auto px-6">
                            <div className="flex flex-col md:flex-row justify-between items-end">
                                <div>
                                    <span className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-2 block">Domain 0{catIdx + 1}</span>
                                    <h2 className="text-4xl font-display font-medium text-carbon">{category.title}</h2>
                                </div>
                                <p className="text-gray-500 max-w-md text-sm mt-4 md:mt-0">{category.desc}</p>
                            </div>
                        </div>
                    </div>

                    {/* Service Cards */}
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 divide-y divide-gray-200">
                            {category.services.map((service, idx) => (
                                <Link 
                                    key={idx} 
                                    to={service.link}
                                    className="group py-16 flex flex-col md:flex-row gap-12 md:items-center hover:bg-white transition-colors cursor-pointer"
                                >
                                    <div className="md:w-1/4">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-carbon group-hover:bg-swiss-red group-hover:text-white transition-colors duration-300">
                                                {service.icon}
                                            </div>
                                            <h3 className="text-2xl font-display font-medium group-hover:text-swiss-red transition-colors">
                                                {service.title}
                                            </h3>
                                        </div>
                                    </div>
                                    
                                    <div className="md:w-2/4">
                                        <p className="text-gray-500 text-lg leading-relaxed">
                                            {service.desc}
                                        </p>
                                    </div>

                                    <div className="md:w-1/4 flex flex-col justify-between h-full gap-6">
                                        <div className="space-y-2">
                                            {service.modules.map((mod, mIdx) => (
                                                <div key={mIdx} className="flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-gray-400">
                                                    <div className="w-1 h-1 bg-swiss-red rounded-full" />
                                                    {mod}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-carbon group-hover:translate-x-2 transition-transform duration-300">
                                            Explore Module <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </section>

        {/* Engagement Model */}
        <section className="container mx-auto px-6 py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl font-display font-bold mb-8">
                        HOW WE ENGAGE.
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed mb-12">
                        We reject the traditional agency "retainer" model which incentivizes slowness. 
                        Our engagements are structured as high-velocity sprints or deep-integration partnerships.
                    </p>
                    <div className="space-y-8">
                        <div className="flex gap-6">
                            <div className="w-12 h-12 border border-gray-200 flex items-center justify-center shrink-0 bg-white">
                                <Zap className="w-5 h-5 text-swiss-red" />
                            </div>
                            <div>
                                <h4 className="font-display text-xl font-medium mb-2">The Sprint</h4>
                                <p className="text-sm text-gray-500">4-6 weeks. Laser-focused execution on a specific deliverable (e.g., MVP, Brand Identity, Audit).</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="w-12 h-12 border border-gray-200 flex items-center justify-center shrink-0 bg-white">
                                <Layers className="w-5 h-5 text-swiss-red" />
                            </div>
                            <div>
                                <h4 className="font-display text-xl font-medium mb-2">The Partnership</h4>
                                <p className="text-sm text-gray-500">6+ months. Deep integration where we act as your fractional product/engineering team.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-carbon text-white p-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                    <div className="relative z-10">
                        <h3 className="text-3xl font-display font-medium mb-6">Ready to deploy?</h3>
                        <p className="text-gray-400 mb-8">
                            Configure your engagement model and start the conversation.
                        </p>
                        <Link to="/contact" className="w-full bg-white text-carbon py-4 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-swiss-red hover:text-white transition-colors">
                            Initialize Project
                        </Link>
                    </div>
                </div>
            </div>
        </section>

      </main>
      
      <Footer />
      <StatusBar />
    </div>
  );
};

export default ServicesPage;
