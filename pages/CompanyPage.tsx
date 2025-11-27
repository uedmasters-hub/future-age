
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StatusBar from '../components/StatusBar';
import Breadcrumbs from '../components/Breadcrumbs';
import { Globe, Users, Building2, Award, ArrowRight, MapPin, History, Target } from 'lucide-react';

const CompanyPage: React.FC = () => {
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
            <span className="text-swiss-red font-mono text-xs font-bold uppercase tracking-widest mb-6 block">Company // 01</span>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] text-carbon mb-12">
              ARCHITECTS OF<br/>INTELLIGENCE.
            </h1>
            <div className="flex flex-col md:flex-row gap-12 items-start border-t border-gray-200 pt-12">
                <p className="text-xl md:text-2xl text-gray-600 font-sans leading-relaxed max-w-2xl">
                    Future Age is a global design and engineering consultancy dedicated to the cognitive era. 
                    We build the systems that builders use to build the future.
                </p>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="container mx-auto px-6 mb-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
                <div className="bg-white p-8 md:p-12 group hover:bg-gray-50 transition-colors">
                    <Globe className="w-6 h-6 text-gray-400 mb-4 group-hover:text-swiss-red transition-colors" />
                    <div className="text-4xl font-display font-bold mb-1">3</div>
                    <div className="font-mono text-xs uppercase tracking-widest text-gray-500">Global Hubs</div>
                </div>
                <div className="bg-white p-8 md:p-12 group hover:bg-gray-50 transition-colors">
                    <Users className="w-6 h-6 text-gray-400 mb-4 group-hover:text-swiss-red transition-colors" />
                    <div className="text-4xl font-display font-bold mb-1">45+</div>
                    <div className="font-mono text-xs uppercase tracking-widest text-gray-500">Specialists</div>
                </div>
                <div className="bg-white p-8 md:p-12 group hover:bg-gray-50 transition-colors">
                    <Building2 className="w-6 h-6 text-gray-400 mb-4 group-hover:text-swiss-red transition-colors" />
                    <div className="text-4xl font-display font-bold mb-1">₹4,000Cr</div>
                    <div className="font-mono text-xs uppercase tracking-widest text-gray-500">Client Value</div>
                </div>
                <div className="bg-white p-8 md:p-12 group hover:bg-gray-50 transition-colors">
                    <Award className="w-6 h-6 text-gray-400 mb-4 group-hover:text-swiss-red transition-colors" />
                    <div className="text-4xl font-display font-bold mb-1">12</div>
                    <div className="font-mono text-xs uppercase tracking-widest text-gray-500">Industry Awards</div>
                </div>
            </div>
        </section>

        {/* Narrative Section */}
        <section className="bg-carbon text-white py-24 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-swiss-red font-mono text-xs font-bold uppercase tracking-widest mb-6 block">Our Origin</span>
                        <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
                            BORN IN THE<br/>VALLEY.
                        </h2>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                Future Age was founded in 2023 by a collective of ex-FAANG engineers and designers who saw a widening gap: The technology was exponential, but the implementation was linear.
                            </p>
                            <p>
                                We realized that traditional agencies were too slow to adapt to Generative AI, and traditional consultancies were too detached from the code.
                            </p>
                            <p>
                                We built Future Age to be the bridge. A hybrid organism—part research lab, part venture studio, part special-forces engineering team.
                            </p>
                        </div>
                        
                        <div className="mt-12 flex flex-wrap gap-4">
                            <div className="px-4 py-2 border border-gray-700 rounded-full text-xs font-mono uppercase tracking-widest">
                                Est. San Francisco
                            </div>
                            <div className="px-4 py-2 border border-gray-700 rounded-full text-xs font-mono uppercase tracking-widest">
                                YC Alumni DNA
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[600px] bg-white/5 border border-white/10 p-2">
                        <div className="w-full h-full bg-black relative overflow-hidden">
                             <img 
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                                alt="Office Architecture" 
                                className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
                             />
                             <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black to-transparent w-full">
                                <div className="font-mono text-xs text-swiss-red mb-1">HQ // 01</div>
                                <div className="font-display text-2xl">Mission District, SF</div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Global Presence */}
        <section className="container mx-auto px-6 py-24">
            <div className="mb-16 flex flex-col md:flex-row justify-between items-end">
                <div>
                    <h2 className="text-4xl font-display font-medium mb-4">Global Nodes.</h2>
                    <p className="text-gray-500 max-w-md">
                        We operate as a distributed mesh network with physical hubs in key capital markets.
                    </p>
                </div>
                <Link to="/contact" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-carbon pb-1 hover:text-swiss-red hover:border-swiss-red transition-colors">
                    Visit a Hub <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* SF */}
                <div className="group relative h-[400px] border border-gray-200 overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2000&auto=format&fit=crop" 
                        alt="San Francisco" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    <div className="absolute top-6 left-6">
                        <div className="bg-white text-carbon px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                            Headquarters
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-8 bg-white border-t border-gray-200 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex items-center gap-2 text-swiss-red mb-2">
                            <MapPin className="w-4 h-4" />
                            <span className="font-mono text-xs font-bold uppercase">San Francisco</span>
                        </div>
                        <p className="text-sm text-gray-600">415 Mission St, CA 94105</p>
                    </div>
                </div>

                {/* NYC */}
                <div className="group relative h-[400px] border border-gray-200 overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1496442226666-8d4a0e62e6e9?q=80&w=2000&auto=format&fit=crop" 
                        alt="New York" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    <div className="absolute top-6 left-6">
                        <div className="bg-white text-carbon px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                            Studio
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-8 bg-white border-t border-gray-200 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex items-center gap-2 text-swiss-red mb-2">
                            <MapPin className="w-4 h-4" />
                            <span className="font-mono text-xs font-bold uppercase">New York</span>
                        </div>
                        <p className="text-sm text-gray-600">100 Crosby St, NY 10012</p>
                    </div>
                </div>

                {/* London */}
                <div className="group relative h-[400px] border border-gray-200 overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2000&auto=format&fit=crop" 
                        alt="London" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    <div className="absolute top-6 left-6">
                        <div className="bg-white text-carbon px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                            Lab
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-8 bg-white border-t border-gray-200 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex items-center gap-2 text-swiss-red mb-2">
                            <MapPin className="w-4 h-4" />
                            <span className="font-mono text-xs font-bold uppercase">London</span>
                        </div>
                        <p className="text-sm text-gray-600">180 Strand, WC2R 1EA</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Timeline / Evolution */}
        <section className="bg-gray-50 py-24 border-y border-gray-200">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4">
                        <span className="text-swiss-red font-mono text-xs font-bold uppercase tracking-widest mb-4 block">Evolution</span>
                        <h2 className="text-4xl font-display font-medium mb-6">The Timeline.</h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            From a stealth research lab to a global cognitive consultancy.
                        </p>
                    </div>
                    <div className="lg:col-span-8 space-y-12 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gray-200 before:content-[''] pl-12">
                        <div className="relative">
                            <div className="absolute -left-[53px] top-1 w-3 h-3 bg-swiss-red rounded-full border-4 border-gray-50" />
                            <span className="font-mono text-xs font-bold text-gray-400 mb-2 block">2023 // Q1</span>
                            <h3 className="text-xl font-bold mb-2">The Inception</h3>
                            <p className="text-gray-600 text-sm">Founded in SF. Released the first "Cognitive Architecture" whitepaper.</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[53px] top-1 w-3 h-3 bg-gray-300 rounded-full border-4 border-gray-50" />
                            <span className="font-mono text-xs font-bold text-gray-400 mb-2 block">2023 // Q3</span>
                            <h3 className="text-xl font-bold mb-2">Series A Partnerships</h3>
                            <p className="text-gray-600 text-sm">Partnered with 3 Tier-1 VC funds to provide fractional leadership for portfolio companies.</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[53px] top-1 w-3 h-3 bg-gray-300 rounded-full border-4 border-gray-50" />
                            <span className="font-mono text-xs font-bold text-gray-400 mb-2 block">2024 // Q1</span>
                            <h3 className="text-xl font-bold mb-2">Global Expansion</h3>
                            <p className="text-gray-600 text-sm">Opened London studio. Launched "Foresight Engine" beta.</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[53px] top-1 w-3 h-3 bg-gray-300 rounded-full border-4 border-gray-50" />
                            <span className="font-mono text-xs font-bold text-gray-400 mb-2 block">2024 // Q4</span>
                            <h3 className="text-xl font-bold mb-2">The Future</h3>
                            <p className="text-gray-600 text-sm">Scaling to 100+ builders. Launching proprietary Agent Swarm platform.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="bg-carbon text-white py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
                    BECOME A PARTNER.
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
                    Whether you need a sprint or a long-term transformation, we are ready to deploy.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-3 border-b-2 border-white pb-1 text-2xl font-display hover:text-swiss-red hover:border-swiss-red transition-all">
                    Initiate Project
                </Link>
            </div>
        </section>

      </main>
      
      <Footer />
      <StatusBar />
    </div>
  );
};

export default CompanyPage;
