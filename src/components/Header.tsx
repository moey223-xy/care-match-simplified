import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img alt="Close2Heart Care Logo" src="/lovable-uploads/abac3bf4-229d-4b6b-8a32-479295e940e0.png" className="w-auto object-contain" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Home</a>
            <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">About Us</a>
            <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Our Services</a>
            <a href="#how-it-works" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">How It Works</a>
            <a href="#testimonials" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Testimonials</a>
            <a href="#partner" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Partner with Us</a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-slate-700 hover:text-blue-600 transition-colors">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">About Us</a>
              <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Our Services</a>
              <a href="#how-it-works" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">How It Works</a>
              <a href="#testimonials" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Testimonials</a>
              <a href="#partner" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Partner with Us</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors w-fit">
                Get Started
              </button>
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;