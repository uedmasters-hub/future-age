import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StatusBar from '../components/StatusBar';
import Breadcrumbs from '../components/Breadcrumbs';
import { Terminal, Database, Cloud, Code2, Cpu, Shield, ArrowRight, Layers, GitBranch, Zap } from 'lucide-react';

const techStack = [
  { name: "React / Next.js", category: "Frontend", icon: <Code2 className="w-5 h-5" /> },
  { name: "Node / Rust", category: "Backend", icon: <Terminal className="w-5 h-5" /> },
  { name: "PostgreSQL", category: "Database", icon: <Database className="w-5 h-5" /> },
  { name: "AWS / Google Cloud", category: "Infrastructure", icon: <Cloud className="w-5 h-5" /> },
  { name: "TensorFlow", category: "Machine Learning", icon: <Cpu className="w-5 h-5" /> },
  { name: "Enterprise Security", category: "Compliance", icon: <Shield className="w-5 h-5" /> },
];

const DevelopmentPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-off-white selection:bg-carbon selection:text-white font-sans pb-10">
      <Navbar />
      
      <main className="pt-32">
        <div className="container mx-auto px-6 mb-8">
            <Breadcrumbs />
        </div>

        {/* Page Hero */}
        <section className="container mx-auto px-6 mb-24 relative">
          <div className="max-w-4xl">
            <span className="text-swiss-red font-mono text-xs font-bold uppercase tracking-widest mb-6 block">Engineering // 01</span>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] text-carbon mb-8">
              FULL STACK<br/>ECOSYSTEMS.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-sans leading-relaxed max-w-2xl border-l-2 border-swiss-red pl-6">
              We don't just write code; we architect resilient, scalable systems designed to handle the complexity of the cognitive era.
            </p>
          </div>
        </section>

        {/* The Stack Grid */}
        <section className="bg-carbon text-white py-24 mb-24 overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
               <div className="lg:col-span-4">
                  <h2 className="text-4xl font-display font-medium mb-6">Technological<br/>Foundation.</h2>
                  <p className="text-gray-400 font-sans mb-8">
                    Our stack is opinionated but flexible. We prioritize type safety, performance, and long-term maintainability over trends.
                  </p>
               </div>
               <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {techStack.map((tech, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors group">
                       <div className="text-swiss-red mb-4 group-hover:scale-110 transition-transform origin-left">{tech.icon}</div>
                       <h3 className="font-display text-xl mb-1">{tech.name}</h3>
                       <span className="text-xs font-mono uppercase text-gray-500 tracking-widest">{tech.category}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* Service Detail Modules */}
        <section className="container mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 gap-px bg-gray-200 border border-gray-200">
             
             {/* Module 1 */}
             <div className="bg-white p-12 md:p-16 flex flex-col md:flex-row gap-12 group">
                <div className="w-full md:w-1/3">
                   <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full mb-6 group-hover:bg-swiss-red group-hover:text-white transition-colors">
                      <Layers className="w-6 h-6" />
                   </div>
                   <h3 className="text-3xl font-display font-medium mb-2">Systems Architecture</h3>
                </div>
                <div className="w-full md:w-2/3 border-l border-gray-100 pl-0 md:pl-12">
                   <p className="text-gray-600 leading-relaxed mb-6">
                     We build for scale from day one. Using microservices or modular monoliths depending on stage, we ensure your infrastructure is ready for high-concurrency and data throughput.
                   </p>
                   <ul className="space-y-2 font-mono text-xs uppercase tracking-wide text-gray-500">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-swiss-red rounded-full"/> Cloud-Native Deployment</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-swiss-red rounded-full"/> Serverless Functions</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-swiss-red rounded-full"/> Event-Driven Design</li>
                   </ul>
                </div>
             </div>

             {/* Module 2 */}
             <div className="bg-white p-12 md:p-16 flex flex-col md:flex-row gap-12 group">
                <div className="w-full md:w-1/3">
                   <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full mb-6 group-hover:bg-swiss-red group-hover:text-white transition-colors">
                      <GitBranch className="w-6 h-6" />
                   </div>
                   <h3 className="text-3xl font-display font-medium mb-2">CI/CD & Velocity</h3>
                </div>
                <div className="w-full md:w-2/3 border-l border-gray-100 pl-0 md:pl-12">
                   <p className="text-gray-600 leading-relaxed mb-6">
                     Speed is a feature. We implement rigorous automated testing and deployment pipelines that allow your team to ship multiple times a day with confidence.
                   </p>
                   <ul className="space-y-2 font-mono text-xs uppercase tracking-wide text-gray-500">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-swiss-red rounded-full"/> GitHub Actions / CircleCI</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-swiss-red rounded-full"/> Docker Containerization</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-swiss-red rounded-full"/> E2E Testing Suites</li>
                   </ul>
                </div>
             </div>

             {/* Module 3 */}
             <div className="bg-white p-12 md:p-16 flex flex-col md:flex-row gap-12 group">
                <div className="w-full md:w-1/3">
                   <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full mb-6 group-hover:bg-swiss-red group-hover:text-white transition-colors">
                      <Zap className="w-6 h-6" />
                   </div>
                   <h3 className="text-3xl font-display font-medium mb-2">Performance & SEO</h3>
                </div>
                <div className="w-full md:w-2/3 border-l border-gray-100 pl-0 md:pl-12">
                   <p className="text-gray-600 leading-relaxed mb-6">
                     We obsess over Core Web Vitals. Our frontends are optimized for sub-second loads, ensuring maximum conversion and search engine visibility.
                   </p>
                   <ul className="space-y-2 font-mono text-xs uppercase tracking-wide text-gray-500">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-swiss-red rounded-full"/> Edge Caching</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-swiss-red rounded-full"/> Image Optimization</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-swiss-red rounded-full"/> Static Site Generation</li>
                   </ul>
                </div>
             </div>

          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 mb-24">
          <div className="bg-carbon text-white p-12 md:p-24 text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-grid-pattern opacity-10" />
             <div className="relative z-10">
                <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8">
                  READY TO BUILD?
                </h2>
                <a href="/#contact" className="inline-flex items-center gap-4 bg-swiss-red text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-carbon transition-colors">
                   Start Engineering <ArrowRight className="w-4 h-4" />
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

export default DevelopmentPage;