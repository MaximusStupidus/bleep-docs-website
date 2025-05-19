import React from 'react';
import { Button } from "@/components/ui/button";
import { Brain, AudioWaveform, Cpu, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] to-[#141821] text-white">
      {/* Floating Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 backdrop-blur-md bg-[#1A1F2C]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="text-2xl font-bold">
              <span className="text-[#8B5CF6]">Bleep</span>
              <span className="text-[#1EAEDB]">.</span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-white/80 hover:text-white transition-colors px-2 py-1">About</a>
            <a href="#docs" onClick={(e) => { e.preventDefault(); scrollToSection('docs'); }} className="text-white/80 hover:text-white transition-colors px-2 py-1">Docs</a>
            <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className="text-white/80 hover:text-white transition-colors px-2 py-1">Features</a>
            <a href="#product" onClick={(e) => { e.preventDefault(); scrollToSection('product'); }} className="text-white/80 hover:text-white transition-colors px-2 py-1">Product</a>
            <a href="#blog" onClick={(e) => { e.preventDefault(); scrollToSection('blog'); }} className="text-white/80 hover:text-white transition-colors px-2 py-1">Blog</a>
            <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }} className="text-white/80 hover:text-white transition-colors px-2 py-1">Pricing</a>
            <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white ml-4">
              Request Demo
            </Button>
          </nav>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center relative">
          {/* Gradient orbs */}
          <div className="absolute top-[-150px] right-[10%] w-[300px] h-[300px] rounded-full bg-[#8B5CF6]/20 blur-[100px]"></div>
          <div className="absolute bottom-[-100px] left-[5%] w-[250px] h-[250px] rounded-full bg-[#1EAEDB]/20 blur-[100px]"></div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#1EAEDB]">
            AI-Powered Medical Documentation
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-8 animate-slide-up">
            Save hours every day with automated clinical documentation that understands medical context and works for you.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up">
            <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-8 py-6 text-lg">
              Get Started
            </Button>
            <Button variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-6 text-lg">
              Watch Demo
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

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-[#141821]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#1EAEDB]">
            About Bleep
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              <p className="text-white/70">
                At Bleep, we believe that healthcare professionals should spend more time caring for patients and less time on administrative tasks. Our mission is to transform medical documentation through AI, giving physicians back valuable hours in their day while improving the quality and accuracy of clinical records.
              </p>
              <p className="text-white/70">
                Founded in 2023 by a team of physicians and AI researchers, we've built a platform that truly understands medical language and clinical workflows.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Our Team</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  {
                    name: "Dr. Anirudh Anilkumar",
                    title: "Co-Founder",
                    image: "https://source.unsplash.com/random/400x400/?doctor,indian"
                  },
                  {
                    name: "Ishant Dahiya",
                    title: "Co-Founder",
                    image: "https://source.unsplash.com/random/400x400/?man,indian,technology"
                  },
                  {
                    name: "Ojas Jain",
                    title: "Co-Founder",
                    image: "https://source.unsplash.com/random/400x400/?man,indian,engineer"
                  }
                ].map((member, i) => (
                  <div key={i} className="flex flex-col items-center bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <h4 className="text-white font-medium">{member.name}</h4>
                    <p className="text-[#8B5CF6] text-sm">{member.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Docs Section */}
      <section id="docs" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#1EAEDB]">
            Documentation
          </h2>
          
          <div className="bg-white/5 rounded-xl border border-white/10 p-6 md:p-8 text-center">
            <div className="py-20">
              <h3 className="text-3xl font-bold text-white mb-4">Coming Soon</h3>
              <p className="text-white/70 max-w-2xl mx-auto">
                Our comprehensive documentation is currently under development.
                Check back soon for detailed guides, API references, and integration tutorials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-[#141821]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#1EAEDB]">
            Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Voice to Documentation",
                description: "Convert patient conversations into structured clinical notes with medical-grade accuracy.",
                icon: <AudioWaveform className="h-10 w-10 text-[#8B5CF6]" />,
              },
              {
                title: "AI Summarization",
                description: "Get concise summaries of patient encounters with key insights and actionable information.",
                icon: <Brain className="h-10 w-10 text-[#1EAEDB]" />,
              },
              {
                title: "Seamless Integration",
                description: "Works with all major EHR systems for frictionless documentation workflows.",
                icon: <Cpu className="h-10 w-10 text-white" />,
              }
            ].map((feature, i) => (
              <Card key={i} className="bg-white/5 border-white/10 hover:border-[#8B5CF6]/50 transition-all hover:-translate-y-1 duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#1EAEDB]">
            Product
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">How It Works</h3>
              <p className="text-white/70">
                Bleep's AI technology captures and processes doctor-patient conversations in real-time, converting speech to structured medical documentation while maintaining complete privacy and security.
              </p>
              
              <ul className="space-y-4">
                {["Record conversations securely", "Process medical terminology accurately", "Structure data for your EHR", "Review and approve with one click"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#8B5CF6]"></div>
                    </div>
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white mt-4">
                Learn More
              </Button>
            </div>
            
            <div className="bg-white/5 rounded-xl border border-white/10 p-1 shadow-xl">
              <div className="rounded-lg overflow-hidden">
                <div className="bg-[#141821] h-8 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-[#FF5F56] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#FFBD2E] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#27C93F] rounded-full"></div>
                  </div>
                </div>
                <div className="p-6 bg-[#1A1F2C] min-h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <Brain className="h-16 w-16 text-[#8B5CF6] mx-auto mb-4" />
                    <p className="text-white/70">Product Interface Demo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 bg-[#141821]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#1EAEDB]">
            Latest from Our Blog
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Future of Medical Documentation",
                excerpt: "How AI is transforming the way physicians record and manage patient information.",
                date: "May 15, 2025",
                image: "https://source.unsplash.com/random/800x600/?medical,technology"
              },
              {
                title: "Improving Patient Care with AI",
                excerpt: "Research shows how automated documentation can lead to better patient outcomes.",
                date: "May 10, 2025",
                image: "https://source.unsplash.com/random/800x600/?doctor,patient"
              },
              {
                title: "HIPAA Compliance in the Age of AI",
                excerpt: "Navigating privacy regulations while implementing cutting-edge medical technology.",
                date: "May 5, 2025",
                image: "https://source.unsplash.com/random/800x600/?security,data"
              }
            ].map((post, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#8B5CF6]/50 transition-all hover:-translate-y-1 duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-sm text-[#8B5CF6] mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                  <p className="text-white/70 mb-4">{post.excerpt}</p>
                  <a href="#" className="text-[#1EAEDB] hover:underline">Read more →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#1EAEDB]">
            Pricing
          </h2>
          <p className="text-white/70 mb-12 max-w-3xl">
            Custom solutions tailored to your organization's needs.
          </p>
          
          <div className="bg-white/5 border border-white/10 rounded-xl p-12 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-8">Talk to Us</h3>
            <p className="text-white/70 mb-10 text-lg">
              We provide customized pricing based on your organization's size, needs, and integration requirements.
              Contact our sales team for a personalized demo and quote.
            </p>
            
            <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-8 py-6 text-lg">
              Request Quote
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <a href="#" className="text-2xl font-bold">
                <span className="text-[#8B5CF6]">Bleep</span>
                <span className="text-[#1EAEDB]">.</span>
              </a>
              <p className="mt-4 text-white/70">
                AI-powered medical documentation for modern healthcare providers.
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
    </div>
  );
};

export default Index;
