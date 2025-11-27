
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StatusBar from '../components/StatusBar';
import Breadcrumbs from '../components/Breadcrumbs';
import { BrainCircuit, Database, Bot, Cpu, ArrowRight, Layers, Network, MessageSquare, FileText, Search, Zap, Check } from 'lucide-react';

const AiSolutionsPage: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<'rag' | 'agent' | 'vision'>('rag');
  const [simulationStep, setSimulationStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  // Simulation Logic
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isSimulating) {
      if (simulationStep < 4) {
        timer = setTimeout(() => {
          setSimulationStep(prev => prev + 1);
        }, 1200);
      } else {
        setIsSimulating(false);
      }
    }
    return () => clearTimeout(timer);
  }, [isSimulating, simulationStep]);

  const startSimulation = (demo: 'rag' | 'agent' | 'vision') => {
    setActiveDemo(demo);
    setSimulationStep(0);
    setIsSimulating(true);
  };

  const demos = {
    rag: {
      title: "Enterprise Knowledge Retrieval (RAG)",
      desc: "Retrieval-Augmented Generation turns your static documents into a dynamic brain. We index your PDFs, Notion, and Jira into a vector database, allowing LLMs to answer questions with citation-backed accuracy.",
      steps: [
        { label: "Ingestion", icon: <FileText className="w-4 h-4" />, desc: "Parsing unstructred data" },
        { label: "Vectorization", icon: <Database className="w-4 h-4" />, desc: "Generating embeddings (OpenAI/Cohere)" },
        { label: "Semantic Search", icon: <Search className="w-4 h-4" />, desc: "Retrieving relevant context chunks" },
        { label: "Synthesis", icon: <BrainCircuit className="w-4 h-4" />, desc: "LLM generating citation-backed answer" },
        { label: "Output", icon: <MessageSquare className="w-4 h-4" />, desc: "Delivered to Slack/Web/API" },
      ]
    },
    agent: {
      title: "Autonomous Agent Swarms",
      desc: "Beyond chatbots. We build agentic workflows where AI models can plan, reason, use tools (Browse, Email, SQL), and execute complex multi-step tasks without human intervention.",
      steps: [
        { label: "Objective", icon: <Zap className="w-4 h-4" />, desc: "User defines high-level goal" },
        { label: "Reasoning", icon: <Cpu className="w-4 h-4" />, desc: "Agent breaks down task (CoT)" },
        { label: "Tool Use", icon: <Network className="w-4 h-4" />, desc: "Calling APIs (CRM, Email, Calendar)" },
        { label: "Execution", icon: <Layers className="w-4 h-4" />, desc: "Performing actions in parallel" },
        { label: "Result", icon: <Check className="w-4 h-4" />, desc: "Task completion verified" },
      ]
    },
    vision: {
      title: "Predictive Computer Vision",
      desc: "Eyes for your infrastructure. Using YOLO and custom CNNs, we analyze video feeds in real-time to detect anomalies, track inventory, or ensure safety compliance.",
      steps: [
        { label: "Input Stream", icon: <Zap className="w-4 h-4" />, desc: "RTMP/RTSP Video Feed" },
        { label: "Frame Processing", icon: <Layers className="w-4 h-4" />, desc: "Normalization & Segmentation" },
        { label: "Inference", icon: <BrainCircuit className="w-4 h-4" />, desc: "Object Detection Model" },
        { label: "Logic Layer", icon: <Cpu className="w-4 h-4" />, desc: "Business rules application" },
        { label: "Alerting", icon: <Zap className="w-4 h-4" />, desc: "Real-time notification dispatched" },
      ]
    }
  };

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
            <span className="text-swiss-red font-mono text-xs font-bold uppercase tracking-widest mb-6 block">Intelligence // 02</span>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] text-carbon mb-12">
              SYNTHETIC<br/>COGNITION.
            </h1>
            <div className="flex flex-col md:flex-row gap-12 items-start border-t border-gray-200 pt-12">
                <p className="text-xl md:text-2xl text-gray-600 font-sans leading-relaxed max-w-2xl">
                    We move beyond simple "Chat with PDF" wrappers. We engineer enterprise-grade neural architectures 
                    that integrate deep into your operational stack, transforming raw data into autonomous action.
                </p>
            </div>
          </div>
        </section>

        {/* Interactive Architecture Lab */}
        <section className="bg-carbon text-white py-24 mb-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">
                    
                    {/* Controls */}
                    <div className="lg:w-1/3 space-y-12">
                        <div>
                            <h2 className="text-3xl font-display font-medium mb-4">Architecture Lab.</h2>
                            <p className="text-gray-400 leading-relaxed">
                                Select a neural pattern to visualize the data flow and processing logic.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <button 
                                onClick={() => startSimulation('rag')}
                                className={`w-full text-left p-6 border transition-all duration-300 group ${activeDemo === 'rag' ? 'bg-swiss-red border-swiss-red text-white' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-display text-xl">Knowledge Retrieval</h3>
                                    <Database className="w-5 h-5 opacity-50" />
                                </div>
                                <p className={`text-sm ${activeDemo === 'rag' ? 'text-white/80' : 'text-gray-500'}`}>Unstructured Data → Vector DB → LLM Context</p>
                            </button>

                            <button 
                                onClick={() => startSimulation('agent')}
                                className={`w-full text-left p-6 border transition-all duration-300 group ${activeDemo === 'agent' ? 'bg-swiss-red border-swiss-red text-white' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-display text-xl">Autonomous Agents</h3>
                                    <Bot className="w-5 h-5 opacity-50" />
                                </div>
                                <p className={`text-sm ${activeDemo === 'agent' ? 'text-white/80' : 'text-gray-500'}`}>Goal → Reasoning → Tool Execution → Result</p>
                            </button>

                            <button 
                                onClick={() => startSimulation('vision')}
                                className={`w-full text-left p-6 border transition-all duration-300 group ${activeDemo === 'vision' ? 'bg-swiss-red border-swiss-red text-white' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-display text-xl">Predictive Vision</h3>
                                    <Cpu className="w-5 h-5 opacity-50" />
                                </div>
                                <p className={`text-sm ${activeDemo === 'vision' ? 'text-white/80' : 'text-gray-500'}`}>Video Feed → Inference → Anomaly Detection</p>
                            </button>
                        </div>
                    </div>

                    {/* Visualization Stage */}
                    <div className="lg:w-2/3 bg-black border border-white/10 p-8 md:p-12 relative min-h-[600px] flex flex-col">
                        <div className="absolute top-4 right-4 flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20" />
                        </div>
                        
                        <div className="mb-12">
                            <span className="font-mono text-xs uppercase tracking-widest text-swiss-red mb-2 block">System Simulation</span>
                            <h3 className="text-2xl font-display text-white">{demos[activeDemo].title}</h3>
                            <p className="text-gray-400 mt-4 max-w-xl">{demos[activeDemo].desc}</p>
                        </div>

                        {/* Pipeline Visualization */}
                        <div className="flex-1 flex flex-col justify-between relative">
                            {/* Connecting Line Background */}
                            <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-gray-800 z-0" />

                            {demos[activeDemo].steps.map((step, idx) => {
                                const isActive = idx === simulationStep;
                                const isCompleted = idx < simulationStep;
                                
                                return (
                                    <div key={idx} className={`relative z-10 flex items-center gap-6 transition-all duration-500 ${isActive || isCompleted ? 'opacity-100' : 'opacity-30'}`}>
                                        {/* Status Node */}
                                        <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                                            isActive ? 'bg-swiss-red border-swiss-red text-white scale-110 shadow-[0_0_20px_rgba(255,46,0,0.5)]' :
                                            isCompleted ? 'bg-black border-swiss-red text-swiss-red' :
                                            'bg-black border-gray-700 text-gray-700'
                                        }`}>
                                            {isCompleted ? <Check className="w-5 h-5" /> : step.icon}
                                        </div>

                                        {/* Content */}
                                        <div className={`flex-1 p-4 border transition-all duration-500 ${isActive ? 'bg-white/10 border-white/20' : 'bg-transparent border-transparent'}`}>
                                            <h4 className={`font-mono text-sm uppercase tracking-widest mb-1 ${isActive ? 'text-white' : 'text-gray-500'}`}>{step.label}</h4>
                                            <p className="text-xs text-gray-400">{step.desc}</p>
                                        </div>

                                        {/* Active Indicator Pulse */}
                                        {isActive && (
                                            <div className="w-2 h-2 bg-swiss-red rounded-full animate-ping absolute left-[21px]" />
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {!isSimulating && simulationStep === 5 && (
                             <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center animate-fade-in z-20">
                                 <div className="text-center">
                                     <h4 className="text-2xl font-display text-white mb-2">Simulation Complete</h4>
                                     <button onClick={() => startSimulation(activeDemo)} className="text-swiss-red font-mono text-xs uppercase tracking-widest border-b border-swiss-red hover:text-white hover:border-white transition-colors">Re-run Sequence</button>
                                 </div>
                             </div>
                        )}
                        
                        {!isSimulating && simulationStep === 0 && (
                             <button 
                                onClick={() => startSimulation(activeDemo)}
                                className="absolute bottom-8 right-8 bg-swiss-red text-white px-6 py-3 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-carbon transition-colors"
                             >
                                Run Simulation
                             </button>
                        )}
                    </div>
                </div>
            </div>
        </section>

        {/* Tech Stack Marquee */}
        <section className="bg-white py-12 border-b border-gray-200 overflow-hidden">
            <div className="container mx-auto px-6 mb-8 text-center">
                <span className="font-mono text-xs uppercase tracking-widest text-gray-400">Powered By Best-in-Class Infrastructure</span>
            </div>
            <div className="w-full overflow-hidden flex">
                <div className="whitespace-nowrap animate-marquee flex gap-16 items-center min-w-full pl-16">
                    {["OpenAI", "Anthropic", "Pinecone", "LangChain", "HuggingFace", "NVIDIA", "PyTorch", "Weights & Biases"].map((tech, i) => (
                        <span key={i} className="text-2xl font-display font-bold text-gray-300 uppercase">
                            {tech}
                        </span>
                    ))}
                     {["OpenAI", "Anthropic", "Pinecone", "LangChain", "HuggingFace", "NVIDIA", "PyTorch", "Weights & Biases"].map((tech, i) => (
                        <span key={`dup-${i}`} className="text-2xl font-display font-bold text-gray-300 uppercase">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>

        {/* Capabilities Grid */}
        <section className="container mx-auto px-6 py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
                <div className="bg-white p-12 group hover:bg-carbon hover:text-white transition-colors duration-300 md:col-span-2">
                    <BrainCircuit className="w-10 h-10 mb-8 text-swiss-red" />
                    <h3 className="text-3xl font-display font-medium mb-4">Custom LLM Fine-Tuning</h3>
                    <p className="text-gray-500 group-hover:text-gray-400 text-lg leading-relaxed max-w-2xl">
                        Off-the-shelf models are generalists. We fine-tune Llama 3, Mistral, and GPT-4 on your proprietary datasets 
                        to create domain-expert models that understand your specific nomenclature, compliance rules, and brand voice.
                    </p>
                </div>
                <div className="bg-white p-12 group hover:bg-carbon hover:text-white transition-colors duration-300">
                    <Database className="w-10 h-10 mb-8 text-swiss-red" />
                    <h3 className="text-2xl font-display font-medium mb-4">Vector Search</h3>
                    <p className="text-gray-500 group-hover:text-gray-400 leading-relaxed">
                        High-dimensional semantic search engines that allow your systems to find "concepts" not just keywords.
                    </p>
                </div>
                <div className="bg-white p-12 group hover:bg-carbon hover:text-white transition-colors duration-300">
                    <Bot className="w-10 h-10 mb-8 text-swiss-red" />
                    <h3 className="text-2xl font-display font-medium mb-4">Multi-Agent Swarms</h3>
                    <p className="text-gray-500 group-hover:text-gray-400 leading-relaxed">
                        Orchestrating teams of specialized AI agents (Coder, Critic, Manager) to solve complex problems autonomously.
                    </p>
                </div>
                <div className="bg-white p-12 group hover:bg-carbon hover:text-white transition-colors duration-300 md:col-span-2">
                    <Layers className="w-10 h-10 mb-8 text-swiss-red" />
                    <h3 className="text-3xl font-display font-medium mb-4">Generative UI (GenUI)</h3>
                    <p className="text-gray-500 group-hover:text-gray-400 text-lg leading-relaxed max-w-2xl">
                        Moving beyond text-based chat. We build interfaces where the AI generates bespoke UI components 
                        (charts, forms, dashboards) on the fly based on the user's conversation context.
                    </p>
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="bg-carbon text-white py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
                    DEPLOY INTELLIGENCE.
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
                    Schedule a technical deep dive with our AI Architects.
                </p>
                <a href="/#contact" className="inline-flex items-center gap-3 border-b-2 border-white pb-1 text-2xl font-display hover:text-swiss-red hover:border-swiss-red transition-all">
                    Start Architecture Review
                </a>
            </div>
        </section>

      </main>
      
      <Footer />
      <StatusBar />
    </div>
  );
};

export default AiSolutionsPage;
