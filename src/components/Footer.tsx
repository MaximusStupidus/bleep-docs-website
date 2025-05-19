
import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="text-2xl font-bold">
              <span className="text-[#00A3E0]">Bleep</span>
              <span className="text-[#4ECDC4]">.</span>
            </Link>
            <p className="mt-4 text-white/70">
              AI-powered medical documentation for modern emergency rooms in India.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {["Features", "Integrations", "Security", "Pricing"].map((item, i) => (
                <li key={i}><a href="#" className="text-white/70 hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {["Documentation", "API", "Guides", "Blog"].map((item, i) => (
                <li key={i}><a href="#" className="text-white/70 hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {["About", "Careers", "Contact", "Legal"].map((item, i) => (
                <li key={i}><a href="#" className="text-white/70 hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-white/10">
          <p className="text-white/50 text-sm">© 2025 Bleep. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {["Twitter", "LinkedIn", "GitHub"].map((social, i) => (
              <a key={i} href="#" className="text-white/50 hover:text-white transition-colors text-sm">{social}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
