import React from 'react';
import { Contact, FileText, Users } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="text-2xl font-bold">
              Close <span className="text-blue-400">2</span> Heart
            </div>
            <p className="text-slate-300 leading-relaxed">
              Connecting NDIS participants with trusted health professionals. 
              Taking the stress out of finding the right care.
            </p>
            <div className="text-sm text-slate-400">
              ABN: 12 345 678 901<br />
              NDIS Registered Provider
            </div>
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
                  <div className="font-semibold">1300 CLOSE2</div>
                  <div className="text-sm">(1300 256 732)</div>
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
                  <div>Brisbane • Gold Coast </div>
                  <div>
                </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-700 p-4 rounded-xl">
              <div className="text-sm font-semibold text-white mb-1">Emergency Support</div>
              <div className="text-lg font-bold text-orange-400">1300 URGENT</div>
              <div className="text-xs text-slate-400">24/7 for urgent situations</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">© 2025 Close 2 Heart Care. All rights reserved.</div>
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