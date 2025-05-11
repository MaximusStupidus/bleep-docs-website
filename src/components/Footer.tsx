
import React from 'react';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="w-full py-8 px-4 sm:px-6 lg:px-8 bg-bleep-neutral-light">
      <div className="max-w-7xl mx-auto">
        <Separator className="mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-bleep-neutral-dark">
              &copy; {year} Bleep. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-sm text-bleep-neutral-dark hover:text-bleep-blue">
              Privacy
            </a>
            <a href="#" className="text-sm text-bleep-neutral-dark hover:text-bleep-blue">
              Terms
            </a>
            <a href="#" className="text-sm text-bleep-neutral-dark hover:text-bleep-blue">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
