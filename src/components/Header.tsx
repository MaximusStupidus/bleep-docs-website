
import React, { useState } from 'react';
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 border-b border-bleep-neutral z-50 backdrop-blur-sm bg-white/80">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-bleep-blue-dark">
            <span className="text-bleep-blue">Bleep</span>
            <span className="text-bleep-green">.</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/why-bleep" className="text-bleep-neutral-dark hover:text-bleep-blue transition-colors px-3 py-2">
                  Why Bleep?
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/features" className="text-bleep-neutral-dark hover:text-bleep-blue transition-colors px-3 py-2">
                  Features
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/blog" className="text-bleep-neutral-dark hover:text-bleep-blue transition-colors px-3 py-2">
                  Blog
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className="text-bleep-neutral-dark hover:text-bleep-blue transition-colors px-3 py-2">
                  About Us
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/pricing" className="text-bleep-neutral-dark hover:text-bleep-blue transition-colors px-3 py-2">
                  Pricing
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button 
            className="glow-button bg-white text-bleep-blue border border-bleep-blue hover:bg-bleep-blue-light hover:text-bleep-blue-dark transition-colors"
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
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50 border-b border-bleep-neutral animate-fade-in">
          <div className="flex flex-col p-4">
            <Link to="/why-bleep" className="py-3 px-4 text-bleep-neutral-dark hover:text-bleep-blue" onClick={toggleMobileMenu}>
              Why Bleep?
            </Link>
            <Link to="/features" className="py-3 px-4 text-bleep-neutral-dark hover:text-bleep-blue" onClick={toggleMobileMenu}>
              Features
            </Link>
            <Link to="/blog" className="py-3 px-4 text-bleep-neutral-dark hover:text-bleep-blue" onClick={toggleMobileMenu}>
              Blog
            </Link>
            <Link to="/about" className="py-3 px-4 text-bleep-neutral-dark hover:text-bleep-blue" onClick={toggleMobileMenu}>
              About Us
            </Link>
            <Link to="/pricing" className="py-3 px-4 text-bleep-neutral-dark hover:text-bleep-blue" onClick={toggleMobileMenu}>
              Pricing
            </Link>
            <Button 
              className="glow-button mt-3 bg-white text-bleep-blue border border-bleep-blue hover:bg-bleep-blue-light hover:text-bleep-blue-dark transition-colors"
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
