import React from 'react';
import { Users, Check } from 'lucide-react';
const About = () => {
  return <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
                <Users className="text-blue-600" size={20} />
                <span className="text-blue-700 font-medium">About Close 2 Heart Care</span>
              </div>
              
              <h2 className="text-4xl font-bold text-slate-800">
                Bridging the Gap Between 
                <span className="text-blue-600"> Care & Community</span>
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                At Close 2 Heart, we understand that finding the right health professional can be overwhelming. 
                That's why we've created a personalized matching service that takes the stress out of 
                connecting NDIS participants with the perfect care team.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <Check className="text-blue-600" size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Compassionate Matching</h4>
                  <p className="text-slate-600">We take time to understand your unique needs, preferences, and goals.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <Check className="text-blue-600" size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Trusted Network</h4>
                  <p className="text-slate-600">All our professionals are thoroughly vetted and continuously monitored.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <Check className="text-blue-600" size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Ongoing Support</h4>
                  <p className="text-slate-600">We're with you every step of the way, ensuring everything runs smoothly.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-3xl">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-slate-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">98%</div>
                  <div className="text-slate-600 font-medium">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">250+</div>
                  <div className="text-slate-600 font-medium">Trusted Professionals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
                  <div className="text-slate-600 font-medium">Happy Participants</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Close 2 Heart found us the perfect occupational therapist for our daughter. 
                The match was so natural, it felt like they understood exactly what we needed."
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div>
                  <div className="font-semibold text-slate-800">Sarah M.</div>
                  <div className="text-slate-600 text-sm">Parent & Carer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;