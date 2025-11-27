import React from 'react';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';

const Footer: React.FC = () => {
  const handleExportProject = () => {
    // Capture the full HTML of the current page
    const htmlContent = document.documentElement.outerHTML;
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'future-age-export.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <footer id="contact" className="bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 lg:col-span-2">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter mb-8">
              LET'S BUILD<br />THE FUTURE.
            </h2>
            <a 
              href="mailto:hello@futureage.ai" 
              className="inline-block border-b border-white pb-1 text-xl hover:text-swiss-red hover:border-swiss-red transition-all"
            >
              hello@futureage.ai
            </a>
          </div>
          
          <div>
            <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-6">Sitemap</h4>
            <ul className="space-y-4">
              <li><Link to="/company/manifesto" className="hover:text-swiss-red transition-colors">Manifesto</Link></li>
              <li><Link to="/services/overview" className="hover:text-swiss-red transition-colors">Services</Link></li>
              <li><Link to="/intelligence/overview" className="hover:text-swiss-red transition-colors">Intelligence</Link></li>
              <li><Link to="/company/careers" className="hover:text-swiss-red transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-6">Social</h4>
            <ul className="space-y-4">
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-swiss-red transition-colors">LinkedIn</a></li>
              <li><a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-swiss-red transition-colors">Twitter / X</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-swiss-red transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-xs font-mono text-gray-500">
          <p>&copy; 2025 FutureAge Inc. All rights reserved.</p>
          <div className="flex flex-col md:flex-row gap-6 mt-4 md:mt-0 items-start md:items-center">
            <Link to="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            
            <button 
              onClick={handleExportProject}
              className="flex items-center gap-2 text-gray-500 hover:text-swiss-red transition-colors"
              title="Download the source HTML of this project"
            >
              <Download className="w-3 h-3" />
              <span>Export Project</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;