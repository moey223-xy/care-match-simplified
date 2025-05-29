import React from 'react';
import { Contact as ContactIcon, ArrowUp } from 'lucide-react';
const Contact = () => {
  return <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-50 px-4 py-2 rounded-full">
            <ContactIcon className="text-orange-600" size={20} />
            <span className="text-orange-700 font-medium">Get in Touch</span>
          </div>
          
          <h2 className="text-4xl font-bold text-slate-800">
            Ready to Start Your 
            <span className="text-blue-600"> Journey?</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We're here to help you find the perfect match. Reach out today for a free, 
            no-obligation consultation about your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your last name" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your.email@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                <input type="tel" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your phone number" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">I'm looking for</label>
                <select className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select a service type</option>
                  <option>Occupational Therapy</option>
                  <option>Physiotherapy</option>
                  <option>Speech Pathology</option>
                  <option>Psychology Services</option>
                  <option>Support Coordination</option>
                  <option>Other Allied Health</option>
                  <option>Multiple Services</option>
                  <option>Not Sure - Need Guidance</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Tell us about your needs, goals, or any specific requirements..."></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition-colors">
                Send Message
              </button>
            </form>
          </div>

          {/* Right - Contact Info & Quick Actions */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h4 className="text-lg font-bold text-slate-800 mb-4">📞 Call Us Today</h4>
                <p className="text-slate-600 mb-4">
                  Speak with our friendly team who can answer your questions and start the matching process.
                </p>
                <div className="text-2xl font-bold text-blue-600 mb-4">1300 CLOSE2 (1300 256 732)</div>
                <div className="text-sm text-slate-600">
                  <div>
                </div>
                  <div>Saturday: 9:00am - 1:00pm</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h4 className="text-lg font-bold text-slate-800 mb-4">✉️ Email Us</h4>
                <p className="text-slate-600 mb-4">
                  Send us an email and we'll get back to you within 24 hours.
                </p>
                <div className="text-lg font-semibold text-blue-600">info@close2heart.com.au</div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h4 className="text-lg font-bold text-slate-800 mb-4">📍 Our Locations</h4>
                <div className="space-y-3 text-slate-600">
                  <div>
                    <div className="font-semibold">Brisbane</div>
                    <div className="text-sm">Serving Greater Brisbane</div>
                  </div>
                  <div>
                    <div className="font-semibold">Gold Coast</div>
                    <div className="text-sm">Serving Greater Gold Coast</div>
                  </div>
                  <div>
                    <div className="font-semibold">Brisbane Office</div>
                    <div className="text-sm">Serving Greater Brisbane & surrounds</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-2xl">
              <h4 className="text-lg font-bold mb-3">🚨 Urgent Support Needed?</h4>
              <p className="text-orange-100 text-sm mb-4">
                If you need immediate assistance or have an urgent matching request, call our priority line.
              </p>
              <div className="text-xl font-bold">1300 URGENT (1300 874 368)</div>
              <div className="text-orange-100 text-sm mt-2">Available 24/7 for urgent situations</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Not Sure Where to Start?
            </h3>
            <p className="text-slate-600 mb-6">
              Book a free 15-minute consultation call where we can discuss your needs 
              and explain how our matching process works.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg hover:shadow-xl">
              Book Free Consultation
            </button>
          </div>
        </div>

        {/* Back to Top */}
        <div className="mt-16 text-center">
          <button onClick={() => window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })} className="inline-flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors">
            <ArrowUp size={20} />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </section>;
};
export default Contact;