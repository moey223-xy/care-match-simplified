
import React from 'react';
import { ArrowDown } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Tell Us Your Needs",
      description: "Share your goals, preferences, location, and any specific requirements through our simple consultation process.",
      icon: "💬"
    },
    {
      number: "02", 
      title: "We Find Your Match",
      description: "Our team carefully reviews our network of verified professionals to find the perfect fit for your unique situation.",
      icon: "🔍"
    },
    {
      number: "03",
      title: "Meet & Connect",
      description: "We facilitate the introduction and coordinate the initial meeting, ensuring everything goes smoothly from day one.",
      icon: "🤝"
    },
    {
      number: "04",
      title: "Ongoing Support",
      description: "We stay connected to ensure the match is working well and provide ongoing coordination and support as needed.",
      icon: "💚"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-50 px-4 py-2 rounded-full">
            <span className="text-orange-600 text-2xl">🚀</span>
            <span className="text-orange-700 font-medium">How It Works</span>
          </div>
          
          <h2 className="text-4xl font-bold text-slate-800">
            Simple Steps to 
            <span className="text-blue-600"> Perfect Care</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our streamlined process takes the stress out of finding the right professional. 
            Just four simple steps to get you connected with the perfect match.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{step.icon}</div>
                    <div className="text-3xl font-bold text-slate-300">{step.number}</div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-slate-800">{step.title}</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">{step.description}</p>
                  </div>

                  {index === 0 && (
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-slate-800 mb-3">What we'll ask about:</h4>
                      <div className="grid sm:grid-cols-2 gap-2 text-sm text-slate-600">
                        <div>• Your goals & objectives</div>
                        <div>• Location preferences</div>
                        <div>• Scheduling needs</div>
                        <div>• Communication style</div>
                        <div>• Special requirements</div>
                        <div>• Cultural considerations</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-square bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl flex items-center justify-center text-6xl">
                    {step.icon}
                  </div>
                </div>
              </div>

              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="flex justify-center mt-12">
                  <div className="text-slate-300">
                    <ArrowDown size={32} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-12 rounded-3xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Take the first step towards finding your perfect care team. 
              Our consultation is completely free and without obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg transition-colors">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-colors">
                Call Us Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
