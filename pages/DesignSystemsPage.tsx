
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StatusBar from '../components/StatusBar';
import Breadcrumbs from '../components/Breadcrumbs';
import { Layout, Grid, Component, ArrowRight, Check, Layers, AlertCircle, FileText } from 'lucide-react';

const DesignSystemsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'foundations' | 'components' | 'patterns'>('foundations');

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
            <span className="text-swiss-red font-mono text-xs font-bold uppercase tracking-widest mb-6 block">Architecture // 03</span>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] text-carbon mb-12">
              ATOMIC<br/>SCALE.
            </h1>
            <div className="flex flex-col md:flex-row gap-12 items-start border-t border-gray-200 pt-12">
                <p className="text-xl md:text-2xl text-gray-600 font-sans leading-relaxed max-w-2xl">
                    Chaos is the default state of software. We bring order. 
                    By engineering comprehensive design systems, we bridge the gap between 
                    brand promise and product reality, ensuring consistency at infinite scale.
                </p>
            </div>
          </div>
        </section>

        {/* Interactive System Demo */}
        <section className="bg-white border-y border-gray-200 py-24 mb-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                    
                    {/* Controls */}
                    <div className="lg:w-1/3">
                        <h2 className="text-3xl font-display font-medium mb-6">The System Lab.</h2>
                        <p className="text-gray-500 mb-8 leading-relaxed">
                            A living organism of reusable components. Explore how atomic tokens assemble into complex interfaces.
                        </p>
                        
                        <div className="space-y-2">
                            {['foundations', 'components', 'patterns'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab as any)}
                                    className={`w-full text-left px-6 py-4 border font-mono text-xs uppercase tracking-widest transition-all flex justify-between items-center group ${
                                        activeTab === tab 
                                        ? 'bg-carbon text-white border-carbon' 
                                        : 'bg-white border-gray-200 text-gray-500 hover:border-carbon hover:text-carbon'
                                    }`}
                                >
                                    {tab}
                                    <ArrowRight className={`w-4 h-4 transition-opacity ${activeTab === tab ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Display Area */}
                    <div className="lg:w-2/3 bg-gray-50 border border-gray-200 p-8 md:p-12 min-h-[500px] relative overflow-hidden">
                        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                        
                        {activeTab === 'foundations' && (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
                                {/* Colors */}
                                <div className="col-span-2 md:col-span-4">
                                    <h4 className="font-mono text-xs uppercase text-gray-400 mb-4">01. Color Tokens</h4>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div className="aspect-square bg-swiss-red p-4 flex items-end text-white font-mono text-xs">Swiss Red</div>
                                        <div className="aspect-square bg-carbon p-4 flex items-end text-white font-mono text-xs">Carbon</div>
                                        <div className="aspect-square bg-gray-200 p-4 flex items-end text-carbon font-mono text-xs">Fog</div>
                                        <div className="aspect-square bg-white border border-gray-200 p-4 flex items-end text-carbon font-mono text-xs">Paper</div>
                                    </div>
                                </div>
                                {/* Typography */}
                                <div className="col-span-2 md:col-span-4">
                                    <h4 className="font-mono text-xs uppercase text-gray-400 mb-4">02. Typography Scale</h4>
                                    <div className="space-y-4">
                                        <div className="text-5xl font-display font-bold">Display XL</div>
                                        <div className="text-3xl font-display font-medium">Heading L</div>
                                        <div className="text-xl font-sans">Body Text Regular</div>
                                        <div className="text-xs font-mono uppercase tracking-widest">Micro Label</div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'components' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in">
                                <div>
                                    <h4 className="font-mono text-xs uppercase text-gray-400 mb-4">01. Interactive Elements</h4>
                                    <div className="space-y-4">
                                        <button className="w-full bg-carbon text-white py-3 font-bold uppercase tracking-widest text-xs hover:bg-swiss-red transition-colors">
                                            Primary Action
                                        </button>
                                        <button className="w-full bg-white border border-gray-200 text-carbon py-3 font-bold uppercase tracking-widest text-xs hover:border-carbon transition-colors">
                                            Secondary Action
                                        </button>
                                        <div className="flex items-center gap-2">
                                            <div className="w-10 h-6 bg-swiss-red rounded-full relative cursor-pointer">
                                                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                                            </div>
                                            <span className="text-xs font-mono">Toggle State: ON</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-mono text-xs uppercase text-gray-400 mb-4">02. Input Fields</h4>
                                    <div className="space-y-4">
                                        <input type="text" placeholder="Default Input" className="w-full bg-white border-b-2 border-gray-200 p-3 text-sm focus:border-swiss-red outline-none" />
                                        <input type="text" value="Active State" readOnly className="w-full bg-white border-b-2 border-carbon p-3 text-sm outline-none" />
                                        <div className="flex items-center gap-2 text-green-600 text-xs font-mono">
                                            <Check className="w-3 h-3" /> Validation Success
                                        </div>
                                    </div>
                                </div>
                                
                                {/* New 03. Status Indicators */}
                                <div>
                                    <h4 className="font-mono text-xs uppercase text-gray-400 mb-4">03. Status Indicators</h4>
                                    <div className="flex flex-wrap gap-3">
                                        <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-bold uppercase tracking-wide">Active</span>
                                        <span className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-[10px] font-bold uppercase tracking-wide">Pending</span>
                                        <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-700 rounded-full text-[10px] font-bold uppercase tracking-wide">Error</span>
                                        <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold uppercase tracking-wide">Beta</span>
                                        <span className="inline-flex items-center px-3 py-1 border border-gray-200 text-gray-500 rounded-full text-[10px] font-bold uppercase tracking-wide">Offline</span>
                                    </div>
                                </div>

                                {/* New 04. Visual Feedback */}
                                <div>
                                    <h4 className="font-mono text-xs uppercase text-gray-400 mb-4">04. Visual Feedback</h4>
                                    <div className="space-y-6">
                                        {/* Progress Bar */}
                                        <div className="w-full">
                                            <div className="flex justify-between text-[10px] font-mono text-gray-500 mb-1">
                                                <span>Loading Assets</span>
                                                <span>75%</span>
                                            </div>
                                            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                                <div className="bg-swiss-red h-full w-3/4" />
                                            </div>
                                        </div>
                                        {/* Spinner */}
                                        <div className="flex items-center gap-4">
                                             <div className="w-6 h-6 border-2 border-gray-200 border-t-swiss-red rounded-full animate-spin" />
                                             <span className="text-xs font-mono text-gray-400">Processing...</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'patterns' && (
                            <div className="space-y-12 animate-fade-in">
                                {/* 01. Card Component */}
                                <div>
                                    <h4 className="font-mono text-xs uppercase text-gray-400 mb-4">01. Card Component</h4>
                                    <div className="bg-white p-6 border border-gray-200 shadow-sm max-w-sm">
                                        <div className="w-8 h-8 bg-gray-100 rounded-full mb-4" />
                                        <h3 className="font-display text-xl mb-2">Modular Unit</h3>
                                        <p className="text-sm text-gray-500 mb-4">A standard container for grouping related content within a larger layout.</p>
                                        <div className="text-xs font-bold uppercase tracking-widest text-swiss-red">Action -></div>
                                    </div>
                                </div>

                                {/* 02. Data Table */}
                                <div>
                                    <h4 className="font-mono text-xs uppercase text-gray-400 mb-4">02. Data Density</h4>
                                    <div className="w-full overflow-x-auto border border-gray-200 bg-white">
                                        <table className="w-full text-left text-sm">
                                            <thead className="bg-gray-50 border-b border-gray-200 font-mono text-xs uppercase text-gray-500">
                                                <tr>
                                                    <th className="p-4">ID</th>
                                                    <th className="p-4">Status</th>
                                                    <th className="p-4">User</th>
                                                    <th className="p-4 text-right">Value</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100">
                                                <tr className="group hover:bg-gray-50 transition-colors">
                                                    <td className="p-4 font-mono">#1024</td>
                                                    <td className="p-4"><span className="inline-flex items-center gap-1.5 px-2 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-bold uppercase tracking-wide"><div className="w-1 h-1 bg-green-500 rounded-full"/>Active</span></td>
                                                    <td className="p-4">Alex D.</td>
                                                    <td className="p-4 text-right font-mono">₹1,95,000</td>
                                                </tr>
                                                <tr className="group hover:bg-gray-50 transition-colors">
                                                    <td className="p-4 font-mono">#1025</td>
                                                    <td className="p-4"><span className="inline-flex items-center gap-1.5 px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-[10px] font-bold uppercase tracking-wide"><div className="w-1 h-1 bg-yellow-500 rounded-full"/>Pending</span></td>
                                                    <td className="p-4">Sarah M.</td>
                                                    <td className="p-4 text-right font-mono">₹78,000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* 03. Notification Toast */}
                                    <div>
                                        <h4 className="font-mono text-xs uppercase text-gray-400 mb-4">03. Notification Toast</h4>
                                        <div className="bg-white border-l-4 border-swiss-red shadow-md p-4 flex items-start gap-4 max-w-sm">
                                            <div className="mt-1 text-swiss-red"><Check className="w-4 h-4" /></div>
                                            <div>
                                                <h5 className="font-bold text-sm text-carbon">System Updated</h5>
                                                <p className="text-xs text-gray-500 mt-1">The latest patch has been deployed successfully to the production environment.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 04. Empty State */}
                                    <div>
                                        <h4 className="font-mono text-xs uppercase text-gray-400 mb-4">04. Empty State</h4>
                                        <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 flex flex-col items-center justify-center text-center bg-gray-50/50 h-[140px]">
                                            <Layers className="w-6 h-6 text-gray-300 mb-3" />
                                            <span className="text-sm font-medium text-gray-500">No Components Found</span>
                                            <span className="text-xs text-gray-400 mt-1">Create a new item to get started.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-6 mb-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
                <div className="bg-white p-10 group hover:bg-carbon hover:text-white transition-colors duration-300">
                    <Layout className="w-8 h-8 mb-6 text-swiss-red" />
                    <h3 className="text-2xl font-display font-medium mb-4">Figma <br/>Orchestration</h3>
                    <p className="text-sm text-gray-500 group-hover:text-gray-400">
                        We build pixel-perfect Figma libraries with auto-layout, variants, and component properties that mirror the code.
                    </p>
                </div>
                <div className="bg-white p-10 group hover:bg-carbon hover:text-white transition-colors duration-300">
                    <Component className="w-8 h-8 mb-6 text-swiss-red" />
                    <h3 className="text-2xl font-display font-medium mb-4">React <br/>Component Kits</h3>
                    <p className="text-sm text-gray-500 group-hover:text-gray-400">
                        Headless, accessible, and strictly typed React components powered by Tailwind CSS or Styled Components.
                    </p>
                </div>
                <div className="bg-white p-10 group hover:bg-carbon hover:text-white transition-colors duration-300">
                    <Grid className="w-8 h-8 mb-6 text-swiss-red" />
                    <h3 className="text-2xl font-display font-medium mb-4">Documentation <br/>& Governance</h3>
                    <p className="text-sm text-gray-500 group-hover:text-gray-400">
                        Zero-height styleguides and Storybook deployments to ensure the system is adopted, not ignored.
                    </p>
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="bg-carbon text-white py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
                    STOP REINVENTING<br/>THE WHEEL.
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
                    Scale your product velocity by 40% with a unified design language.
                </p>
                <a href="/#contact" className="inline-flex items-center gap-3 border-b-2 border-white pb-1 text-2xl font-display hover:text-swiss-red hover:border-swiss-red transition-all">
                    Build Our System
                </a>
            </div>
        </section>

      </main>
      <Footer />
      <StatusBar />
    </div>
  );
};

export default DesignSystemsPage;
