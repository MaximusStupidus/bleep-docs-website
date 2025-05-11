
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-bleep-blue-light relative overflow-hidden">
      {/* AI-inspired background elements */}
      <div className="absolute inset-0 ai-grid"></div>
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-bleep-blue/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-bleep-green/10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          <span className="gradient-text">AI-Powered Medical Documentation</span>
        </h1>
        
        <p className="text-lg md:text-xl text-bleep-neutral-dark max-w-3xl mx-auto mb-8 animate-slide-up">
          Save hours every day with automated clinical documentation that understands medical context.
        </p>
        
        <Button 
          className="glow-button-primary bg-bleep-blue hover:bg-bleep-blue-dark text-white px-8 py-6 text-lg flex items-center gap-2 mx-auto animate-slide-up"
        >
          Get Started <ArrowRight className="h-5 w-5" />
        </Button>
        
        {/* Floating particles */}
        <div className="absolute left-1/4 top-1/3 h-2 w-2 rounded-full bg-bleep-blue/50 animate-pulse"></div>
        <div className="absolute left-3/4 top-2/3 h-3 w-3 rounded-full bg-bleep-green/50 animate-pulse"></div>
        <div className="absolute left-1/2 top-1/4 h-1.5 w-1.5 rounded-full bg-bleep-blue/60 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
