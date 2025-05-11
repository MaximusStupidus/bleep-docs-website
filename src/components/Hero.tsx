
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-bleep-blue-light">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
          <span className="gradient-text">AI-Powered Medical Documentation</span>
        </h1>
        
        <p className="text-lg md:text-xl text-bleep-neutral-dark max-w-3xl mx-auto mb-8 animate-slide-up">
          Save hours every day with automated clinical documentation that understands medical context.
        </p>
        
        <Button 
          className="bg-bleep-blue hover:bg-bleep-blue-dark text-white px-6 py-6 text-lg flex items-center gap-2 animate-slide-up"
        >
          Get Started <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
