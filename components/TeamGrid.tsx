
import React from 'react';
import { User, TrendingUp, Code, Database, Wallet, Users, ArrowRight } from 'lucide-react';

const teamMembers = [
  {
    title: "Fractional CEO",
    desc: "Growth leadership & investor confidence strategies.",
    icon: <User className="w-6 h-6" />
  },
  {
    title: "Fractional CMO",
    desc: "Data-driven brand, GTM and Organic growth engines.",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: "Fractional CTO",
    desc: "Customer insights, digital transformation & architecture.",
    icon: <Code className="w-6 h-6" />
  },
  {
    title: "Fractional CDO",
    desc: "From Generative AI implementation to autonomous agents.",
    icon: <Database className="w-6 h-6" />
  },
  {
    title: "Fractional CFO",
    desc: "Financial modeling, unit economics & investor readiness.",
    icon: <Wallet className="w-6 h-6" />
  },
  {
    title: "Fractional CHRO",
    desc: "People, culture, and remote-first leadership frameworks.",
    icon: <Users className="w-6 h-6" />
  }
];

const TeamGrid: React.FC = () => {
  return (
    <section id="team" className="py-32 bg-white text-carbon relative border-t border-gray-200">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:col-span-4 relative">
            <div className="lg:sticky lg:top-32">
              <span className="text-swiss-red font-mono text-xs font-bold uppercase tracking-widest mb-6 block">04 — Leadership</span>
              <h2 className="text-5xl md:text-6xl font-display font-medium tracking-[-0.03em] text-carbon leading-[0.95] mb-8">
                MAKE US<br/>YOUR OWN<br/>TEAM.
              </h2>
              <p className="text-gray-500 font-sans text-sm leading-relaxed max-w-xs mb-12">
                Fractional Shadow Leadership for ventures that need executive expertise without full-time overheads. 
                <br/><br/>
                We embed directly into your slack, jira, and board meetings.
              </p>

              <div className="hidden lg:block w-12 h-1 bg-carbon mb-8" />
            </div>
          </div>

          {/* Right Column: Interactive Directory List */}
          <div className="lg:col-span-8">
             <div className="flex flex-col">
                {teamMembers.map((member, idx) => (
                  <div 
                    key={idx}
                    className="group relative border-t border-gray-200 py-10 px-6 transition-all duration-300 hover:bg-carbon hover:border-carbon cursor-pointer flex flex-col md:flex-row gap-6 md:items-center justify-between"
                  >
                    {/* Index Number */}
                    <span className="font-mono text-xs text-gray-400 group-hover:text-gray-500 transition-colors">
                      0{idx + 1}
                    </span>

                    {/* Main Content */}
                    <div className="flex-1 md:pl-8">
                       <h3 className="text-3xl font-display font-medium text-carbon group-hover:text-white transition-colors mb-2">
                         {member.title}
                       </h3>
                       <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors font-sans max-w-md">
                         {member.desc}
                       </p>
                    </div>

                    {/* Icon Interaction */}
                    <div className="flex items-center gap-6">
                       <div className="text-gray-400 group-hover:text-swiss-red transition-colors duration-300 transform group-hover:scale-110">
                          {member.icon}
                       </div>
                       <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 group-hover:border-gray-600">
                          <ArrowRight className="w-4 h-4 text-white" />
                       </div>
                    </div>

                  </div>
                ))}
                {/* Bottom Border for last item */}
                <div className="border-t border-gray-200" />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
