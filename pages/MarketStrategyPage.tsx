
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StatusBar from '../components/StatusBar';
import Breadcrumbs from '../components/Breadcrumbs';
import { TrendingUp, Target, Users, BarChart3, ArrowRight, PieChart, Zap, Globe, ChevronRight, MousePointer2, Filter } from 'lucide-react';

const MarketStrategyPage: React.FC = () => {
  const [activeStrategy, setActiveStrategy] = useState<'plg' | 'abm' | 'brand' | 'community'>('plg');

  const strategies = {
    plg: {
      id: 'plg',
      title: "Product-Led Growth (PLG)",
      icon: <Zap className="w-6 h-6" />,
      desc: "A capital-efficient model where the product itself drives acquisition, retention, and expansion. Best for SaaS and self-serve tools.",
      kpis: [
        { label: "Time to Value", value: "< 5m", trend: "-40%", desc: "Reduction in onboarding friction" },
        { label: "Viral Coefficient", value: "1.4", trend: "+0.3", desc: "User-to-user referral rate" },
        { label: "Expansion Rev", value: "35%", trend: "+12%", desc: "Upsell from free/pro tiers" }
      ],
      tactics: [
        { title: "Frictionless Onboarding", desc: "Removing gates, credit cards, and sales calls." },
        { title: "Viral Loops", desc: "In-product referral incentives and network effects." },
        { title: "Usage-Based Pricing", desc: "Aligning cost with value delivered." }
      ]
    },
    abm: {
      id: 'abm',
      title: "Account-Based Marketing",
      icon: <Target className="w-6 h-6" />,
      desc: "High-precision targeting of specific enterprise accounts. We treat each prospect as a market of one.",
      kpis: [
        { label: "Pipeline Velocity", value: "2x", trend: "+100%", desc: "Speed from lead to deal" },
        { label: "ACV Increase", value: "₹1Cr", trend: "+45%", desc: "Average Contract Value growth" },
        { label: "Engagement Rate", value: "85%", trend: "+30%", desc: "Target account penetration" }
      ],
      tactics: [
        { title: "Personalized IP Targeting", desc: "Custom landing pages for specific HQs." },
        { title: "Executive Direct Mail", desc: "High-value physical touchpoints to open doors." },
        { title: "Sales-Marketing Alignment", desc: "Unified scoring and pursuit squads." }
      ]
    },
    brand: {
      id: 'brand',
      title: "Brand Performance",
      icon: <Globe className="w-6 h-6" />,
      desc: "Building long-term equity while driving short-term conversions. The intersection of storytelling and analytics.",
      kpis: [
        { label: "Share of Voice", value: "22%", trend: "+8%", desc: "Market dominance metric" },
        { label: "Organic Traffic", value: "150k", trend: "+200%", desc: "Non-paid acquisition growth" },
        { label: "CAC Reduction", value: "-30%", trend: "30%", desc: "Brand halo effect efficiency" }
      ],
      tactics: [
        { title: "Thought Leadership", desc: "Dominating the narrative on LinkedIn/X." },
        { title: "Visual Consistency", desc: "Deploying the atomic design system across ads." },
        { title: "Sentiment Analysis", desc: "AI-driven monitoring of brand perception." }
      ]
    },
    community: {
      id: 'community',
      title: "Community Flywheel",
      icon: <Users className="w-6 h-6" />,
      desc: "Turning customers into evangelists. Creating a moat through shared knowledge and connection.",
      kpis: [
        { label: "Member Growth", value: "5k+", trend: "+15% MoM", desc: "Active community participants" },
        { label: "UGC Content", value: "400+", trend: "Daily", desc: "User generated artifacts" },
        { label: "Support Deflection", value: "60%", trend: "High", desc: "Peer-to-peer problem solving" }
      ],
      tactics: [
        { title: "Ambassador Programs", desc: "Rewarding power users with status and access." },
        { title: "Event Orchestration", desc: "Digital summits and local meetups." },
        { title: "Content Co-Creation", desc: "Building the product roadmap with users." }
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
            <span className="text-swiss-red font-mono text-xs font-bold uppercase tracking-widest mb-6 block">Strategy // 05</span>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] text-carbon mb-12">
              MARKET<br/>VELOCITY.
            </h1>
            <div className="flex flex-col md:flex-row gap-12 items-start border-t border-gray-200 pt-12">
                <p className="text-xl md:text-2xl text-gray-600 font-sans leading-relaxed max-w-2xl">
                    Hope is not a strategy. We use data, behavioral psychology, and rigorous experimentation 
                    to engineer predictable growth engines for startups and enterprises.
                </p>
            </div>
          </div>
        </section>

        {/* Strategy Vault */}
        <section className="bg-white border-y border-gray-200 py-24 mb-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">
                    
                    {/* Left: Selector */}
                    <div className="lg:w-1/3">
                        <h2 className="text-3xl font-display font-medium mb-2">The Strategy Vault.</h2>
                        <p className="text-gray-500 mb-10 text-sm">Select a growth model to analyze performance metrics.</p>
                        
                        <div className="space-y-2">
                            {Object.values(strategies).map((strategy) => (
                                <button
                                    key={strategy.id}
                                    onClick={() => setActiveStrategy(strategy.id as any)}
                                    className={`w-full text-left px-6 py-5 border font-display text-lg transition-all flex justify-between items-center group duration-300 ${
                                        activeStrategy === strategy.id 
                                        ? 'bg-carbon text-white border-carbon shadow-lg transform -translate-y-1' 
                                        : 'bg-white border-gray-200 text-gray-500 hover:border-carbon hover:text-carbon'
                                    }`}
                                >
                                    <span className="flex items-center gap-4">
                                        {strategy.icon}
                                        {strategy.title}
                                    </span>
                                    {activeStrategy === strategy.id && <ChevronRight className="w-5 h-5" />}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Dashboard */}
                    <div className="lg:w-2/3 bg-gray-50 border border-gray-200 p-8 md:p-12 relative min-h-[600px]">
                        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                        
                        <div className="relative z-10 animate-fade-in">
                            <div className="flex justify-between items-start mb-12">
                                <div>
                                    <span className="font-mono text-xs uppercase tracking-widest text-swiss-red mb-2 block">Active Model</span>
                                    <h3 className="text-4xl font-display font-bold text-carbon">{strategies[activeStrategy].title}</h3>
                                </div>
                                <div className="hidden md:block text-right max-w-xs">
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        {strategies[activeStrategy].desc}
                                    </p>
                                </div>
                            </div>

                            {/* KPI Cards */}
                            <h4 className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-6">Projected KPIs</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                                {strategies[activeStrategy].kpis.map((kpi, idx) => (
                                    <div key={idx} className="bg-white p-6 border border-gray-200 shadow-sm group hover:border-swiss-red transition-colors">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-xs font-mono text-gray-400 uppercase">{kpi.label}</span>
                                            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{kpi.trend}</span>
                                        </div>
                                        <div className="text-4xl font-display font-medium text-carbon mb-2">{kpi.value}</div>
                                        <p className="text-[10px] text-gray-400 leading-tight">{kpi.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Tactics List */}
                            <h4 className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-6">Tactical Execution</h4>
                            <div className="space-y-4">
                                {strategies[activeStrategy].tactics.map((tactic, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-4 border-b border-gray-200 last:border-0">
                                        <div className="w-6 h-6 bg-carbon text-white rounded-full flex items-center justify-center text-xs font-mono shrink-0 mt-0.5">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-carbon mb-1">{tactic.title}</h5>
                                            <p className="text-sm text-gray-500">{tactic.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Process Section */}
        <section className="container mx-auto px-6 mb-24">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
                <div className="bg-white p-10">
                    <div className="text-4xl font-display font-bold text-gray-200 mb-6">01</div>
                    <h3 className="text-xl font-bold mb-4">Audit & Baseline</h3>
                    <p className="text-sm text-gray-500">We analyze your current funnel, churn rates, and CAC to establish ground truth.</p>
                </div>
                <div className="bg-white p-10">
                    <div className="text-4xl font-display font-bold text-gray-200 mb-6">02</div>
                    <h3 className="text-xl font-bold mb-4">Hypothesis</h3>
                    <p className="text-sm text-gray-500">We identify the highest leverage growth levers and design experiments.</p>
                </div>
                <div className="bg-white p-10">
                    <div className="text-4xl font-display font-bold text-gray-200 mb-6">03</div>
                    <h3 className="text-xl font-bold mb-4">Execution</h3>
                    <p className="text-sm text-gray-500">Rapid deployment of campaigns, content, and engineering assets.</p>
                </div>
                <div className="bg-white p-10 bg-carbon text-white">
                    <div className="text-4xl font-display font-bold text-gray-700 mb-6">04</div>
                    <h3 className="text-xl font-bold mb-4 text-swiss-red">Scale</h3>
                    <p className="text-sm text-gray-400">Doubling down on winning channels and automating the workflow.</p>
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="bg-carbon text-white py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
                    STOP GUESSING.
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
                    Your market is moving fast. Our data-driven strategies ensure you move faster.
                </p>
                <a href="/#contact" className="inline-flex items-center gap-3 border-b-2 border-white pb-1 text-2xl font-display hover:text-swiss-red hover:border-swiss-red transition-all">
                    Build Growth Engine
                </a>
            </div>
        </section>

      </main>
      <Footer />
      <StatusBar />
    </div>
  );
};

export default MarketStrategyPage;
