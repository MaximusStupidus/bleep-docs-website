
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowRight, Info, Zap, Lightbulb } from "lucide-react";

const WhyBleep = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="w-full py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-bleep-blue-light/50">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
                <span className="gradient-text">Why Choose <span className="text-bleep-blue">Bleep</span>?</span>
              </h1>
              <p className="text-lg md:text-xl text-bleep-neutral-dark mb-8 animate-slide-up">
                The future of medical documentation is here, designed to save physicians time and improve patient care.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-bleep-neutral-light hover:border-bleep-blue transition-all transform hover:-translate-y-1 duration-300">
                <div className="h-12 w-12 rounded-full bg-bleep-blue-light flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-bleep-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Time Efficiency</h3>
                <p className="text-bleep-neutral-dark">
                  Reduce documentation time by up to 70%, allowing physicians to focus more on patient care and less on paperwork.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-bleep-neutral-light hover:border-bleep-blue transition-all transform hover:-translate-y-1 duration-300">
                <div className="h-12 w-12 rounded-full bg-bleep-green-light flex items-center justify-center mb-6">
                  <Lightbulb className="h-6 w-6 text-bleep-green" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Medical Accuracy</h3>
                <p className="text-bleep-neutral-dark">
                  AI trained on millions of clinical notes and medical literature to ensure precise and compliant documentation.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-bleep-neutral-light hover:border-bleep-blue transition-all transform hover:-translate-y-1 duration-300">
                <div className="h-12 w-12 rounded-full bg-bleep-blue-light flex items-center justify-center mb-6">
                  <Info className="h-6 w-6 text-bleep-blue-dark" />
                </div>
                <h3 className="text-xl font-semibold mb-4">HIPAA Compliant</h3>
                <p className="text-bleep-neutral-dark">
                  Built with privacy and security at its core. All data is encrypted and processed in compliance with healthcare regulations.
                </p>
              </div>
            </div>
            
            <div className="mt-20 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">Designed by Doctors for Doctors</h2>
                <p className="text-lg text-bleep-neutral-dark mb-8">
                  Our team includes practicing physicians who understand the challenges of clinical documentation. We've built Bleep to address the real pain points in medical workflows.
                </p>
                <Button 
                  className="glow-button bg-bleep-blue hover:bg-bleep-blue-dark text-white px-6 py-6 text-lg flex items-center gap-2 mx-auto animate-slide-up"
                >
                  Learn How It Works <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhyBleep;
