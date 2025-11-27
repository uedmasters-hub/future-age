
import React, { useState } from 'react';
import { Sparkles, ArrowRight, Loader2, Check, Terminal, Mail, MessageSquare } from 'lucide-react';
import { LoadingState } from '../types';

const AiPlayground: React.FC = () => {
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [step, setStep] = useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    if (step === 1) {
        setStep(2);
        return;
    }

    setStatus(LoadingState.LOADING);
    
    // Simulate API call for lead capture
    setTimeout(() => {
      setStatus(LoadingState.SUCCESS);
    }, 2000);
  };

  const interests = ["AI Strategy", "Product Dev", "Venture Building", "Digital Transformation"];

  return (
    <section id="intelligence" className="py-24 bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Lead Capture Form */}
        <div>
          <div className="mb-12">
            <span className="text-swiss-red font-mono text-sm uppercase tracking-widest mb-2 block">System Access</span>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter mb-6">
              FORESIGHT<br />ENGINE.
            </h2>
            <p className="text-gray-600 text-lg font-light leading-relaxed max-w-md">
              Initialize a strategic partnership. Input your parameters to receive a tailored architectural roadmap.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="relative space-y-8">
            
            {/* Step 1: Identity */}
            <div className={`transition-all duration-500 ${step === 1 ? 'opacity-100 translate-x-0' : 'opacity-50 blur-[2px]'}`}>
                <label className="block font-mono text-xs uppercase tracking-widest text-gray-400 mb-2">01 // Identity Vector</label>
                <div className="relative group">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ENTER_EMAIL_ADDRESS_"
                        disabled={step !== 1}
                        className="w-full bg-transparent border-b-2 border-gray-200 py-4 text-xl md:text-3xl font-display focus:outline-none focus:border-swiss-red transition-colors placeholder-gray-300 text-carbon disabled:text-gray-400 disabled:border-transparent"
                    />
                    {step === 1 && email.length > 5 && (
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-swiss-red animate-pulse">
                            <div className="w-2 h-2 bg-swiss-red rounded-full" />
                        </div>
                    )}
                </div>
            </div>

            {/* Step 2: Context */}
            {step >= 2 && (
                <div className="animate-fade-in">
                    <label className="block font-mono text-xs uppercase tracking-widest text-gray-400 mb-4">02 // Target Sector</label>
                    <div className="flex flex-wrap gap-3">
                        {interests.map((item) => (
                            <button
                                key={item}
                                type="button"
                                onClick={() => setInterest(item)}
                                disabled={status === LoadingState.SUCCESS}
                                className={`px-4 py-2 border rounded-full text-xs md:text-sm font-medium uppercase tracking-wide transition-all duration-300 ${
                                    interest === item 
                                    ? 'bg-carbon text-white border-carbon' 
                                    : 'bg-white border-gray-200 text-gray-500 hover:border-carbon hover:text-carbon'
                                }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Actions */}
            <div className="pt-4">
                {status === LoadingState.SUCCESS ? (
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 text-white font-bold uppercase tracking-widest text-sm rounded-full">
                        <Check className="w-4 h-4" />
                        Transmitted
                    </div>
                ) : (
                    <button 
                        type="submit"
                        disabled={step === 2 && !interest}
                        className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest bg-carbon text-white px-8 py-4 hover:bg-swiss-red transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === LoadingState.LOADING ? (
                            <>Processing <Loader2 className="w-4 h-4 animate-spin" /></>
                        ) : (
                            <>{step === 1 ? 'Next Sequence' : 'Execute Sequence'} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                        )}
                    </button>
                )}
            </div>

          </form>
        </div>

        {/* Right Side: Terminal Output / Status Display */}
        <div className="relative min-h-[500px] bg-carbon text-off-white p-8 md:p-12 flex flex-col justify-between overflow-hidden shadow-2xl border-l-4 border-swiss-red">
           {/* Background Texture */}
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
           
           {/* Header */}
           <div className="relative z-10 flex justify-between items-start border-b border-gray-800 pb-6 mb-6">
             <div className="flex items-center gap-3">
               <Terminal className="w-5 h-5 text-gray-400" />
               <span className="font-mono text-xs uppercase tracking-widest text-gray-400">/sys/logs/lead_capture</span>
             </div>
             <div className="flex gap-1.5">
                 <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                 <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                 <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
             </div>
           </div>
           
           {/* Dynamic Log Output */}
           <div className="relative z-10 flex-1 font-mono text-xs md:text-sm leading-relaxed space-y-2 font-light text-gray-300">
             <div><span className="text-green-500">➜</span> Initializing handshake protocol...</div>
             <div><span className="text-green-500">➜</span> Secure connection established [TLS 1.3]</div>
             <div className="opacity-50">... Awaiting user input parameters</div>
             
             {step >= 2 && (
                 <div className="animate-fade-in pt-4">
                     <div><span className="text-swiss-red">➜</span> Identity Verified: <span className="text-white">{email}</span></div>
                     <div><span className="text-green-500">➜</span> Access Level: <span className="text-white">GUEST_USER</span></div>
                 </div>
             )}

             {interest && (
                 <div className="animate-fade-in pt-4">
                     <div><span className="text-swiss-red">➜</span> Target Vector Locked: <span className="text-white">[{interest.toUpperCase()}]</span></div>
                     <div><span className="text-green-500">➜</span> Calculating routing path...</div>
                 </div>
             )}

             {status === LoadingState.SUCCESS && (
                 <div className="animate-fade-in pt-8 border-t border-gray-800 mt-8">
                     <div className="text-green-400 font-bold mb-2">>> TRANSMISSION COMPLETE</div>
                     <p className="text-gray-400 mb-4">
                         Our architects have received your signal. Expect an encrypted communication channel to open within 24 hours.
                     </p>
                     <div className="inline-block px-3 py-1 bg-white/10 rounded text-[10px] uppercase">Ticket #{Math.floor(Math.random() * 9000) + 1000}X</div>
                 </div>
             )}
           </div>

           {/* Footer */}
           <div className="relative z-10 mt-8 pt-4 flex justify-between items-center text-[10px] font-mono text-gray-600 uppercase tracking-widest">
             <div>
               Encryption: AES-256<br/>
               Node: US-WEST-4
             </div>
             <div className={`w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)] ${status === LoadingState.LOADING ? 'animate-ping' : ''}`} />
           </div>
        </div>
      </div>
    </section>
  );
};

export default AiPlayground;
