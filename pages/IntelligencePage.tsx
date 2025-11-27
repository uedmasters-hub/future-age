
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StatusBar from '../components/StatusBar';
import Breadcrumbs from '../components/Breadcrumbs';
import { Cpu, Database, Zap, Activity, Search, BarChart3, ArrowRight, Lock, Server, Network, GitBranch, Shield, Layers } from 'lucide-react';

const IntelligencePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'feed' | 'telemetry'>('telemetry');
  const [logs, setLogs] = useState<string[]>([]);
  const [chartData, setChartData] = useState<number[]>(Array(20).fill(40));

  // Simulated Live Feed
  useEffect(() => {
    const events = [
      "Ingesting unstructured PDF data from /mnt/corp_data...",
      "Vectorizing tokens using ada-002...",
      "Anomaly detected in user_auth stream [Confidence: 98%]",
      "Optimizing RAG context window...",
      "Sentiment analysis complete: POSITIVE trend identified.",
      "Deploying new agent swarm to us-east-1...",
      "Cache hit on semantic search query.",
      "Re-indexing knowledge base [Shard 04]...",
      "Predictive model v4.2 validation successful."
    ];

    const interval = setInterval(() => {
      const newEvent = events[Math.floor(Math.random() * events.length)];
      const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
      setLogs(prev => [`[${timestamp}] ${newEvent}`, ...prev].slice(0, 8));
      
      // Update chart data
      setChartData(prev => {
        const next = [...prev.slice(1), Math.floor(Math.random() * 60) + 20];
        return next;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-off-white selection:bg-carbon selection:text-white font-sans pb-10 flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32">
        <div className="container mx-auto px-6 mb-8">
            <Breadcrumbs />
        </div>

        {/* Cinematic Hero */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-6xl">
            <span className="text-swiss-red font-mono text-xs font-bold uppercase tracking-widest mb-6 block">03 — Intelligence</span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.9] text-carbon mb-16">
              NEURAL<br/>COMMAND.
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end border-t border-gray-200 pt-12">
                <div className="lg:col-span-5">
                    <p className="text-xl md:text-2xl text-gray-600 font-sans leading-relaxed">
                        Access our central nervous system. A live view into the cognitive architectures powering the next generation of enterprise software.
                    </p>
                </div>
                <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <div className="text-3xl font-display font-bold text-carbon mb-1">4.2ms</div>
                        <div className="text-xs font-mono uppercase tracking-widest text-gray-400">Avg Latency</div>
                    </div>
                    <div>
                        <div className="text-3xl font-display font-bold text-carbon mb-1">99.9%</div>
                        <div className="text-xs font-mono uppercase tracking-widest text-gray-400">Uptime</div>
                    </div>
                    <div>
                        <div className="text-3xl font-display font-bold text-carbon mb-1">128k</div>
                        <div className="text-xs font-mono uppercase tracking-widest text-gray-400">Context Window</div>
                    </div>
                    <div>
                        <div className="text-3xl font-display font-bold text-carbon mb-1">2.4B</div>
                        <div className="text-xs font-mono uppercase tracking-widest text-gray-400">Tokens Processed</div>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* The Dashboard (Glassmorphic Dark Mode Contrast) */}
        <section className="container mx-auto px-6 mb-32">
            <div className="bg-carbon rounded-sm shadow-2xl overflow-hidden relative border border-gray-800 text-white">
                {/* Dashboard Header */}
                <div className="border-b border-gray-800 p-6 flex justify-between items-center bg-white/5 backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20" />
                        </div>
                        <span className="font-mono text-xs uppercase tracking-widest text-gray-400">Sys_Monitor_v4.0</span>
                    </div>
                    <div className="flex gap-6">
                        <button 
                            onClick={() => setActiveTab('telemetry')}
                            className={`text-xs font-bold uppercase tracking-widest transition-colors ${activeTab === 'telemetry' ? 'text-swiss-red' : 'text-gray-500 hover:text-white'}`}
                        >
                            Telemetry
                        </button>
                        <button 
                            onClick={() => setActiveTab('feed')}
                            className={`text-xs font-bold uppercase tracking-widest transition-colors ${activeTab === 'feed' ? 'text-swiss-red' : 'text-gray-500 hover:text-white'}`}
                        >
                            Live Logs
                        </button>
                    </div>
                </div>

                {/* Dashboard Body */}
                <div className="p-8 md:p-12 min-h-[500px] relative">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                    
                    {activeTab === 'telemetry' ? (
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Chart Area */}
                            <div className="lg:col-span-2 bg-black/40 border border-white/10 p-6 rounded-sm">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="font-mono text-xs uppercase tracking-widest text-gray-400 flex items-center gap-2">
                                        <Activity className="w-4 h-4" /> Token Velocity
                                    </h3>
                                    <span className="text-green-500 text-xs font-bold">+12% Peak</span>
                                </div>
                                <div className="flex items-end gap-1 h-64 w-full">
                                    {chartData.map((h, i) => (
                                        <div 
                                            key={i} 
                                            className="flex-1 bg-swiss-red/50 hover:bg-swiss-red transition-all duration-300" 
                                            style={{ height: `${h}%` }} 
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Metrics Column */}
                            <div className="space-y-4">
                                <div className="bg-black/40 border border-white/10 p-6 rounded-sm flex items-center justify-between">
                                    <div>
                                        <div className="text-gray-400 text-xs font-mono uppercase mb-1">Active Agents</div>
                                        <div className="text-2xl font-display font-bold">842</div>
                                    </div>
                                    <Cpu className="w-6 h-6 text-gray-600" />
                                </div>
                                <div className="bg-black/40 border border-white/10 p-6 rounded-sm flex items-center justify-between">
                                    <div>
                                        <div className="text-gray-400 text-xs font-mono uppercase mb-1">Vector Index</div>
                                        <div className="text-2xl font-display font-bold">40.2GB</div>
                                    </div>
                                    <Database className="w-6 h-6 text-gray-600" />
                                </div>
                                <div className="bg-black/40 border border-white/10 p-6 rounded-sm flex items-center justify-between">
                                    <div>
                                        <div className="text-gray-400 text-xs font-mono uppercase mb-1">API Health</div>
                                        <div className="text-2xl font-display font-bold text-green-500">100%</div>
                                    </div>
                                    <Server className="w-6 h-6 text-green-900" />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="relative z-10 font-mono text-xs md:text-sm leading-relaxed space-y-3 h-[400px] overflow-y-auto pr-4 scrollbar-hide">
                            {logs.map((log, idx) => (
                                <div key={idx} className="flex gap-4 opacity-0 animate-fade-in border-b border-white/5 pb-2">
                                    <span className="text-gray-600 shrink-0 w-4">➜</span>
                                    <span className="text-gray-300 font-light">{log}</span>
                                </div>
                            ))}
                            <div className="animate-pulse text-swiss-red mt-4 pl-8">_</div>
                        </div>
                    )}
                </div>
            </div>
        </section>

        {/* Core Engines (High Contrast Light Mode Cards) */}
        <section className="container mx-auto px-6 mb-24">
            <div className="mb-16 max-w-2xl">
                <h2 className="text-4xl font-display font-medium mb-6 text-carbon">The Intelligence Stack.</h2>
                <p className="text-gray-500 text-lg leading-relaxed">
                    Our proprietary suite of cognitive engines. Designed to be modular, scalable, and model-agnostic.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Engine 1 */}
                <div className="group bg-white border border-gray-200 p-10 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Cpu className="w-24 h-24 text-carbon" />
                    </div>
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-carbon text-white flex items-center justify-center rounded-full mb-8 group-hover:bg-swiss-red transition-colors">
                            <GitBranch className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-display font-bold mb-4">Foresight Engine</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8 h-20">
                            Generative strategy modeling. Predict market shifts before they happen using multi-modal data synthesis and probabilistic reasoning.
                        </p>
                        <div className="pt-8 border-t border-gray-100">
                            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-carbon group-hover:text-swiss-red transition-colors cursor-pointer">
                                Access Module <ArrowRight className="w-3 h-3" />
                            </span>
                        </div>
                    </div>
                </div>

                {/* Engine 2 */}
                <div className="group bg-white border border-gray-200 p-10 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Database className="w-24 h-24 text-carbon" />
                    </div>
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-carbon text-white flex items-center justify-center rounded-full mb-8 group-hover:bg-swiss-red transition-colors">
                            <Network className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-display font-bold mb-4">Nexus Core</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8 h-20">
                            Cross-platform data unification. Break down silos and create a single source of truth ("The Brain") for your AI models to reference.
                        </p>
                        <div className="pt-8 border-t border-gray-100">
                            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 cursor-not-allowed">
                                Request Access <Lock className="w-3 h-3" />
                            </span>
                        </div>
                    </div>
                </div>

                {/* Engine 3 */}
                <div className="group bg-white border border-gray-200 p-10 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Zap className="w-24 h-24 text-carbon" />
                    </div>
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-carbon text-white flex items-center justify-center rounded-full mb-8 group-hover:bg-swiss-red transition-colors">
                            <Layers className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-display font-bold mb-4">Velocity</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8 h-20">
                            Rapid prototyping pipelines. Go from natural language prompt to production-grade full-stack MVP in hours, not weeks.
                        </p>
                        <div className="pt-8 border-t border-gray-100">
                            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 cursor-not-allowed">
                                Request Access <Lock className="w-3 h-3" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Live Analysis Modules */}
        <section className="bg-white border-y border-gray-200 py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="text-4xl font-display font-medium mb-4 text-carbon">Live Micro-Services.</h2>
                        <p className="text-gray-500">Deployable cognitive tasks for specific workflows.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Service 1 */}
                    <div className="flex flex-col gap-6">
                        <div className="border border-gray-200 p-8 hover:border-swiss-red transition-colors group bg-gray-50">
                            <div className="flex justify-between items-start mb-6">
                                <Search className="w-8 h-8 text-carbon group-hover:text-swiss-red transition-colors" />
                                <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-[10px] font-bold uppercase">Active</div>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Vector Search</h3>
                            <p className="text-sm text-gray-500 mb-6">Semantic retrieval for enterprise knowledge bases. Finds concepts, not just keywords.</p>
                            
                            {/* Visualization */}
                            <div className="space-y-2">
                                <div className="flex justify-between text-[10px] font-mono text-gray-400">
                                    <span>Query Processing</span>
                                    <span>12ms</span>
                                </div>
                                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-carbon w-[12%] group-hover:bg-swiss-red transition-colors duration-500" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className="flex flex-col gap-6">
                        <div className="border border-gray-200 p-8 hover:border-swiss-red transition-colors group bg-gray-50">
                            <div className="flex justify-between items-start mb-6">
                                <BarChart3 className="w-8 h-8 text-carbon group-hover:text-swiss-red transition-colors" />
                                <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-[10px] font-bold uppercase">Active</div>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Predictive Models</h3>
                            <p className="text-sm text-gray-500 mb-6">Churn prediction and revenue forecasting using ensemble methods.</p>
                            
                            {/* Visualization */}
                            <div className="space-y-2">
                                <div className="flex justify-between text-[10px] font-mono text-gray-400">
                                    <span>Confidence Score</span>
                                    <span>94.2%</span>
                                </div>
                                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-carbon w-[94%] group-hover:bg-swiss-red transition-colors duration-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="bg-carbon text-white py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="container mx-auto px-6 relative z-10 text-center">
                <Shield className="w-12 h-12 text-swiss-red mx-auto mb-8" />
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
                    SECURE YOUR<br/>FUTURE.
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
                    Enterprise-grade security. SOC2 Type II compliant infrastructure. 
                    Schedule a technical deep dive with our AI Architects.
                </p>
                <a href="/#/contact" className="inline-flex items-center gap-3 border-b-2 border-white pb-1 text-2xl font-display hover:text-swiss-red hover:border-swiss-red transition-all">
                    Initiate Architecture Review
                </a>
            </div>
        </section>

      </main>
      
      <Footer />
      <StatusBar />
    </div>
  );
};

export default IntelligencePage;
