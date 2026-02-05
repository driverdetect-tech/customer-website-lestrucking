
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8">
      <div className="max-w-7xl mx-auto glass-light rounded-full py-2 px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
              <img src="/logo.png" alt="Les Trucking Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold text-[var(--accent)] tracking-tighter group-hover:text-[var(--secondary)] transition-colors">LES TRUCKING OF DOWNERS GROVE LLC</span>
          </Link>
        </div>

        {/* Navigation links removed as per request */}

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="flex bg-[var(--accent)] text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-[var(--primary)] hover:text-[var(--accent)] transition-all items-center gap-2"
          >
            Book a schedule
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
