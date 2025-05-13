
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { AudioWaveform, ClipboardCheck, FileText, Star, Zap, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const featuresData = [
  {
    title: "Voice to Documentation",
    description: "Convert patient conversations into structured clinical notes with medical-grade accuracy.",
    icon: <FileText className="h-10 w-10 text-bleep-blue" />,
    details: "Our advanced AI captures the nuance of medical conversations and transforms them into properly formatted clinical notes with correct medical terminology."
  },
  {
    title: "AI Summarization",
    description: "Get concise summaries of patient encounters with key insights and actionable information.",
    icon: <ClipboardCheck className="h-10 w-10 text-bleep-green" />,
    details: "Automatically identify relevant clinical information, medical history, and suggested follow-ups without missing critical details."
  },
  {
    title: "Seamless Integration",
    description: "Works with all major EHR systems for frictionless documentation workflows.",
    icon: <AudioWaveform className="h-10 w-10 text-bleep-blue-dark" />,
    details: "Connect directly to Epic, Cerner, Athenahealth, and other major EHR platforms with minimal IT setup required."
  },
  {
    title: "Medical Image Analysis",
    description: "AI-assisted interpretation of medical imaging to support diagnostic workflows.",
    icon: <Star className="h-10 w-10 text-bleep-blue" />,
    details: "Streamline your image review process with AI that helps identify potential areas of concern while maintaining physician control."
  },
  {
    title: "Real-time Coding",
    description: "Automatic medical coding suggestions based on documentation content.",
    icon: <Zap className="h-10 w-10 text-bleep-green" />,
    details: "Improve billing accuracy and reduce claim rejections with AI that suggests appropriate ICD-10 and CPT codes based on your documentation."
  },
  {
    title: "Mobile Capability",
    description: "Access your documentation tools anywhere with our secure mobile application.",
    icon: <Rocket className="h-10 w-10 text-bleep-blue-dark" />,
    details: "Review, edit, and approve documentation from your smartphone or tablet with the same security and compliance as our desktop platform."
  }
];

const FeaturesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="w-full py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-bleep-blue-light/50">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
                <span className="gradient-text">Powerful Features</span>
              </h1>
              <p className="text-lg md:text-xl text-bleep-neutral-dark mb-8 animate-slide-up">
                Experience the complete toolkit for modern medical documentation and workflow optimization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {featuresData.map((feature, index) => (
                <Card key={index} className="feature-card-shadow border border-bleep-neutral-light hover:border-bleep-blue transition-all hover:-translate-y-1 duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-bleep-blue-light/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="pb-2">
                    <div className="mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl font-medium">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-bleep-neutral-dark mb-4">{feature.description}</p>
                    <p className="text-sm text-bleep-neutral-dark border-t border-bleep-neutral-light pt-4">{feature.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-20 text-center">
              <Button 
                className="glow-button bg-bleep-blue hover:bg-bleep-blue-dark text-white px-8 py-6 text-lg animate-slide-up"
              >
                Request a Full Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
