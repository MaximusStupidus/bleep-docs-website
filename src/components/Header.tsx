
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
    <header className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-md bg-[#121319]/90 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
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
                <a href="#how-it-works" className="text-white/80 hover:text-white transition-colors px-3 py-2">
                  How It Works
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#why-bleep" className="text-white/80 hover:text-white transition-colors px-3 py-2">
                  Why Bleep
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors px-3 py-2">
                  About Us
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#cta" className="text-white/80 hover:text-white transition-colors px-3 py-2">
                  Join Waitlist
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button 
            className="ml-4 bg-[#00A3E0] hover:bg-[#008BC0] text-white"
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
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#121319] shadow-lg z-50 border-b border-white/10 animate-fade-in">
          <div className="flex flex-col p-4">
            <Link to="/" className="py-3 px-4 text-white/80 hover:text-white" onClick={toggleMobileMenu}>
              Home
            </Link>
            <a href="#how-it-works" className="py-3 px-4 text-white/80 hover:text-white" onClick={toggleMobileMenu}>
              How It Works
            </a>
            <a href="#why-bleep" className="py-3 px-4 text-white/80 hover:text-white" onClick={toggleMobileMenu}>
              Why Bleep
            </a>
            <Link to="/about" className="py-3 px-4 text-white/80 hover:text-white" onClick={toggleMobileMenu}>
              About Us
            </Link>
            <a href="#cta" className="py-3 px-4 text-white/80 hover:text-white" onClick={toggleMobileMenu}>
              Join Waitlist
            </a>
            <Button 
              className="mt-3 bg-[#00A3E0] hover:bg-[#008BC0] text-white"
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
