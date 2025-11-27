import React, { useState, useEffect } from 'react';
import { Radio, Zap, Globe, Activity } from 'lucide-react';

const agencyStatuses = [
  "Analyzing User Behavior Patterns...",
  "Training Large Language Models...",
  "Optimizing Digital Experience Layers...",
  "Deploying Generative Interfaces...",
  "Synthesizing Market Intelligence...",
  "Calibrating Brand Voice Vectors...",
  "Monitoring Real-time Engagement...",
  "Compiling Strategic Insights..."
];

const techNews = [
  "INTEL: NVIDIA Blackwell GPU architecture sets new standard for trillion-parameter models.",
  "BREAKING: OpenAI releases GPT-5 developer preview with enhanced reasoning capabilities.",
  "POLICY: EU AI Act enters full enforcement phase; compliance required by Q4.",
  "SCIENCE: DeepMind AlphaFold 3 achieves breakthrough in protein interaction prediction.",
  "HARDWARE: Quantum error correction milestone reached by Google Quantum AI.",
  "MARKET: Generative AI adoption in enterprise sector hits 65% year-over-year growth."
];

const StatusBar: React.FC = () => {
  const [statusIndex, setStatusIndex] = useState(0);
  const [newsIndex, setNewsIndex] = useState(0);
  const [latency, setLatency] = useState(12);

  // Cycle Agency Status
  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % agencyStatuses.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Cycle News
  useEffect(() => {
    const interval = setInterval(() => {
      setNewsIndex((prev) => (prev + 1) % techNews.length);
    }, 8000); // Slower read time for news
    return () => clearInterval(interval);
  }, []);

  // Fluctuate Latency
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(prev => {
        const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
        return Math.max(5, Math.min(25, prev + change));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-200 h-10 z-50 flex items-center justify-between px-4 md:px-6 text-[10px] md:text-xs font-mono uppercase tracking-widest text-carbon select-none">
      
      {/* Left: Live Agency Status */}
      <div className="flex items-center gap-4 flex-1 overflow-hidden">
        <div className="flex items-center gap-2 text-swiss-red shrink-0">
          <Radio className="w-3 h-3 animate-pulse" />
          <span className="font-bold hidden md:inline">Live Status</span>
        </div>
        <div className="h-4 w-px bg-gray-300 shrink-0" />
        <div className="truncate text-gray-600 animate-fade-in w-48 md:w-auto" key={statusIndex}>
          {agencyStatuses[statusIndex]}
        </div>
      </div>

      {/* Center: Metrics (Hidden on mobile) */}
      <div className="hidden lg:flex items-center gap-6 text-gray-400">
        <div className="flex items-center gap-2">
           <Activity className="w-3 h-3" />
           <span>Latency: {latency}ms</span>
        </div>
        <div className="flex items-center gap-2">
           <Globe className="w-3 h-3" />
           <span>Region: us-east-1</span>
        </div>
      </div>

      {/* Right: News Ticker */}
      <div className="flex items-center gap-4 flex-1 justify-end pl-4 border-l border-gray-200 md:border-none ml-4 md:ml-0">
         <div className="hidden md:flex items-center gap-2 text-carbon shrink-0">
            <Zap className="w-3 h-3 fill-current" />
            <span className="font-bold">Latest Intel</span>
         </div>
         <div className="truncate text-right max-w-[200px] md:max-w-[400px] text-gray-500" key={newsIndex}>
            {techNews[newsIndex]}
         </div>
      </div>

    </div>
  );
};

export default StatusBar;