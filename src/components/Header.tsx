
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-bleep-blue-dark">
            <span className="text-bleep-blue">Bleep</span>
            <span className="text-bleep-green">.</span>
          </div>
        </div>
        
        <Button 
          className="bg-white text-bleep-blue border border-bleep-blue hover:bg-bleep-blue-light hover:text-bleep-blue-dark transition-colors"
        >
          Request Demo
        </Button>
      </div>
    </header>
  );
};

export default Header;
