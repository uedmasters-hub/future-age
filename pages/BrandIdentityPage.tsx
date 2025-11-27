
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StatusBar from '../components/StatusBar';
import Breadcrumbs from '../components/Breadcrumbs';
import { Fingerprint, PenTool, Type, Mic2, Layers, BookOpen, ArrowRight, Palette } from 'lucide-react';

const BrandIdentityPage: React.FC = () => {
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
            <span className="text-swiss-red font-mono text-xs font-bold uppercase tracking-widest mb-6 block">Identity // 04</span>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] text-carbon mb-12">
              VISUAL<br/>NARRATIVES.
            </h1>
            <div className="flex flex-col md:flex-row gap-12 items-start border-t border-gray-200 pt-12">
                <p className="text-xl md:text-2xl text-gray-600 font-sans leading-relaxed max-w-2xl">
                    A brand is not just a logo. It is a pattern of behavior. 
                    We engineer coherent visual and verbal systems that cut through the noise 
                    and build subconscious trust with your audience.
                </p>
            </div>
          </div>
        </section>

        {/* Philosophy Section - High Contrast */}
        <section className="bg-carbon text-white py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-medium mb-8 leading-tight">
                            We don't design for preference.<br/>
                            We design for <span className="text-swiss-red">performance.</span>
                        </h2>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <span className="font-mono text-swiss-red text-xl">01</span>
                                <div>
                                    <h3 className="font-display text-2xl mb-2">Strategic Anchoring</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                                        Before we draw a single pixel, we define the strategic core. Who are you? Who needs to know? Why should they care?
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <span className="font-mono text-swiss-red text-xl">02</span>
                                <div>
                                    <h3 className="font-display text-2xl mb-2">Atomic Consistency</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                                        We build atomic design systems, not just style guides. Every touchpoint, from favicon to billboard, sings in the same key.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <span className="font-mono text-swiss-red text-xl">03</span>
                                <div>
                                    <h3 className="font-display text-2xl mb-2">Future-Proofing</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                                        Trends fade. Systems endure. We create identities flexible enough to evolve but rigid enough to remain recognizable.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Abstract Visual */}
                    <div className="relative h-[600px] bg-white/5 border border-white/10 p-8 flex flex-col justify-between">
                        <div className="absolute top-0 right-0 p-4">
                            <Fingerprint className="w-12 h-12 text-swiss-red opacity-50" />
                        </div>
                        <div className="grid grid-cols-2 gap-4 h-full">
                            <div className="bg-swiss-red w-full h-full opacity-80 mix-blend-multiply" />
                            <div className="bg-white w-full h-full opacity-10" />
                            <div className="bg-white w-full h-full opacity-5" />
                            <div className="bg-carbon w-full h-full border border-white/20" />
                        </div>
                        <div className="mt-8 font-mono text-xs uppercase tracking-widest text-gray-500">
                            Fig 1.0 — Modular Identity System
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Service Grid */}
        <section className="container mx-auto px-6 py-32">
            <div className="mb-16">
                <span className="text-swiss-red font-mono text-xs font-bold uppercase tracking-widest mb-4 block">Capabilities</span>
                <h2 className="text-5xl font-display font-medium text-carbon">THE IDENTITY STACK.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
                {[
                    { title: "Brand Strategy", icon: <BookOpen />, desc: "Positioning, Archetypes, Value Proposition Canvas." },
                    { title: "Visual Identity", icon: <Palette />, desc: "Logo Design, Color Theory, Iconography Sets." },
                    { title: "Typography Systems", icon: <Type />, desc: "Custom Typefaces, Pairing, Hierarchy Rules." },
                    { title: "Verbal Identity", icon: <Mic2 />, desc: "Tone of Voice, Copywriting Guidelines, Nomenclature." },
                    { title: "Brand Architecture", icon: <Layers />, desc: "Sub-branding, Portfolio Strategy, Naming Systems." },
                    { title: "Design Systems", icon: <PenTool />, desc: "Figma Libraries, Tokenization, component kits." },
                ].map((item, idx) => (
                    <div key={idx} className="bg-white p-10 hover:bg-gray-50 transition-all duration-300 group min-h-[300px] flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-8 text-carbon group-hover:bg-swiss-red group-hover:text-white transition-colors">
                                {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-6 h-6" })}
                            </div>
                            <h3 className="text-2xl font-display font-medium mb-3">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                        <div className="pt-8 border-t border-gray-100 mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-swiss-red">
                                Learn More <ArrowRight className="w-3 h-3" />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Visual Gallery (Masonry-ish) */}
        <section className="w-full bg-white py-12">
            <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
                <h2 className="text-4xl font-display font-medium">Selected Works.</h2>
                <span className="font-mono text-xs uppercase tracking-widest text-gray-400">Archive 2023-2024</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[800px] md:h-[600px]">
                {/* Item 1 - Large Left */}
                <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-gray-100">
                    <img 
                        src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop" 
                        alt="Brand Work 1"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                    <div className="absolute bottom-0 left-0 p-8 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <h3 className="font-display text-3xl font-bold">Fintech Rebrand</h3>
                        <p className="font-mono text-xs uppercase tracking-widest mt-2">Strategy / Identity / Web</p>
                    </div>
                </div>

                {/* Item 2 - Top Right */}
                <div className="md:col-span-2 relative group overflow-hidden bg-gray-100">
                    <img 
                        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
                        alt="Brand Work 2"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                    <div className="absolute bottom-0 left-0 p-6 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <h3 className="font-display text-2xl font-bold">Neo-Bank UI Kit</h3>
                        <p className="font-mono text-xs uppercase tracking-widest mt-1">System Architecture</p>
                    </div>
                </div>

                {/* Item 3 - Bottom Mid */}
                <div className="relative group overflow-hidden bg-gray-100">
                    <img 
                        src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop" 
                        alt="Brand Work 3"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                    <div className="absolute bottom-0 left-0 p-6 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <h3 className="font-display text-xl font-bold">Editorial</h3>
                        <p className="font-mono text-xs uppercase tracking-widest mt-1">Print</p>
                    </div>
                </div>

                {/* Item 4 - Bottom Right */}
                <div className="relative group overflow-hidden bg-gray-100">
                    <img 
                        src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop" 
                        alt="Brand Work 4"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                    <div className="absolute bottom-0 left-0 p-6 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <h3 className="font-display text-xl font-bold">Packaging</h3>
                        <p className="font-mono text-xs uppercase tracking-widest mt-1">Physical</p>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 mb-24 mt-24">
          <div className="bg-carbon text-white p-12 md:p-24 text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-grid-pattern opacity-10" />
             <div className="relative z-10">
                <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8">
                  DEFINE YOUR<br/>LEGACY.
                </h2>
                <a href="/#contact" className="inline-flex items-center gap-4 bg-swiss-red text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-carbon transition-colors">
                   Start Branding <ArrowRight className="w-4 h-4" />
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

export default BrandIdentityPage;
