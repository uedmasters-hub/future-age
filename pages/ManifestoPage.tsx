
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StatusBar from '../components/StatusBar';
import Breadcrumbs from '../components/Breadcrumbs';
import { Quote, Zap, BrainCircuit, Fingerprint, ArrowDown, ArrowRight } from 'lucide-react';

const ManifestoPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' } // Trigger when section is in the upper middle of viewport
    );

    const sectionIds = ['cognitive-gap', 'synthetic-intuition', 'radical-velocity', 'builders-ethos'];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const tocItems = [
    { id: 'cognitive-gap', label: 'The Cognitive Gap' },
    { id: 'synthetic-intuition', label: 'Synthetic Intuition' },
    { id: 'radical-velocity', label: 'Radical Velocity' },
    { id: 'builders-ethos', label: "The Builder's Ethos" },
  ];

  return (
    <div className="min-h-screen bg-off-white selection:bg-carbon selection:text-white font-sans pb-10 flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32">
        <div className="container mx-auto px-6 mb-8">
            <Breadcrumbs />
        </div>

        {/* Hero - Enhanced */}
        <section className="container mx-auto px-6 mb-32 relative">
          {/* Abstract Background Element */}
          <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-gradient-to-b from-gray-100 to-transparent rounded-full blur-3xl -z-10 opacity-50 pointer-events-none" />
          
          <div className="max-w-6xl relative">
            <span className="text-swiss-red font-mono text-xs font-bold uppercase tracking-widest mb-8 block flex items-center gap-4"> The Vision // 05 </span>
            
            <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-display font-bold tracking-tighter leading-[0.8] text-carbon mb-20 mix-blend-multiply">
              AUTOMATION<br/>
              <span className="relative">
                IS NOT THE
                {/* Decorative line through text */}
                <span className="absolute top-1/2 left-0 w-full h-2 bg-swiss-red transform -translate-y-1/2 opacity-80"></span>
              </span><br/>
              GOAL.
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t-2 border-carbon pt-12">
                <div className="md:col-span-4">
                    <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">
                        Premise 1.0
                    </p>
                    <h3 className="text-3xl font-display font-medium leading-tight">
                        The era of static software is over.
                    </h3>
                </div>
                <div className="md:col-span-8">
                    <p className="text-2xl md:text-3xl text-gray-800 font-sans font-light leading-relaxed">
                        We believe that the integration of Artificial Intelligence is not an additive process, but a transformative one. 
                        <br/><br/>
                        We are moving from the Information Age to the <span className="font-bold bg-swiss-red text-white px-2 box-decoration-clone">Cognitive Age</span>.
                    </p>
                </div>
            </div>
          </div>
        </section>

        {/* Editorial Content - Enhanced Layout */}
        <section className="bg-white border-y border-gray-200 py-24 md:py-40 relative">
            {/* Subtle texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Sidebar - Sticky Navigation */}
                    <div className="lg:col-span-3">
                        <div className="lg:sticky lg:top-32 h-fit border-l border-gray-200 pl-8 transition-all duration-300">
                            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
                                Index
                            </h4>
                            <ul className="space-y-6 text-sm font-medium text-gray-500 font-mono">
                                {tocItems.map((item, i) => (
                                    <li 
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`cursor-pointer transition-all duration-300 flex items-center gap-3 group ${
                                            activeSection === item.id ? 'text-swiss-red translate-x-2' : 'hover:text-carbon'
                                        }`}
                                    >
                                        <span className={`text-xs font-bold transition-colors ${
                                            activeSection === item.id ? 'text-swiss-red' : 'text-gray-300 group-hover:text-gray-400'
                                        }`}>
                                            0{i+1}
                                        </span>
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                                            {item.label}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Main Text */}
                    <div className="lg:col-span-8 lg:col-start-5">
                        
                        {/* Intro Dropcap */}
                        <div className="prose prose-xl max-w-none mb-32">
                            <p className="font-display text-4xl md:text-5xl leading-tight mb-12 text-carbon indent-0">
                                <span className="text-8xl float-left mr-6 mt-[-18px] font-bold text-swiss-red font-display">M</span>
                                ost enterprises are built on dead data. Databases that only grow when a human types into them. Dashboards that look backward, never forward. Systems that wait for instructions.
                            </p>
                            
                            <p className="text-gray-600 text-xl leading-relaxed font-light">
                                At Future Age, we are architecting the antidote. We build <strong>"Living Systems"</strong>—software architectures that learn from their environment, predict user intent, and autonomously execute complex workflows. We are not interested in incremental efficiency. We are interested in exponential capability.
                            </p>
                        </div>

                        {/* 01 */}
                        <div id="cognitive-gap" className="mb-32 border-t border-gray-100 pt-16 group scroll-mt-32">
                            <div className="flex items-baseline gap-4 mb-8">
                                <span className="font-mono text-sm text-swiss-red font-bold">01</span>
                                <h3 className="text-5xl md:text-6xl font-display font-bold text-carbon group-hover:text-gray-800 transition-colors">The Cognitive Gap.</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-gray-600 leading-relaxed font-light">
                                <p>
                                    There is a widening chasm between what technology can do (Generative AI, Agents, Reasoning) and how businesses actually operate (Spreadsheets, Email, Meetings). The modern enterprise is drowning in unstructured data—PDFs, Slack threads, customer calls—that traditional software cannot parse.
                                </p>
                                <div>
                                    <p className="mb-6">
                                        Legacy systems treat data as <strong>inventory</strong> to be stored. Cognitive systems treat data as <strong>fuel</strong> to be consumed.
                                    </p>
                                    <p>
                                        Our mission is to close this gap. We don't just "implement AI" as a layer on top; we redesign the fundamental operating system.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Cinematic Quote Block */}
                        <div className="my-32 relative">
                            <div className="absolute -left-8 -top-8 text-gray-100">
                                <Quote size={120} strokeWidth={1} />
                            </div>
                            <div className="relative bg-carbon text-white p-12 md:p-16 border-l-8 border-swiss-red shadow-2xl">
                                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                                <p className="font-display text-3xl md:text-4xl italic relative z-10 leading-snug">
                                    "The definition of a modern company is one where the intellectual capital is encoded in software, not just in the heads of employees."
                                </p>
                            </div>
                        </div>

                        {/* 02 */}
                        <div id="synthetic-intuition" className="mb-32 border-t border-gray-100 pt-16 group scroll-mt-32">
                            <div className="flex items-baseline gap-4 mb-8">
                                <span className="font-mono text-sm text-swiss-red font-bold">02</span>
                                <h3 className="text-5xl md:text-6xl font-display font-bold text-carbon">Synthetic Intuition.</h3>
                            </div>
                            <div className="prose prose-lg text-gray-600 max-w-none font-light">
                                <p className="mb-8 text-xl">
                                    The first wave of AI was about conversation. The next wave is about <strong className="text-carbon font-bold">action</strong>. We are building agentic workflows where AI doesn't just talk to you—it does work for you. It provisions servers, writes code, negotiates contracts, and designs interfaces.
                                </p>
                                <p className="text-lg">
                                    Imagine a CRM that doesn't just log a lead, but researches the prospect, drafts a personalized strategy, generates a slide deck, and schedules the meeting. This isn't automation; it's augmentation. It frees human capital to focus on high-order strategy while the machine handles the high-volume execution.
                                </p>
                            </div>
                        </div>

                        {/* 03 */}
                        <div id="radical-velocity" className="mb-32 border-t border-gray-100 pt-16 group scroll-mt-32">
                            <div className="flex items-baseline gap-4 mb-8">
                                <span className="font-mono text-sm text-swiss-red font-bold">03</span>
                                <h3 className="text-5xl md:text-6xl font-display font-bold text-carbon">Radical Velocity.</h3>
                            </div>
                            <div className="bg-gray-50 p-8 border-l-2 border-carbon mb-8">
                                <p className="text-xl font-display font-medium text-carbon">
                                    In a world where the cost of intelligence is trending toward zero, the value of velocity trends toward infinity.
                                </p>
                            </div>
                            <div className="prose prose-lg text-gray-600 max-w-none font-light">
                                <p className="mb-6">
                                    Speed is the ultimate currency in the exponential age. Traditional development cycles—planning, designing, coding, testing—are too slow. We use AI to collapse these phases into a singular, continuous stream of creation.
                                </p>
                                <p>
                                    We don't wait for perfect information; we build, deploy, and iterate at the speed of thought. By utilizing LLMs for code generation and automated testing, we reduce the time-to-MVP from months to days. The companies that win will be the ones that can run the most experiments per unit of time.
                                </p>
                            </div>
                        </div>

                        {/* 04 */}
                        <div id="builders-ethos" className="mb-12 border-t border-gray-100 pt-16 group scroll-mt-32">
                            <div className="flex items-baseline gap-4 mb-8">
                                <span className="font-mono text-sm text-swiss-red font-bold">04</span>
                                <h3 className="text-5xl md:text-6xl font-display font-bold text-carbon">The Builder's Ethos.</h3>
                            </div>
                            <div className="prose prose-lg text-gray-600 max-w-none font-light">
                                <p className="mb-6 text-xl">
                                    We are not consultants who leave you with a slide deck. We are builders. We believe that the only way to predict the future is to code it. Our ethos is grounded in pragmatism, craftsmanship, and the relentless pursuit of functional beauty.
                                </p>
                                <p className="mb-6">
                                    We reject the "black box" approach. We build transparent, observable systems that you own and control. We partner with founders and leaders who are ready to dismantle the old ways and construct the new.
                                </p>
                                <p>
                                    This is not a passive journey. It requires courage to let go of legacy processes. But for those willing to leap, the cognitive era offers unbounded potential.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        {/* Principles Grid - Enhanced Aesthetics */}
        <section className="bg-carbon text-white py-40 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-carbon via-transparent to-carbon" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-24 md:text-center max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight">OUR CORE THESIS.</h2>
                    <p className="text-gray-400 text-xl font-light">
                        The axioms that guide every line of code we write and every strategy we deploy.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-800 border border-gray-800">
                    {/* Card 1 */}
                    <div className="bg-black p-12 group hover:bg-gray-900 transition-all duration-500 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
                            <span className="font-mono text-xs text-swiss-red">01</span>
                        </div>
                        <div className="w-16 h-16 rounded-full border border-gray-700 flex items-center justify-center mb-8 text-white group-hover:bg-swiss-red group-hover:border-swiss-red transition-all duration-500 group-hover:scale-110">
                            <BrainCircuit className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-swiss-red transition-colors">Intelligence is Utility</h3>
                        <p className="text-gray-500 text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                            AI should not be a novelty. It should be as invisible and reliable as electricity. If you have to "prompt" it constantly, it's not finished.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-black p-12 group hover:bg-gray-900 transition-all duration-500 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
                            <span className="font-mono text-xs text-swiss-red">02</span>
                        </div>
                        <div className="w-16 h-16 rounded-full border border-gray-700 flex items-center justify-center mb-8 text-white group-hover:bg-swiss-red group-hover:border-swiss-red transition-all duration-500 group-hover:scale-110">
                            <Zap className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-swiss-red transition-colors">Speed is a Feature</h3>
                        <p className="text-gray-500 text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                            In the exponential age, slowness is an existential threat. We optimize for velocity—rapid prototyping, fast feedback loops, and shipping daily.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-black p-12 group hover:bg-gray-900 transition-all duration-500 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
                            <span className="font-mono text-xs text-swiss-red">03</span>
                        </div>
                        <div className="w-16 h-16 rounded-full border border-gray-700 flex items-center justify-center mb-8 text-white group-hover:bg-swiss-red group-hover:border-swiss-red transition-all duration-500 group-hover:scale-110">
                            <Fingerprint className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-swiss-red transition-colors">Human at the Center</h3>
                        <p className="text-gray-500 text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                            We do not believe in replacement. We believe in augmentation. Technology should amplify human creativity, intuition, and judgment.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Sign-off / Footer CTA - Refined Hover */}
        <section className="container mx-auto px-6 py-40 text-center relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                
                <div className="flex flex-col items-center">
                    <div className="h-24 w-px bg-gradient-to-b from-transparent to-swiss-red mb-8"></div>
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-swiss-red mb-8 animate-pulse">
                        End of Transmission
                    </p>
                </div>

                <a href="/#/company/careers" className="group block relative cursor-pointer">
                    {/* Simple, high-impact color transition */}
                    <h2 className="text-7xl md:text-9xl font-display font-bold text-carbon mb-12 tracking-tighter leading-[0.8] transition-colors duration-500 group-hover:text-swiss-red">
                        JOIN THE<br/>
                        RESISTANCE.
                    </h2>
                    
                    {/* Button - Smoother ease-out-quint transition */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] translate-y-8 group-hover:translate-y-0 will-change-transform">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-carbon text-white px-8 py-4 rounded-full hover:bg-black transition-colors shadow-xl">
                            View Open Roles <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </a>

                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-200 pt-12 text-left md:text-center">
                    <div className="md:border-r border-gray-100">
                        <h4 className="font-mono text-xs uppercase text-gray-400 mb-2">Signature</h4>
                        <p className="font-display font-bold text-lg">Future Age Inc.</p>
                    </div>
                    <div className="md:border-r border-gray-100">
                        <h4 className="font-mono text-xs uppercase text-gray-400 mb-2">Timestamp</h4>
                        <p className="font-mono text-sm text-gray-600">{new Date().getFullYear()}.Q{Math.ceil((new Date().getMonth() + 1) / 3)}</p>
                    </div>
                    <div>
                        <h4 className="font-mono text-xs uppercase text-gray-400 mb-2">Hash</h4>
                        <p className="font-mono text-[10px] text-gray-500 break-all">0x7F2A...9C1</p>
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

export default ManifestoPage;
