
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Clipboard, Clock, Shield, Brain, Stethoscope, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#121319] text-white">
      <Header />
      
      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 ai-grid"></div>
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-[#00A3E0]/10 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-[#4ECDC4]/10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-[#00A3E0] to-[#4ECDC4]">
            Your AI Assistant in the ER
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-8 animate-slide-up">
            Bleep automates clinical notes so you can focus on saving lives. 
            An AI-powered medical OS layer built for emergency rooms in India.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up">
            <Button className="bg-[#00A3E0] hover:bg-[#008BC0] text-white px-8 py-6 text-lg flex items-center gap-2">
              Request Early Access <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-6 text-lg flex items-center gap-2">
              Watch Demo <Play className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Tech pattern */}
          <div className="mt-16 opacity-20">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            <div className="grid grid-cols-6 gap-px h-[1px] mt-4">
              {Array(6).fill(0).map((_, i) => (
                <div key={i} className="h-[1px] w-full bg-white/50"></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="problem" className="py-20 px-4 bg-[#1A1E26]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00A3E0] to-[#4ECDC4]">
              ER doctors are overwhelmed with documentation
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/5 border-white/10 hover:border-[#00A3E0]/50 transition-all hover:-translate-y-1 duration-300">
              <CardContent className="p-6">
                <div className="mb-4 text-[#4ECDC4]">
                  <Clock className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Less Patient Face Time</h3>
                <p className="text-white/70">Delays in writing notes reduce critical time spent with patients needing urgent care.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 hover:border-[#00A3E0]/50 transition-all hover:-translate-y-1 duration-300">
              <CardContent className="p-6">
                <div className="mb-4 text-[#4ECDC4]">
                  <Clipboard className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Admin Burnout</h3>
                <p className="text-white/70">Repetitive documentation leads to physician burnout and decreased efficiency in emergencies.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 hover:border-[#00A3E0]/50 transition-all hover:-translate-y-1 duration-300">
              <CardContent className="p-6">
                <div className="mb-4 text-[#4ECDC4]">
                  <Shield className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Missing Information</h3>
                <p className="text-white/70">Critical information sometimes gets missed in the chaos of emergency care.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center p-8 bg-white/5 rounded-xl border border-white/10">
            <p className="text-2xl font-bold text-[#00A3E0]">Up to 2 hours/day lost to paperwork</p>
          </div>
        </div>
      </section>
      
      {/* Our Solution Section */}
      <section id="solution" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00A3E0] to-[#4ECDC4]">
              Our Solution – What is Bleep?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="glass-effect rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00A3E0] to-[#4ECDC4]"></div>
                <Brain className="h-16 w-16 text-[#4ECDC4] mb-6" />
                <p className="text-xl md:text-2xl font-light text-white mb-6">
                  A hardware-integrated AI device that listens, understands, and generates structured medical documentation
                </p>
                <ul className="space-y-4 text-white/80">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00A3E0]/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#00A3E0]"></div>
                    </div>
                    <span>Works offline + real-time in Indian hospitals</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00A3E0]/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#00A3E0]"></div>
                    </div>
                    <span>Designed to operate even in chaotic ER environments</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00A3E0]/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#00A3E0]"></div>
                    </div>
                    <span>Integrates with hospital security systems and equipment control</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-xl border border-white/10 p-1 shadow-xl">
              <div className="rounded-lg overflow-hidden">
                <div className="bg-[#1A1E26] h-8 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-[#FF5F56] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#FFBD2E] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#27C93F] rounded-full"></div>
                  </div>
                </div>
                <div className="p-6 bg-[#121319] min-h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <Brain className="h-16 w-16 text-[#00A3E0] mx-auto mb-4" />
                    <p className="text-white/70">AI-powered medical documentation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-[#1A1E26]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00A3E0] to-[#4ECDC4]">
              How It Works
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center relative">
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-[#00A3E0] flex items-center justify-center text-white font-bold">1</div>
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-[#00A3E0]/10 flex items-center justify-center mx-auto">
                  <Stethoscope className="h-8 w-8 text-[#00A3E0]" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Doctor speaks during exam</h3>
              <p className="text-white/70">Natural conversation between doctor and patient is captured securely.</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center relative">
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-[#00A3E0] flex items-center justify-center text-white font-bold">2</div>
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-[#00A3E0]/10 flex items-center justify-center mx-auto">
                  <Brain className="h-8 w-8 text-[#00A3E0]" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Bleep records and understands intent</h3>
              <p className="text-white/70">Our AI processes medical context, extracts key information, and identifies clinical patterns.</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center relative">
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-[#00A3E0] flex items-center justify-center text-white font-bold">3</div>
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-[#00A3E0]/10 flex items-center justify-center mx-auto">
                  <Clipboard className="h-8 w-8 text-[#00A3E0]" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Real-time structured note is generated</h3>
              <p className="text-white/70">Compliant documentation is produced in the format your hospital system requires.</p>
            </div>
          </div>
          
          <div className="mt-12 h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          <div className="flex justify-center mt-12">
            <div className="bg-white/5 border border-white/10 rounded-full p-1 inline-flex">
              <div className="animate-pulse w-3 h-3 bg-[#00A3E0] rounded-full mx-2"></div>
              <div className="animate-pulse w-3 h-3 bg-[#4ECDC4] rounded-full mx-2" style={{ animationDelay: "0.5s" }}></div>
              <div className="animate-pulse w-3 h-3 bg-[#00A3E0] rounded-full mx-2" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Bleep Section */}
      <section id="why-bleep" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00A3E0] to-[#4ECDC4]">
              Why Bleep?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-white/5 border-white/10 hover:border-[#00A3E0]/50 transition-all hover:-translate-y-1 duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-white mb-4">Built for India's unique healthcare infrastructure</h3>
                <div className="h-[1px] w-16 bg-[#00A3E0] mb-6"></div>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00A3E0]/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#00A3E0]"></div>
                    </div>
                    <span>Speech-to-text tuned for Indian accents and medical terminology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00A3E0]/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#00A3E0]"></div>
                    </div>
                    <span>Robust even with poor connectivity in rural and urban settings</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 hover:border-[#00A3E0]/50 transition-all hover:-translate-y-1 duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-white mb-4">Security and Efficiency</h3>
                <div className="h-[1px] w-16 bg-[#00A3E0] mb-6"></div>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00A3E0]/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#00A3E0]"></div>
                    </div>
                    <span>HIPAA-compliant, end-to-end encrypted for maximum patient privacy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00A3E0]/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#00A3E0]"></div>
                    </div>
                    <span>Saves 1–2 hours daily per doctor, increasing patient throughput</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* About Us Section */}
      <section id="about" className="py-20 px-4 bg-[#1A1E26]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00A3E0] to-[#4ECDC4]">
              About Us
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              We're a team of IIT Bombay engineers and healthcare innovators solving the ER burnout crisis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Dr. Anirudh Anilkumar",
                title: "Co-Founder",
                background: "IIT Bombay | Background in full-stack dev & healthcare SaaS | Builder of scalable backend infra",
                image: "https://source.unsplash.com/random/400x400/?doctor,indian"
              },
              {
                name: "Ojas Jain",
                title: "Co-Founder",
                background: "Mechanical Engineering, IIT Bombay | Built VibroView, ex-P&G, ex-Suntory Japan | Passionate about automation",
                image: "https://source.unsplash.com/random/400x400/?man,indian,engineer"
              },
              {
                name: "Ishant Dahiya",
                title: "Lead Developer",
                background: "Deep experience in speech AI and real-time systems | AI specialist for healthcare",
                image: "https://source.unsplash.com/random/400x400/?man,indian,technology"
              }
            ].map((member, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#00A3E0]/50 transition-all hover:-translate-y-1 duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-[#00A3E0] mb-4">{member.title}</p>
                  <p className="text-white/70 text-sm">{member.background}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-white/70 max-w-3xl mx-auto mb-6">
              Backed by years of research in motion magnification, healthcare automation, and Indian hospital workflows
            </p>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section id="cta" className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="glass-effect p-12 rounded-xl">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00A3E0] to-[#4ECDC4]">
              We're currently onboarding pilot partners
            </h2>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Button className="bg-[#00A3E0] hover:bg-[#008BC0] text-white px-8 py-6 text-lg">
                Join the Waitlist
              </Button>
              <Button variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-6 text-lg">
                Talk to Us
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
