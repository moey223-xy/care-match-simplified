
import React from 'react';
import { Users } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emma Thompson",
      role: "Parent & Primary Carer",
      content: "Close 2 Heart found us the most wonderful occupational therapist for my son with autism. The match was perfect - she understood his needs immediately and has made such a difference in his daily life. The whole process was so smooth and stress-free.",
      initial: "E",
      rating: 5
    },
    {
      name: "Michael Chen", 
      role: "NDIS Participant",
      content: "After years of struggling to find the right physiotherapist, Close 2 Heart connected me with someone who truly gets it. They understood my specific needs and found someone local who could work with my schedule. Couldn't be happier!",
      initial: "M",
      rating: 5
    },
    {
      name: "Sarah & David Wilson",
      role: "Parents",
      content: "We were overwhelmed trying to coordinate all the different therapies our daughter needed. Close 2 Heart not only found amazing professionals but helped coordinate everything. It's been life-changing for our whole family.",
      initial: "S",
      rating: 5
    },
    {
      name: "James Rodriguez",
      role: "NDIS Participant", 
      content: "The support coordinator they matched me with has been incredible. She helps me understand my plan, connects me with services, and always checks in to make sure everything's going well. Such a professional service.",
      initial: "J",
      rating: 5
    },
    {
      name: "Lisa Park",
      role: "Grandmother & Carer",
      content: "When my grandson came to live with me, I had no idea how to navigate the NDIS system. Close 2 Heart guided us through everything and found a speech pathologist who has helped him communicate so much better.",
      initial: "L",
      rating: 5
    },
    {
      name: "Alex Morgan",
      role: "NDIS Participant",
      content: "I was skeptical at first, but Close 2 Heart really delivered. They found me a psychologist who specializes in my specific needs and the chemistry was perfect from the first session. The matching process really works.",
      initial: "A",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-50 px-4 py-2 rounded-full">
            <Users className="text-orange-600" size={20} />
            <span className="text-orange-700 font-medium">Success Stories</span>
          </div>
          
          <h2 className="text-4xl font-bold text-slate-800">
            Real Stories from 
            <span className="text-blue-600"> Real Families</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hear from NDIS participants and their families about how Close 2 Heart 
            has made a difference in their journey to finding the right care.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
              <div className="space-y-6">
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400">⭐</div>
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-slate-700 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-4 border-t border-slate-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">{testimonial.name}</div>
                    <div className="text-slate-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-slate-600">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">95%</div>
                <div className="text-slate-600">Successful First Matches</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24hrs</div>
                <div className="text-slate-600">Average Response Time</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Write Your Success Story?</h3>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg hover:shadow-xl">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
