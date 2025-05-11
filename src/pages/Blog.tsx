
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
  {
    title: "The Future of Medical Documentation",
    excerpt: "How AI is transforming the way physicians document patient encounters and improving care delivery.",
    date: "May 9, 2025",
    category: "AI in Healthcare",
    imageUrl: "https://source.unsplash.com/random/800x600/?medical,technology"
  },
  {
    title: "Reducing Physician Burnout with Technology",
    excerpt: "Exploring how documentation automation can help address the growing crisis of burnout among healthcare professionals.",
    date: "May 2, 2025",
    category: "Physician Wellness",
    imageUrl: "https://source.unsplash.com/random/800x600/?doctor,wellness"
  },
  {
    title: "HIPAA Compliance in the Age of AI",
    excerpt: "Understanding the regulatory landscape for AI-powered healthcare tools and best practices for maintaining compliance.",
    date: "April 25, 2025",
    category: "Healthcare Regulation",
    imageUrl: "https://source.unsplash.com/random/800x600/?security,medical"
  },
  {
    title: "Case Study: Memorial Hospital Reduces Documentation Time by 63%",
    excerpt: "How one hospital transformed their clinical workflows with Bleep's AI documentation assistant.",
    date: "April 18, 2025",
    category: "Case Study",
    imageUrl: "https://source.unsplash.com/random/800x600/?hospital,data"
  },
  {
    title: "The Human-AI Partnership in Clinical Settings",
    excerpt: "Finding the right balance between AI assistance and human expertise in patient care documentation.",
    date: "April 11, 2025",
    category: "Clinical Practice",
    imageUrl: "https://source.unsplash.com/random/800x600/?ai,human"
  },
  {
    title: "Beyond Notes: The Future of Clinical Data Capture",
    excerpt: "Exploring emerging technologies for comprehensive patient data management and analysis.",
    date: "April 4, 2025",
    category: "Innovation",
    imageUrl: "https://source.unsplash.com/random/800x600/?futuristic,medical"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="w-full py-16 md:py-24 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-bleep-blue-light/30">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="flex justify-center mb-4">
                <Book className="h-10 w-10 text-bleep-blue" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
                <span className="gradient-text">Bleep Blog</span>
              </h1>
              <p className="text-lg md:text-xl text-bleep-neutral-dark mb-8 animate-slide-up">
                Insights on healthcare technology, medical documentation, and industry trends
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {blogPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 duration-300 h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-bleep-blue font-semibold">{post.category}</span>
                      <span className="text-xs text-bleep-neutral-dark">{post.date}</span>
                    </div>
                    <CardTitle className="text-xl font-medium hover:text-bleep-blue transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-bleep-neutral-dark">{post.excerpt}</p>
                  </CardContent>
                  <div className="p-4 pt-0">
                    <Button 
                      variant="ghost" 
                      className="text-bleep-blue hover:text-bleep-blue-dark hover:bg-bleep-blue-light/20 p-0 h-auto"
                    >
                      Read More →
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Button 
                className="glow-button bg-bleep-blue hover:bg-bleep-blue-dark text-white px-6 py-2"
              >
                Load More Articles
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
