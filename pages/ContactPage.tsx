
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StatusBar from '../components/StatusBar';
import Breadcrumbs from '../components/Breadcrumbs';
import { ArrowRight, Mail, MapPin, Clock, CheckCircle2, Loader2 } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-off-white selection:bg-carbon selection:text-white font-sans pb-10 flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32">
        <div className="container mx-auto px-6 mb-8">
            <Breadcrumbs />
        </div>

        {/* Header */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-4xl">
            <span className="text-swiss-red font-mono text-xs font-bold uppercase tracking-widest mb-6 block">Contact</span>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] text-carbon mb-12">
              INITIATE<br/>UPLINK.
            </h1>
          </div>
        </section>

        <section className="container mx-auto px-6 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                
                {/* Left: Coordinates */}
                <div className="lg:col-span-5 space-y-16">
                    <div>
                        <h3 className="font-display text-2xl font-medium mb-6">Signal Sources</h3>
                        <a href="mailto:hello@futureage.ai" className="flex items-center gap-4 text-lg group">
                            <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center rounded-full group-hover:bg-swiss-red group-hover:border-swiss-red group-hover:text-white transition-colors">
                                <Mail className="w-5 h-5" />
                            </div>
                            <span className="border-b border-gray-300 pb-1 group-hover:border-swiss-red transition-colors">hello@futureage.ai</span>
                        </a>
                    </div>

                    <div className="space-y-8">
                        <h3 className="font-display text-2xl font-medium mb-6">Coordinates</h3>
                        
                        {/* Location 1 */}
                        <div className="flex gap-6 group">
                            <div className="mt-1 text-gray-400 group-hover:text-swiss-red transition-colors">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-1">San Francisco // HQ</h4>
                                <p className="text-carbon text-lg">415 Mission St,<br/>San Francisco, CA 94105</p>
                            </div>
                        </div>

                        {/* Location 2 */}
                        <div className="flex gap-6 group">
                            <div className="mt-1 text-gray-400 group-hover:text-swiss-red transition-colors">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-1">New York // Studio</h4>
                                <p className="text-carbon text-lg">100 Crosby St,<br/>New York, NY 10012</p>
                            </div>
                        </div>

                        {/* Location 3 */}
                        <div className="flex gap-6 group">
                            <div className="mt-1 text-gray-400 group-hover:text-swiss-red transition-colors">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-1">London // Lab</h4>
                                <p className="text-carbon text-lg">180 Strand,<br/>London WC2R 1EA</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-white border border-gray-200">
                        <div className="flex items-center gap-3 text-swiss-red mb-2">
                            <Clock className="w-4 h-4 animate-spin-slow" />
                            <span className="font-mono text-xs uppercase tracking-widest font-bold">System Status</span>
                        </div>
                        <p className="text-sm text-gray-500">
                            Our team is currently online and accepting new strategic partnerships for Q3/Q4 2024.
                        </p>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="lg:col-span-7">
                    <div className="bg-white p-8 md:p-12 border border-gray-200 shadow-sm relative overflow-hidden">
                        {isSubmitted ? (
                            <div className="min-h-[400px] flex flex-col items-center justify-center text-center animate-fade-in">
                                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                                </div>
                                <h3 className="text-3xl font-display font-bold mb-4">Transmission Received.</h3>
                                <p className="text-gray-500 max-w-md mx-auto mb-8">
                                    Your inquiry has been routed to our intake architects. Expect a secure briefing document within 24 hours.
                                </p>
                                <button 
                                    onClick={() => setIsSubmitted(false)}
                                    className="text-sm font-bold uppercase tracking-widest border-b-2 border-carbon pb-1 hover:text-swiss-red hover:border-swiss-red transition-colors"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="font-mono text-xs uppercase tracking-widest text-gray-500">Name</label>
                                        <input 
                                            type="text" 
                                            name="name"
                                            required
                                            value={formState.name}
                                            onChange={handleChange}
                                            className="w-full bg-off-white border-b-2 border-gray-200 p-4 focus:outline-none focus:border-swiss-red transition-colors font-display text-lg"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="font-mono text-xs uppercase tracking-widest text-gray-500">Company</label>
                                        <input 
                                            type="text" 
                                            name="company"
                                            required
                                            value={formState.company}
                                            onChange={handleChange}
                                            className="w-full bg-off-white border-b-2 border-gray-200 p-4 focus:outline-none focus:border-swiss-red transition-colors font-display text-lg"
                                            placeholder="Acme Corp"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="font-mono text-xs uppercase tracking-widest text-gray-500">Email Endpoint</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        required
                                        value={formState.email}
                                        onChange={handleChange}
                                        className="w-full bg-off-white border-b-2 border-gray-200 p-4 focus:outline-none focus:border-swiss-red transition-colors font-display text-lg"
                                        placeholder="john@acme.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="font-mono text-xs uppercase tracking-widest text-gray-500">Budget Vector</label>
                                    <select 
                                        name="budget"
                                        value={formState.budget}
                                        onChange={handleChange}
                                        className="w-full bg-off-white border-b-2 border-gray-200 p-4 focus:outline-none focus:border-swiss-red transition-colors font-display text-lg text-carbon appearance-none"
                                    >
                                        <option value="" disabled>Select Investment Range</option>
                                        <option value="40L-80L">₹40L - ₹80L</option>
                                        <option value="80L-2Cr">₹80L - ₹2Cr</option>
                                        <option value="2Cr-4Cr">₹2Cr - ₹4Cr</option>
                                        <option value="4Cr+">₹4Cr+</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="font-mono text-xs uppercase tracking-widest text-gray-500">Mission Objective</label>
                                    <textarea 
                                        name="message"
                                        required
                                        value={formState.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full bg-off-white border-b-2 border-gray-200 p-4 focus:outline-none focus:border-swiss-red transition-colors font-sans text-base resize-none"
                                        placeholder="Tell us about your vision, constraints, and desired velocity."
                                    />
                                </div>

                                <div className="pt-4">
                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="w-full bg-carbon text-white py-5 font-bold uppercase tracking-widest text-sm hover:bg-swiss-red transition-colors flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>Transmitting <Loader2 className="w-4 h-4 animate-spin" /></>
                                        ) : (
                                            <>Execute Transmission <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}
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

export default ContactPage;
