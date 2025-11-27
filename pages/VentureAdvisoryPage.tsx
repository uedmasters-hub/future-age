
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StatusBar from '../components/StatusBar';
import Breadcrumbs from '../components/Breadcrumbs';
import { Rocket, TrendingUp, PieChart, Shield, ArrowRight, CheckCircle2, DollarSign, BarChart, Users, Milestone } from 'lucide-react';

const VentureAdvisoryPage: React.FC = () => {
  const [activeStage, setActiveStage] = useState<'preseed' | 'seed' | 'seriesA' | 'seriesB'>('seed');

  const stages = {
    preseed: {
      title: "Pre-Seed / Ideation",
      focus: "Problem-Solution Fit",
      range: "₹2Cr - ₹8Cr",
      equity: "10% - 20%",
      runway: "12 Months",
      deliverables: [
        "Pitch Deck Narrative",
        "Market Sizing (TAM/SAM/SOM)",
        "MVP Technical Architecture",
        "Co-Founder Agreements"
      ],
      metrics: [
        { label: "Risk Profile", value: "High", color: "text-red-500" },
        { label: "Valuation Cap", value: "₹25Cr - ₹65Cr", color: "text-carbon" },
        { label: "Key Hire", value: "CTO / Tech Lead", color: "text-carbon" }
      ]
    },
    seed: {
      title: "Seed Stage",
      focus: "Product-Market Fit",
      range: "₹8Cr - ₹32Cr",
      equity: "15% - 25%",
      runway: "18 Months",
      deliverables: [
        "Financial Modeling & Projections",
        "First 10 Customers (LOIs)",
        "Core Team Hiring Plan",
        "Data Room Structuring"
      ],
      metrics: [
        { label: "Risk Profile", value: "Medium", color: "text-yellow-600" },
        { label: "Valuation Cap", value: "₹80Cr - ₹160Cr", color: "text-carbon" },
        { label: "Key Hire", value: "Head of Sales", color: "text-carbon" }
      ]
    },
    seriesA: {
      title: "Series A",
      focus: "Scalable Revenue Engine",
      range: "₹65Cr - ₹160Cr",
      equity: "15% - 20%",
      runway: "24 Months",
      deliverables: [
        "Unit Economics Optimization",
        "GTM Playbook Scaling",
        "Board Governance Setup",
        "International Expansion Plan"
      ],
      metrics: [
        { label: "Risk Profile", value: "Execution", color: "text-green-600" },
        { label: "Valuation", value: "₹320Cr - ₹650Cr", color: "text-carbon" },
        { label: "Key Hire", value: "VP of Marketing", color: "text-carbon" }
      ]
    },
    seriesB: {
      title: "Series B+",
      focus: "Market Dominance",
      range: "₹250Cr+",
      equity: "10% - 15%",
      runway: "36 Months",
      deliverables: [
        "M&A Strategy",
        "IPO Readiness Assessment",
        "Executive Compensation Structuring",
        "Brand Moat Defense"
      ],
      metrics: [
        { label: "Risk Profile", value: "Low", color: "text-blue-600" },
        { label: "Valuation", value: "₹800Cr+", color: "text-carbon" },
        { label: "Key Hire", value: "CFO", color: "text-carbon" }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-off-white selection:bg-carbon selection:text-white font-sans pb-10 flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32">
        <div className="container mx-auto px-6 mb-8">
            <Breadcrumbs />
        </div>

        {/* Hero */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-5xl">
            <span className="text-swiss-red font-mono text-xs font-bold uppercase tracking-widest mb-6 block">Advisory // 06</span>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] text-carbon mb-12">
              CAPITAL<br/>VELOCITY.
            </h1>
            <div className="flex flex-col md:flex-row gap-12 items-start border-t border-gray-200 pt-12">
                <p className="text-xl md:text-2xl text-gray-600 font-sans leading-relaxed max-w-2xl">
                    We act as fractional co-founders and strategic advisors, helping ambitious founders 
                    navigate the valley of death from ideation to exit. We don't just advise; we invest our intellectual capital.
                </p>
                
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <div className="text-4xl font-display font-bold text-carbon mb-1">₹3,600Cr+</div>
                        <span className="text-xs font-mono uppercase tracking-widest text-gray-500">Client Capital Raised</span>
                    </div>
                    <div>
                        <div className="text-4xl font-display font-bold text-carbon mb-1">12</div>
                        <span className="text-xs font-mono uppercase tracking-widest text-gray-500">Successful Exits</span>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Interactive Roadmap */}
        <section className="bg-carbon text-white py-24 mb-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10" />
            <div className="container mx-auto px-6 relative z-10">
                
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="text-3xl font-display font-medium mb-4">The Funding Roadmap.</h2>
                        <p className="text-gray-400 max-w-md text-sm">
                            Navigate the expectations of Tier-1 VCs. Select a stage to view our advisory framework.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Tabs */}
                    <div className="lg:col-span-3 space-y-2">
                        {(Object.keys(stages) as Array<keyof typeof stages>).map((key) => (
                            <button
                                key={key}
                                onClick={() => setActiveStage(key)}
                                className={`w-full text-left px-6 py-5 border transition-all flex justify-between items-center group ${
                                    activeStage === key 
                                    ? 'bg-swiss-red border-swiss-red text-white' 
                                    : 'bg-white/5 border-white/10 hover:bg-white/10 text-gray-400 hover:text-white'
                                }`}
                            >
                                <span className="font-mono text-xs uppercase tracking-widest">{stages[key].title}</span>
                                {activeStage === key && <ArrowRight className="w-4 h-4" />}
                            </button>
                        ))}
                    </div>

                    {/* Content Card */}
                    <div className="lg:col-span-9 bg-white text-carbon p-8 md:p-12 shadow-2xl relative">
                        <div className="absolute top-0 right-0 bg-gray-100 px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-gray-500">
                            Advisory Protocol v4.2
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                            <div>
                                <span className="text-swiss-red font-mono text-xs font-bold uppercase tracking-widest mb-2 block">Primary Objective</span>
                                <h3 className="text-4xl font-display font-bold mb-4">{stages[activeStage].focus}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    At this stage, our advisory focuses on de-risking the venture for investors while maximizing valuation through strategic narrative and metric optimization.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-4 border border-gray-100">
                                    <span className="block text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1">Raise Target</span>
                                    <span className="text-xl font-bold font-display">{stages[activeStage].range}</span>
                                </div>
                                <div className="bg-gray-50 p-4 border border-gray-100">
                                    <span className="block text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1">Dilution</span>
                                    <span className="text-xl font-bold font-display">{stages[activeStage].equity}</span>
                                </div>
                                <div className="bg-gray-50 p-4 border border-gray-100">
                                    <span className="block text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1">Runway Goal</span>
                                    <span className="text-xl font-bold font-display">{stages[activeStage].runway}</span>
                                </div>
                                <div className="bg-gray-50 p-4 border border-gray-100">
                                    <span className="block text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1">Timeline</span>
                                    <span className="text-xl font-bold font-display">3-6 Mo</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-100 pt-12">
                            <div>
                                <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Key Deliverables</h4>
                                <ul className="space-y-3">
                                    {stages[activeStage].deliverables.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-medium">
                                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Success Metrics</h4>
                                <div className="space-y-4">
                                    {stages[activeStage].metrics.map((metric, i) => (
                                        <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-0">
                                            <span className="text-sm text-gray-500">{metric.label}</span>
                                            <span className={`text-sm font-bold ${metric.color}`}>{metric.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-6 py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
                <div className="bg-white p-10 group hover:bg-carbon hover:text-white transition-colors duration-300">
                    <DollarSign className="w-8 h-8 mb-6 text-swiss-red" />
                    <h3 className="text-2xl font-display font-medium mb-4">Fundraising <br/>Architecture</h3>
                    <p className="text-sm text-gray-500 group-hover:text-gray-400">
                        We structure the round, craft the narrative, and introduce you to our network of Tier-1 investors and angels.
                    </p>
                </div>
                <div className="bg-white p-10 group hover:bg-carbon hover:text-white transition-colors duration-300">
                    <Users className="w-8 h-8 mb-6 text-swiss-red" />
                    <h3 className="text-2xl font-display font-medium mb-4">Board <br/>Management</h3>
                    <p className="text-sm text-gray-500 group-hover:text-gray-400">
                        Managing investor relations, preparing board decks, and ensuring governance compliance as you scale.
                    </p>
                </div>
                <div className="bg-white p-10 group hover:bg-carbon hover:text-white transition-colors duration-300">
                    <Milestone className="w-8 h-8 mb-6 text-swiss-red" />
                    <h3 className="text-2xl font-display font-medium mb-4">Exit <br/>Strategy</h3>
                    <p className="text-sm text-gray-500 group-hover:text-gray-400">
                        Planning for liquidity events from day one. M&A targets, IPO readiness, and strategic acqui-hire positioning.
                    </p>
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 mb-24">
          <div className="bg-white border border-gray-200 p-12 md:p-24 text-center relative overflow-hidden shadow-sm">
             <div className="absolute inset-0 bg-grid-pattern opacity-10" />
             <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-carbon">
                    SEEKING PARTNERS.
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
                    We engage with a select number of high-growth ventures each quarter.
                </p>
                <a href="/#contact" className="inline-flex items-center gap-3 bg-carbon text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-swiss-red transition-colors">
                   Pitch Your Venture
                </a>
             </div>
          </div>
        </section>

      </main>
      
      <Footer />
      <StatusBar />
    </div>
  );
};

export default VentureAdvisoryPage;
