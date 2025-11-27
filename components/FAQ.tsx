
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What services does FutureAge offer?",
    answer: "FutureAge provides product development, AI solutions, venture studio services, and digital growth strategies for startups and enterprises. We specialize in building cognitive architectures that scale."
  },
  {
    question: "How can AI help my business grow?",
    answer: "AI can automate redundant tasks, personalize customer experiences at scale, optimize marketing campaigns through predictive analytics, and provide data-driven insights to accelerate your business growth."
  },
  {
    question: "Do you work with startups or only large companies?",
    answer: "We work with both. For startups, we act as a fractional founding team to accelerate product-market fit. For enterprises, we focus on digital transformation, legacy modernization, and AI integration."
  },
  {
    question: "How do I get started with FutureAge?",
    answer: "Simply reach out through our contact form or email us at hello@futureage.ai. Our team will schedule a discovery consultation to understand your goals and recommend the best architectural approach."
  },
  {
    question: "What makes FutureAge different from other agencies?",
    answer: "Our team combines Silicon Valley product velocity with deep enterprise technical knowledge. We don't just build software; we build 'Cognitive Architectures'—systems that learn, adapt, and grow with your business."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-white text-carbon relative border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:col-span-4 relative">
            <div className="lg:sticky lg:top-32">
              <span className="text-swiss-red font-mono text-xs font-bold uppercase tracking-widest mb-6 block">05 — Support</span>
              <h2 className="text-5xl md:text-6xl font-display font-medium tracking-[-0.03em] text-carbon leading-[0.95] mb-8">
                COMMON<br/>QUERIES.
              </h2>
              <p className="text-gray-500 font-sans text-sm leading-relaxed max-w-xs mb-12">
                Everything you need to know about our operational model, service delivery, and engagement structures.
              </p>
            </div>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-8">
            <div className="flex flex-col border-t border-gray-200">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div 
                    key={idx} 
                    className="border-b border-gray-200 transition-colors duration-300 hover:bg-gray-50"
                  >
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full flex items-start justify-between py-8 text-left group focus:outline-none"
                    >
                      <span className={`text-xl md:text-2xl font-display font-medium transition-colors duration-300 pr-8 ${isOpen ? 'text-swiss-red' : 'text-carbon group-hover:text-gray-600'}`}>
                        {faq.question}
                      </span>
                      <span className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${isOpen ? 'border-swiss-red bg-swiss-red text-white rotate-180' : 'border-gray-300 text-gray-400 group-hover:border-carbon group-hover:text-carbon'}`}>
                         {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${isOpen ? 'max-h-[300px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
                    >
                      <p className="text-gray-600 font-sans leading-relaxed max-w-2xl text-base md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
