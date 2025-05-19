
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  // Handle scroll effect for floating navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-6 left-0 right-0 z-50 px-4 mx-auto max-w-5xl w-[92%] transition-all duration-300 rounded-xl ${
        scrolled ? 'neo-blur shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold">
            <span className="text-[#00A3E0]">Bleep</span>
            <span className="text-[#4ECDC4]">.</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="text-white/80 hover:text-white transition-colors px-3 py-2">
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button 
                  onClick={() => scrollToSection('how-it-works')} 
                  className="text-white/80 hover:text-white transition-colors px-3 py-2"
                >
                  How It Works
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button 
                  onClick={() => scrollToSection('why-bleep')} 
                  className="text-white/80 hover:text-white transition-colors px-3 py-2"
                >
                  Why Bleep
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors px-3 py-2">
                  About Us
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button 
                  onClick={() => scrollToSection('cta')} 
                  className="text-white/80 hover:text-white transition-colors px-3 py-2"
                >
                  Join Waitlist
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button 
            className="ml-4 bg-[#00A3E0] hover:bg-[#008BC0] text-white glow-button-primary"
          >
            Request Demo
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            className="text-white"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 neo-blur shadow-lg z-50 rounded-b-xl animate-fade-in">
          <div className="flex flex-col p-4">
            <Link to="/" className="py-3 px-4 text-white/80 hover:text-white" onClick={toggleMobileMenu}>
              Home
            </Link>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="text-left py-3 px-4 text-white/80 hover:text-white"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('why-bleep')} 
              className="text-left py-3 px-4 text-white/80 hover:text-white"
            >
              Why Bleep
            </button>
            <Link to="/about" className="py-3 px-4 text-white/80 hover:text-white" onClick={toggleMobileMenu}>
              About Us
            </Link>
            <button 
              onClick={() => scrollToSection('cta')} 
              className="text-left py-3 px-4 text-white/80 hover:text-white"
            >
              Join Waitlist
            </button>
            <Button 
              className="mt-3 bg-[#00A3E0] hover:bg-[#008BC0] text-white glow-button-primary"
            >
              Request Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
