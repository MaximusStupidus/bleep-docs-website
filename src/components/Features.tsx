
import React from 'react';
import { Brain, Cpu, AudioWaveform } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const featuresData = [
  {
    title: "Voice to Documentation",
    description: "Convert patient conversations into structured clinical notes with medical-grade accuracy.",
    icon: <AudioWaveform className="h-10 w-10 text-bleep-blue" />,
  },
  {
    title: "AI Summarization",
    description: "Get concise summaries of patient encounters with key insights and actionable information.",
    icon: <Brain className="h-10 w-10 text-bleep-green" />,
  },
  {
    title: "Seamless Integration",
    description: "Works with all major EHR systems for frictionless documentation workflows.",
    icon: <Cpu className="h-10 w-10 text-bleep-blue-dark" />,
  }
];

const Features = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 gradient-text">
          Designed for Physicians, Built for Efficiency
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {featuresData.map((feature, index) => (
            <Card key={index} className="feature-card-shadow border border-bleep-neutral-light hover:border-bleep-blue transition-all hover:-translate-y-1 duration-300">
              <CardHeader className="pb-2">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-medium">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-bleep-neutral-dark">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
