import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import BentoGrid from '../components/BentoGrid';
import ClientGrid from '../components/ClientGrid';
import TeamGrid from '../components/TeamGrid';
import FAQ from '../components/FAQ';
import AiPlayground from '../components/AiPlayground';
import Footer from '../components/Footer';
import StatusBar from '../components/StatusBar';
import ScrollIndicator from '../components/ScrollIndicator';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-off-white selection:bg-carbon selection:text-white font-sans pb-10">
      <Navbar />
      <main>
        <div id="manifesto">
          <Hero />
        </div>
        <Marquee />
        <BentoGrid />
        <ClientGrid />
        <TeamGrid />
        
        <FAQ />
        <AiPlayground />
      </main>
      <Footer />
      <StatusBar />
      <ScrollIndicator />
    </div>
  );
};

export default Home;