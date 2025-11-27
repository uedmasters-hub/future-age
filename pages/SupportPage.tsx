
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StatusBar from '../components/StatusBar';
import Breadcrumbs from '../components/Breadcrumbs';
import { Search, Plus, Minus, MessageSquare, Zap, Shield, Layers, ArrowRight, FileText, Terminal } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Topics', icon: <Layers className="w-4 h-4" /> },
  { id: 'general', label: 'General', icon: <MessageSquare className="w-4 h-4" /> },
  { id: 'services', label: 'Services', icon: <Zap className="w-4 h-4" /> },
  { id: 'technical', label: 'Technical', icon: <Terminal className="w-4 h-4" /> },
  { id: 'billing', label: 'Billing & Contract', icon: <Shield className="w-4 h-4" /> },
];

const FAQS = [
  {
    category: 'general',
    question: "What makes Future Age different from a traditional agency?",
    answer: "We are not a service shop; we are a high-performance research lab. Traditional agencies focus on 'deliverables' (a website, a logo). We focus on 'architectures'—systems that learn, adapt, and generate value autonomously. Our team consists of ex-FAANG engineers and founders, not just project managers."
  },
  {
    category: 'general',
    question: "Do you work with pre-seed startups?",
    answer: "Yes. Through our Venture Advisory arm, we act as fractional co-founders for select high-potential startups. We typically look for founders with deep domain expertise who need a technical or strategic partner to reach Series A."
  },
  {
    category: 'services',
    question: "How does the 'Sprint' engagement model work?",
    answer: "Sprints are intense, 4-6 week engagements focused on a singular, high-value output (e.g., shipping an MVP, auditing your AI readiness, or rebranding). We eliminate all unnecessary meetings and bureaucracy to optimize for radical velocity."
  },
  {
    category: 'services',
    question: "Can you integrate AI into our existing legacy systems?",
    answer: "Absolutely. This is our specialty (Nexus Core). We build middleware layers that connect your legacy SQL databases or ERPs (SAP, Oracle) with modern LLM reasoning engines, allowing you to chat with your data without migrating it."
  },
  {
    category: 'technical',
    question: "What is your approach to data privacy and security?",
    answer: "We adhere to 'Privacy by Design'. We use enterprise-grade vector databases (Pinecone, Weaviate) with strict role-based access control. For sensitive use cases, we deploy open-source models (Llama 3, Mistral) within your own VPC, ensuring no data ever leaves your infrastructure."
  },
  {
    category: 'technical',
    question: "Do you build mobile apps?",
    answer: "We build Progressive Web Apps (PWAs) and React Native applications. We believe in cross-platform efficiency. Unless you are building a high-fidelity game, native code is often technical debt waiting to happen."
  },
  {
    category: 'billing',
    question: "Do you accept equity as payment?",
    answer: "For our Venture Advisory track, yes. We frequently take a hybrid compensation model (Cash + Equity) to align long-term incentives with founders. For Enterprise clients, we operate on a fixed-fee or retainer basis."
  },
  {
    category: 'billing',
    question: "What is the typical budget for a engagement?",
    answer: "Our Sprints typically start at ₹40L. Comprehensive Product Engineering or Digital Transformation partnerships often range from ₹1.5Cr to ₹5Cr+ annually depending on team size and velocity requirements."
  },
];

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const filteredFaqs = useMemo(() => {
    return FAQS.filter((faq) => {
      const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-off-white selection:bg-carbon selection:text-white font-sans pb-10 flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32">
        <div className="container mx-auto px-6 mb-8">
            <Breadcrumbs />
        </div>

        {/* Hero & Search */}
        <section className="container mx-auto px-6 mb-16">
          <div className="max-w-4xl mb-12">
            <span className="text-swiss-red font-mono text-xs font-bold uppercase tracking-widest mb-6 block">Support // 04</span>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] text-carbon mb-8">
              KNOWLEDGE<br/>BASE.
            </h1>
          </div>

          <div className="relative max-w-2xl">
            <input
                type="text"
                placeholder="Search for answers (e.g., 'Pricing', 'API', 'Security')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border-2 border-gray-200 p-6 pl-16 text-lg md:text-xl font-display focus:outline-none focus:border-swiss-red transition-colors text-carbon placeholder-gray-300"
            />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
          </div>
        </section>

        {/* Main Content Area */}
        <section className="container mx-auto px-6 mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Left: Categories */}
                <div className="lg:col-span-3">
                    <div className="sticky top-32">
                        <h4 className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-6">Categories</h4>
                        <div className="space-y-1">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => { setActiveCategory(cat.id); setExpandedIndex(null); }}
                                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all rounded-lg group ${
                                        activeCategory === cat.id 
                                        ? 'bg-carbon text-white shadow-md' 
                                        : 'text-gray-500 hover:bg-gray-100 hover:text-carbon'
                                    }`}
                                >
                                    <span className={activeCategory === cat.id ? 'text-swiss-red' : 'text-gray-400 group-hover:text-carbon'}>
                                        {cat.icon}
                                    </span>
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: FAQ List */}
                <div className="lg:col-span-8 lg:col-start-5">
                    {filteredFaqs.length > 0 ? (
                        <div className="divide-y divide-gray-200 border-t border-gray-200">
                            {filteredFaqs.map((faq, idx) => {
                                const isOpen = expandedIndex === idx;
                                return (
                                    <div key={idx} className="group">
                                        <button
                                            onClick={() => setExpandedIndex(isOpen ? null : idx)}
                                            className="w-full py-8 text-left flex justify-between items-start focus:outline-none"
                                        >
                                            <h3 className={`text-xl md:text-2xl font-display font-medium pr-8 transition-colors ${isOpen ? 'text-swiss-red' : 'text-carbon group-hover:text-gray-600'}`}>
                                                {faq.question}
                                            </h3>
                                            <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-swiss-red border-swiss-red text-white rotate-180' : 'border-gray-200 text-gray-400 group-hover:border-carbon group-hover:text-carbon'}`}>
                                                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                            </div>
                                        </button>
                                        <div 
                                            className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${isOpen ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
                                        >
                                            <p className="text-gray-600 text-lg leading-relaxed font-light max-w-2xl">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="py-24 text-center bg-gray-50 border border-dashed border-gray-200 rounded-lg">
                            <p className="text-gray-400 font-mono text-sm uppercase tracking-widest mb-4">No Data Found</p>
                            <p className="text-gray-500">Try adjusting your search or selecting a different category.</p>
                            <button 
                                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                                className="mt-6 text-swiss-red font-bold uppercase text-xs border-b border-swiss-red pb-0.5 hover:opacity-80"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>

        {/* Still Need Help? */}
        <section className="container mx-auto px-6 mb-24">
            <div className="bg-carbon text-white p-12 md:p-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                        STILL HAVE QUESTIONS?
                    </h2>
                    <p className="text-gray-400 max-w-lg mx-auto mb-12 text-lg">
                        Our architects are standing by to decode your specific requirements.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-swiss-red text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-carbon transition-colors">
                            Contact Support
                        </Link>
                        <a href="mailto:hello@futureage.ai" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-carbon transition-colors">
                            Email Us <ArrowRight className="w-4 h-4" />
                        </a>
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

export default SupportPage;
