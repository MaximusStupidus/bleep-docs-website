
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Users, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    title: "CEO, Co-Founder",
    bio: "Former practicing physician with 15 years in internal medicine and a passion for healthcare technology.",
    imageUrl: "https://source.unsplash.com/random/400x400/?woman,professional"
  },
  {
    name: "Michael Rodriguez",
    title: "CTO, Co-Founder",
    bio: "AI researcher with expertise in natural language processing and healthcare applications of machine learning.",
    imageUrl: "https://source.unsplash.com/random/400x400/?man,technology"
  },
  {
    name: "Dr. James Williams",
    title: "Chief Medical Officer",
    bio: "Practicing cardiologist and medical informatics specialist focusing on clinical workflow optimization.",
    imageUrl: "https://source.unsplash.com/random/400x400/?doctor,male"
  },
  {
    name: "Priya Patel",
    title: "Head of Product",
    bio: "Product leader with extensive experience in healthcare SaaS and user-centered design principles.",
    imageUrl: "https://source.unsplash.com/random/400x400/?woman,indian"
  }
];

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="w-full py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-bleep-blue-light/30">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
                <span className="gradient-text">About Bleep</span>
              </h1>
              <p className="text-lg md:text-xl text-bleep-neutral-dark mb-8 animate-slide-up">
                We're on a mission to give physicians their time back through intelligent medical documentation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
              <div>
                <div className="flex items-center mb-6">
                  <Settings className="h-8 w-8 text-bleep-blue mr-3" />
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                </div>
                <p className="text-bleep-neutral-dark mb-6">
                  At Bleep, we believe that healthcare professionals should spend more time caring for patients and less time on administrative tasks. Our mission is to transform medical documentation through AI, giving physicians back valuable hours in their day while improving the quality and accuracy of clinical records.
                </p>
                <p className="text-bleep-neutral-dark">
                  Founded in 2023 by a team of physicians and AI researchers, we've built a platform that truly understands medical language and clinical workflows. Our company name "Bleep" represents our goal to replace the constant beep of notifications and administrative demands with streamlined, intelligent solutions.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-bleep-green mr-3" />
                  <h2 className="text-2xl font-bold">Our Approach</h2>
                </div>
                <p className="text-bleep-neutral-dark mb-6">
                  We combine cutting-edge AI capabilities with deep clinical expertise. Our technology isn't just technically advanced—it's medically informed, developed with input from practicing physicians across specialties.
                </p>
                <p className="text-bleep-neutral-dark">
                  Every feature we build addresses real pain points in the clinical documentation workflow. We maintain a continuous feedback loop with our users, ensuring that Bleep evolves alongside the changing needs of healthcare professionals and organizations.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 gradient-text">
              Meet Our Team
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-bleep-blue mb-3">{member.title}</p>
                    <p className="text-sm text-bleep-neutral-dark">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-20 text-center">
              <div className="max-w-3xl mx-auto bg-bleep-blue/5 p-8 rounded-xl border border-bleep-blue/20">
                <h3 className="text-2xl font-semibold mb-4">Join Our Team</h3>
                <p className="text-bleep-neutral-dark mb-6">
                  We're always looking for talented individuals who are passionate about transforming healthcare through technology.
                </p>
                <Button 
                  className="glow-button bg-bleep-blue hover:bg-bleep-blue-dark text-white"
                >
                  View Open Positions
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

export default AboutUs;
