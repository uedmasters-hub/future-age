
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StatusBar from '../components/StatusBar';
import Breadcrumbs from '../components/Breadcrumbs';
import { ArrowRight, Zap, Users, Globe, Target, Cpu, ChevronDown, Check } from 'lucide-react';

// --- Data ---

const VALUES = [
  {
    title: "Neural Velocity",
    desc: "We ship fast and learn faster. Perfection is the enemy of progress.",
    icon: <Zap className="w-5 h-5" />
  },
  {
    title: "Radical Autonomy",
    desc: "We hire adults. You own the outcome, the roadmap, and the execution.",
    icon: <Target className="w-5 h-5" />
  },
  {
    title: "First Principles",
    desc: "Don't copy. Deconstruct the problem to its core truth and build up.",
    icon: <Cpu className="w-5 h-5" />
  },
  {
    title: "Global Mesh",
    desc: "Talent is universal. We are a distributed-first, async-optimized team.",
    icon: <Globe className="w-5 h-5" />
  }
];

const JOBS = [
  {
    id: 1,
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
    salary: "₹60L - ₹1.2Cr + Equity",
    desc: "Architecting the next generation of RAG pipelines and autonomous agent frameworks.",
    tags: ["Python", "PyTorch", "LangChain"]
  },
  {
    id: 2,
    title: "Founding Product Designer",
    department: "Design",
    location: "Remote / Bengaluru",
    type: "Full-time",
    salary: "₹50L - ₹90L + Equity",
    desc: "Defining the visual language of cognitive interfaces. Systems thinking required.",
    tags: ["Figma", "Design Systems", "Prototyping"]
  },
  {
    id: 3,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote (India)",
    type: "Contract-to-Hire",
    salary: "₹40L - ₹70L",
    desc: "Building high-performance React frontends backed by Rust/Node microservices.",
    tags: ["React", "TypeScript", "Postgres"]
  },
  {
    id: 4,
    title: "Growth Strategist",
    department: "Marketing",
    location: "Mumbai / Remote",
    type: "Full-time",
    salary: "₹45L - ₹80L + Equity",
    desc: "Leading GTM strategy for our venture studio portfolio companies.",
    tags: ["SEO", "Analytics", "Copywriting"]
  }
];

const DEPARTMENTS = ["All", "Engineering", "Design", "Marketing", "Strategy"];

const CareersPage: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const filteredJobs = filter === "All" 
    ? JOBS 
    : JOBS.filter(job => job.department === filter);

  return (
    <div className="min-h-screen bg-off-white selection:bg-carbon selection:text-white font-sans pb-10 flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32">
        <div className="container mx-auto px-6 mb-8">
            <Breadcrumbs />
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-5xl">
            <span className="text-swiss-red font-mono text-xs font-bold uppercase tracking-widest mb-6 block">01 — Careers</span>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] text-carbon mb-12">
              BUILD THE<br/>COGNITIVE ERA.
            </h1>
            <div className="flex flex-col md:flex-row gap-12 items-start border-t border-gray-200 pt-12">
                <p className="text-xl text-gray-600 font-sans leading-relaxed max-w-xl">
                    We are not just an agency; we are a high-performance research lab. 
                    We are looking for builders who are obsessed with the intersection of 
                    human creativity and artificial intelligence.
                </p>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-carbon text-white flex items-center justify-center font-bold text-lg">45</div>
                        <span className="font-display text-xl">Global Team Members</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-swiss-red text-white flex items-center justify-center font-bold text-lg">∞</div>
                        <span className="font-display text-xl">Remote-First Culture</span>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Culture Grid */}
        <section className="bg-white py-24 border-y border-gray-200">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-4xl font-display font-medium mb-4">Our Operating System.</h2>
                    <p className="text-gray-500 max-w-lg">
                        We don't do politics or bureaucracy. We operate on a set of core algorithms that optimize for impact.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
                    {VALUES.map((val, idx) => (
                        <div key={idx} className="bg-white p-8 md:p-10 hover:bg-gray-50 transition-colors group h-full flex flex-col justify-between">
                            <div className="mb-8 text-gray-400 group-hover:text-swiss-red transition-colors">
                                {val.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-display font-medium mb-4">{val.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {val.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Job Board */}
        <section className="container mx-auto px-6 py-24" id="openings">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div>
                    <h2 className="text-5xl font-display font-bold mb-6">OPEN POSITIONS.</h2>
                    <div className="flex flex-wrap gap-2">
                        {DEPARTMENTS.map(dept => (
                            <button
                                key={dept}
                                onClick={() => setFilter(dept)}
                                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-all ${
                                    filter === dept 
                                    ? 'bg-carbon text-white border-carbon' 
                                    : 'bg-white border-gray-200 text-gray-500 hover:border-carbon hover:text-carbon'
                                }`}
                            >
                                {dept}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="text-right hidden md:block">
                    <p className="font-mono text-xs uppercase tracking-widest text-gray-400">
                        Showing {filteredJobs.length} Roles
                    </p>
                </div>
            </div>

            <div className="border-t border-gray-200">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job) => {
                        const isExpanded = expandedJob === job.id;
                        return (
                            <div key={job.id} className="border-b border-gray-200 group">
                                <div 
                                    onClick={() => setExpandedJob(isExpanded ? null : job.id)}
                                    className="py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:bg-white transition-colors"
                                >
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-2">
                                            <span className="font-mono text-[10px] uppercase tracking-widest text-swiss-red border border-swiss-red/20 bg-swiss-red/5 px-2 py-0.5 rounded">
                                                {job.department}
                                            </span>
                                            <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400">
                                                {job.location}
                                            </span>
                                        </div>
                                        <h3 className="text-3xl font-display font-medium group-hover:text-swiss-red transition-colors">
                                            {job.title}
                                        </h3>
                                    </div>
                                    
                                    <div className="flex items-center gap-8 mt-4 md:mt-0">
                                        <div className="text-right hidden md:block">
                                            <div className="font-mono text-xs font-bold text-carbon">{job.salary}</div>
                                            <div className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">{job.type}</div>
                                        </div>
                                        <div className={`w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 ${isExpanded ? 'bg-carbon text-white rotate-180' : 'bg-transparent text-carbon group-hover:bg-gray-100'}`}>
                                            <ChevronDown className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Expanded Content */}
                                <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${isExpanded ? 'max-h-[500px] opacity-100 pb-10' : 'max-h-0 opacity-0'}`}>
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                                        <div className="md:col-span-8">
                                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                                {job.desc}
                                            </p>
                                            <div className="mb-8">
                                                <h4 className="font-mono text-xs font-bold uppercase tracking-widest mb-4 text-carbon">Required Stack</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {job.tags.map(tag => (
                                                        <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:col-span-4 flex flex-col justify-end">
                                            <button className="w-full py-4 bg-swiss-red text-white font-bold uppercase tracking-widest text-sm hover:bg-carbon transition-colors flex items-center justify-center gap-2">
                                                Apply Now <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="py-24 text-center">
                        <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">No positions found for this department.</p>
                        <button onClick={() => setFilter("All")} className="mt-4 text-swiss-red underline text-sm font-bold">Clear Filters</button>
                    </div>
                )}
            </div>
        </section>

        {/* General Application CTA */}
        <section className="bg-carbon text-white py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
                    DON'T SEE YOUR ROLE?
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
                    We create roles for exceptional talent. If you believe you can architect the future, send us your portfolio and a manifesto.
                </p>
                <a href="mailto:careers@futureage.ai" className="inline-flex items-center gap-3 border-b-2 border-white pb-1 text-2xl font-display hover:text-swiss-red hover:border-swiss-red transition-all">
                    careers@futureage.ai
                </a>
            </div>
        </section>
        
      </main>
      
      <Footer />
      <StatusBar />
    </div>
  );
};

export default CareersPage;
