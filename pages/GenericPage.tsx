import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StatusBar from '../components/StatusBar';
import Breadcrumbs from '../components/Breadcrumbs';

const GenericPage: React.FC = () => {
  const location = useLocation();
  
  // Extract title from path
  const pathParts = location.pathname.split('/').filter(Boolean);
  const title = pathParts[pathParts.length - 1]?.replace(/-/g, ' ') || 'Page';
  const category = pathParts[0]?.toUpperCase() || 'SECTION';

  return (
    <div className="min-h-screen bg-off-white selection:bg-carbon selection:text-white font-sans pb-10 flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 container mx-auto px-6">
        <Breadcrumbs />
        
        <div className="max-w-4xl mb-24">
          <span className="text-swiss-red font-mono text-xs font-bold uppercase tracking-widest mb-6 block">
            {category} // 01
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-[0.9] text-carbon mb-8 capitalize">
            {title}.
          </h1>
          <p className="text-xl text-gray-500 font-sans leading-relaxed max-w-2xl border-l-2 border-gray-200 pl-6">
            This module is currently under construction. Our architects are compiling the data vectors.
          </p>
        </div>

        <div className="w-full h-[400px] bg-white border border-gray-200 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="text-center">
                <div className="w-16 h-1 bg-swiss-red mx-auto mb-6 animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-widest text-gray-400">
                    System Construction In Progress
                </span>
            </div>
        </div>
      </main>
      
      <Footer />
      <StatusBar />
    </div>
  );
};

export default GenericPage;