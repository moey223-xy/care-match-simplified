import React from 'react';
import { Contact, FileText, Users } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img alt="Close2Heart Care Logo" className="" src="/lovable-uploads/bb7a9a79-6b1f-4ab1-ba00-15cef2531f83.png" />
            </div>
            <p className="text-slate-300 leading-relaxed">
              Connecting NDIS participants with trusted health professionals. 
              Taking the stress out of finding the right care.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <div className="space-y-3 text-slate-300">
              <a href="#services" className="block hover:text-white transition-colors">Occupational Therapy</a>
              <a href="#services" className="block hover:text-white transition-colors">Physiotherapy</a>
              <a href="#services" className="block hover:text-white transition-colors">Speech Pathology</a>
              <a href="#services" className="block hover:text-white transition-colors">Psychology Services</a>
              <a href="#services" className="block hover:text-white transition-colors">Support Coordination</a>
              <a href="#services" className="block hover:text-white transition-colors">Allied Health</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-3 text-slate-300">
              <a href="#about" className="block hover:text-white transition-colors">About Us</a>
              <a href="#how-it-works" className="block hover:text-white transition-colors">How It Works</a>
              <a href="#testimonials" className="block hover:text-white transition-colors">Success Stories</a>
              <a href="#partner" className="block hover:text-white transition-colors">Partner with Us</a>
              <a href="#contact" className="block hover:text-white transition-colors">Contact</a>
              <a href="#" className="block hover:text-white transition-colors">FAQs</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Contact className="text-blue-400 mt-1" size={18} />
                <div className="text-slate-300">
                  <div className="font-semibold">0434 768 520</div>
                  
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FileText className="text-blue-400 mt-1" size={18} />
                <div className="text-slate-300">
                  <div>info@close2heart.com.au</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="text-blue-400 mt-1" size={18} />
                <div className="text-slate-300 text-sm">
                  <div>Brisbane • Gold Coast</div>
                </div>
              </div>
            </div>

            
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">© 2025 Close2Heart Care. All rights reserved.</div>
            <div className="flex space-x-6 text-slate-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
              <a href="#" className="hover:text-white transition-colors">NDIS Code of Conduct</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;