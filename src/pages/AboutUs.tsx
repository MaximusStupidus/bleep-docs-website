
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Users, Settings, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

const teamMembers = [
  {
    name: "Dr. Anirudh Anilkumar",
    title: "Co-Founder",
    bio: "IIT Bombay graduate with background in full-stack development and healthcare SaaS. Builder of scalable backend infrastructure.",
    imageUrl: "https://source.unsplash.com/random/400x400/?doctor,indian"
  },
  {
    name: "Ojas Jain",
    title: "Co-Founder",
    bio: "Mechanical Engineering, IIT Bombay. Built VibroView, ex-P&G, ex-Suntory Japan. Passionate about automation & real-world tech.",
    imageUrl: "https://source.unsplash.com/random/400x400/?man,indian,engineer"
  },
  {
    name: "Ishant Dahiya",
    title: "Lead Developer",
    bio: "Deep experience in speech AI and real-time systems. Expert in healthcare AI applications and medical data processing.",
    imageUrl: "https://source.unsplash.com/random/400x400/?man,indian,technology"
  }
];

const officeImages = [
  "https://source.unsplash.com/random/800x500/?modern,office",
  "https://source.unsplash.com/random/800x500/?tech,workspace",
  "https://source.unsplash.com/random/800x500/?medical,technology",
  "https://source.unsplash.com/random/800x500/?innovation,lab"
];

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#121319] text-white">
      <Header />
      <main className="flex-grow pt-20">
        <section className="w-full py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 ai-grid"></div>
          <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-[#00A3E0]/10 blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-[#4ECDC4]/10 blur-3xl"></div>
          
          {/* Hero section with large image */}
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3E0] to-[#4ECDC4]">About Bleep</span>
                </h1>
                <p className="text-lg text-white/70">
                  We're on a mission to give emergency physicians their time back through intelligent medical documentation.
                </p>
                <div className="flex items-center space-x-2 text-[#00A3E0]">
                  <span>Our story</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-xl animate-slide-up">
                <img 
                  src="https://source.unsplash.com/random/1200x800/?medical,technology,innovation" 
                  alt="Bleep team at work" 
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
              <div>
                <div className="flex items-center mb-6">
                  <Settings className="h-8 w-8 text-[#00A3E0] mr-3" />
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                </div>
                <p className="text-white/70 mb-6">
                  At Bleep, we believe that healthcare professionals should spend more time caring for patients and less time on administrative tasks. Our mission is to transform medical documentation through AI, giving physicians back valuable hours in their day while improving the quality and accuracy of clinical records.
                </p>
                <p className="text-white/70">
                  Founded in 2023 by a team of IIT Bombay engineers and healthcare innovators, we've built a platform that truly understands medical language and clinical workflows specific to Indian emergency rooms. Our company name "Bleep" represents our goal to replace the constant beep of notifications and administrative demands with streamlined, intelligent solutions.
                </p>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://source.unsplash.com/random/800x600/?doctor,patient,conversation" 
                  alt="Doctor with patient" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
              <div className="order-2 md:order-1">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://source.unsplash.com/random/800x600/?artificial,intelligence,healthcare" 
                    alt="AI in Healthcare" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-[#4ECDC4] mr-3" />
                  <h2 className="text-2xl font-bold">Our Approach</h2>
                </div>
                <p className="text-white/70 mb-6">
                  We combine cutting-edge AI capabilities with deep clinical expertise. Our technology isn't just technically advanced—it's medically informed, developed with input from practicing emergency physicians across India.
                </p>
                <p className="text-white/70">
                  Every feature we build addresses real pain points in the clinical documentation workflow. We maintain a continuous feedback loop with our users, ensuring that Bleep evolves alongside the changing needs of healthcare professionals and organizations in the Indian medical system.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#00A3E0] to-[#4ECDC4]">
              Meet Our Team
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-white/5 border-white/10 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-[#00A3E0] mb-3">{member.title}</p>
                    <p className="text-sm text-white/70">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-20 mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#00A3E0] to-[#4ECDC4]">
                Our Offices
              </h2>

              <Carousel className="w-full">
                <CarouselContent>
                  {officeImages.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <div className="rounded-xl overflow-hidden shadow-lg aspect-video">
                          <img 
                            src={image} 
                            alt={`Bleep office ${index + 1}`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            
            <div className="mt-20 text-center">
              <div className="max-w-3xl mx-auto bg-white/5 p-8 rounded-xl border border-white/10">
                <h3 className="text-2xl font-semibold mb-4">Join Our Team</h3>
                <p className="text-white/70 mb-6">
                  We're always looking for talented individuals who are passionate about transforming healthcare through technology.
                </p>
                <Button 
                  className="bg-[#00A3E0] hover:bg-[#008BC0] text-white"
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
