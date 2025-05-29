
import React from 'react';
import { Users, Check } from 'lucide-react';

const Partner = () => {
  const benefits = [
    "Access to a steady stream of well-matched clients",
    "Reduced admin burden - we handle coordination",
    "Fair and transparent payment processes",
    "Professional development opportunities",
    "Supportive community of like-minded professionals",
    "Ongoing business support and guidance"
  ];

  const requirements = [
    "Current NDIS registration and relevant qualifications",
    "Professional indemnity insurance",
    "Current NDIS Worker Screening Check",
    "Commitment to quality care and communication",
    "Availability for ongoing client relationships",
    "Professional references and background checks"
  ];

  return (
    <section id="partner" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
            <Users className="text-blue-600" size={20} />
            <span className="text-blue-700 font-medium">Partner with Us</span>
          </div>
          
          <h2 className="text-4xl font-bold text-slate-800">
            Join Our Network of 
            <span className="text-blue-600"> Trusted Professionals</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Are you a qualified health professional who's passionate about making a difference? 
            Join our carefully curated network and connect with clients who truly need your expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Why Partner */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-800">Why Partner with Close 2 Heart?</h3>
              <p className="text-lg text-slate-600">
                We're more than just a referral service. We're your partners in building meaningful, 
                lasting relationships with clients who genuinely value and need your expertise.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <Check className="text-blue-600" size={16} />
                  </div>
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="font-semibold text-slate-800 mb-3">🎯 Perfect Matches</h4>
              <p className="text-slate-600">
                Our thorough matching process means you'll work with clients who are genuinely 
                excited to work with you, leading to better outcomes for everyone.
              </p>
            </div>
          </div>

          {/* Right - Requirements & Process */}
          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">What We Look For</h3>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                      <Check className="text-orange-600" size={16} />
                    </div>
                    <span className="text-slate-700 text-sm">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border-2 border-slate-200 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-slate-800 mb-4">Our Application Process</h4>
              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</div>
                  <span>Submit your application and credentials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</div>
                  <span>Initial screening and reference checks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</div>
                  <span>Video interview and assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">4</div>
                  <span>Welcome to the Close 2 Heart family!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-12 rounded-3xl text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our network of passionate professionals who are changing lives every day. 
              Apply now and start your journey with Close 2 Heart.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg transition-colors">
                Apply to Join
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-colors">
                Download Info Pack
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">250+</div>
            <div className="text-slate-600">Network Professionals</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-500 mb-2">95%</div>
            <div className="text-slate-600">Partner Retention</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-slate-600">Partner Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-500 mb-2">$75k</div>
            <div className="text-slate-600">Avg. Partner Revenue</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
