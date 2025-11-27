
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const ROUTE_LABELS: Record<string, string> = {
  // Services
  'services': 'Services',
  'development': 'Development',
  'ai-solutions': 'AI Solutions',
  'brand-identity': 'Brand Identity',
  'design-systems': 'Design Systems',
  'market-strategy': 'Market Strategy',
  'venture-advisory': 'Venture Advisory',
  'overview': 'Overview',
  
  // Company
  'company': 'Company',
  'manifesto': 'Manifesto',
  'careers': 'Careers',
  'leadership': 'Leadership',
  'clients': 'Clients',
  'faq': 'Support',
  
  // Intelligence
  'intelligence': 'Intelligence',
  'foresight-engine': 'Foresight Engine',
  'nexus-core': 'Nexus Core',
  'velocity': 'Velocity',
  'market-sentiment': 'Market Sentiment',
  'vector-search': 'Vector Search',
  'predictive-models': 'Predictive Models',
  
  // Legal / Other
  'legal': 'Legal',
  'privacy': 'Privacy Policy',
  'terms': 'Terms of Service',
  'contact': 'Contact',
  'social': 'Social'
};

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  // Split path
  let pathnames = location.pathname.split('/').filter((x) => x);

  // HACK: If the last segment is 'overview', remove it from the display array.
  // This turns "Home > Intelligence > Overview" into "Home > Intelligence" visually,
  // while keeping the underlying route structure intact.
  if (pathnames.length > 0 && pathnames[pathnames.length - 1] === 'overview') {
    pathnames.pop();
  }

  if (pathnames.length === 0) return null;

  return (
    <nav className="flex items-center text-[10px] md:text-xs font-mono uppercase tracking-widest text-gray-500 mb-8 overflow-x-auto whitespace-nowrap">
      <Link to="/" className="hover:text-swiss-red transition-colors flex items-center gap-1 group">
        <Home className="w-3 h-3 mb-0.5 group-hover:text-swiss-red transition-colors" />
        <span>Home</span>
      </Link>
      
      {pathnames.map((value, index) => {
        // Default path construction needs to rebuild the full path including 'overview' if we are routing logically
        // But for the visual link, we want to point to the correct hub.
        
        let to = '/';
        const fullPathOriginal = location.pathname.split('/').filter(x => x);
        
        // Reconstruct path up to this point
        // If we are at 'intelligence' (index 0) but the real path was intelligence/overview
        // We simply want to link to /intelligence/overview
        
        if (value === 'services' || (value === 'services' && index === 0)) {
             to = '/services/overview';
        } else if (value === 'company' || (value === 'company' && index === 0)) {
             to = '/company/overview';
        } else if (value === 'intelligence' || (value === 'intelligence' && index === 0)) {
             to = '/intelligence/overview';
        } else {
             // Fallback: Reconstruct path segments up to current index
             // Note: Since we popped 'overview' from pathnames, we need to be careful.
             // Actually, usually strict reconstruction works for leaf pages.
             to = `/${fullPathOriginal.slice(0, index + 1).join('/')}`;
        }

        const isLast = index === pathnames.length - 1;
        // Use mapped label or fallback to formatting the slug (removing dashes)
        const label = ROUTE_LABELS[value] || value.replace(/-/g, ' ');

        return (
          <React.Fragment key={`${index}-${value}`}>
            <ChevronRight className="w-3 h-3 mx-2 text-gray-300" />
            {isLast ? (
              <span className="text-swiss-red font-bold cursor-default">{label}</span>
            ) : (
              <Link to={to} className="hover:text-carbon transition-colors hover:underline decoration-swiss-red decoration-2 underline-offset-4">
                {label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
