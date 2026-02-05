
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--bg-subtle)] text-[var(--text-muted)] py-20 px-4 md:px-8 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="col-span-1 lg:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/logo.png" alt="Les Trucking Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold text-[var(--accent)] tracking-tighter">LES TRUCKING OF DOWNERS GROVE</span>
          </Link>
          <div className="space-y-4 text-sm">
            <p><strong>MC Number:</strong> 519268</p>
            <p><strong>DOT Number:</strong> 1350955</p>
          </div>
        </div>

        <div>
          <h4 className="text-[var(--accent)] font-bold mb-6 uppercase tracking-widest text-xs">Company</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-[var(--secondary)] transition-colors">Home</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--secondary)] transition-colors">Get In Touch</Link></li>
            <li><Link to="/terms" className="hover:text-[var(--secondary)] transition-colors">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-[var(--secondary)] transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[var(--accent)] font-bold mb-6 uppercase tracking-widest text-xs">Contact Info</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[var(--secondary)] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeWidth="2" /></svg>
              <span>(224) 526-5606</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[var(--secondary)] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeWidth="2" /></svg>
              <span>SAFETYLESTRUCKING@GMAIL.COM</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[var(--accent)] font-bold mb-6 uppercase tracking-widest text-xs">HQ Office</h4>
          <p className="text-sm leading-relaxed">
            3601 W ALGONQUIN RD SUITE 620, <br />
            ROLLING MEADOWS, IL 60008
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center text-xs">
        <p>&copy; {new Date().getFullYear()} LES TRUCKING OF DOWNERS GROVE LLC. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-[var(--secondary)] transition-colors">Twitter</a>
          <a href="#" className="hover:text-[var(--secondary)] transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-[var(--secondary)] transition-colors">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
