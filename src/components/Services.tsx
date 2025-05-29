
import React from 'react';
import { Users, Contact, FileText } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Occupational Therapy",
      description: "Expert occupational therapists who help develop daily living skills and independence.",
      features: ["Sensory integration", "Fine motor skills", "Activities of daily living", "Equipment recommendations"]
    },
    {
      icon: Contact,
      title: "Physiotherapy",
      description: "Qualified physiotherapists focused on improving mobility, strength, and physical wellbeing.",
      features: ["Movement therapy", "Strength building", "Pain management", "Mobility aids"]
    },
    {
      icon: FileText,
      title: "Speech Pathology",
      description: "Certified speech pathologists supporting communication and swallowing difficulties.",
      features: ["Communication devices", "Language development", "Social communication", "Swallowing therapy"]
    },
    {
      icon: Users,
      title: "Psychology Services",
      description: "Registered psychologists providing mental health support and behavioral interventions.",
      features: ["Behavioral support", "Mental health care", "Coping strategies", "Family counseling"]
    },
    {
      icon: Contact,
      title: "Support Coordination",
      description: "Professional support coordinators to help navigate your NDIS plan effectively.",
      features: ["Plan implementation", "Service coordination", "Goal setting", "Plan reviews"]
    },
    {
      icon: FileText,
      title: "Allied Health Services",
      description: "A comprehensive range of other allied health professionals as needed.",
      features: ["Dietitians", "Social workers", "Music therapists", "Art therapists"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
            <Users className="text-blue-600" size={20} />
            <span className="text-blue-700 font-medium">Our Services</span>
          </div>
          
          <h2 className="text-4xl font-bold text-slate-800">
            Comprehensive Care 
            <span className="text-blue-600"> Across All Disciplines</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We connect you with verified professionals across a wide range of specialties, 
            ensuring you get the right support for your unique needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
              <div className="space-y-6">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <service.icon className="text-white" size={24} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-800">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                  
                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button className="w-full bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 py-3 rounded-xl font-medium transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Don't See What You Need?
            </h3>
            <p className="text-slate-600 mb-6">
              We work with professionals across many specialties. Let us know what you're looking for.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
