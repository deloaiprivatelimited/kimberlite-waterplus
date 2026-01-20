import React from 'react';

// --- Icons ---
const WaterIcon = () => (
  <svg className="w-8 h-8 text-[#0c71c3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const TeamIcon = () => (
  <svg className="w-8 h-8 text-[#0c71c3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const ChallengeIcon = () => (
  <svg className="w-8 h-8 text-[#0c71c3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const ArrowRight = () => (
  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const Careers = () => {
  return (
    <div className="bg-white font-sans text-gray-900 selection:bg-blue-50 selection:text-blue-900">
      
      {/* 1. HERO SECTION */}
      <div className="relative py-24 bg-gray-50 border-b border-gray-100 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-60"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#0c71c3] font-bold tracking-widest text-xs uppercase mb-4">
            Join Our Mission
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Careers at <br className="hidden md:block" />
            <span className="text-[#0c71c3]">Kimberlite Water Plus</span>
          </h1>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
            We are currently looking for exceptional people to join our team and help shape the future of industrial sustainability.
          </p>
        </div>
      </div>

      {/* 2. IS THIS YOU? (The "If..." Conditions) */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-serif font-bold text-gray-900">Is this the role for you?</h2>
          <div className="w-12 h-1 bg-[#0c71c3] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Expertise */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0c71c3] group-hover:text-white transition-colors duration-300">
              <WaterIcon />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Industry Expertise</h3>
            <p className="text-gray-600 leading-relaxed">
              If you have deep knowledge about <span className="font-semibold text-[#0c71c3]">industrial water & wastewater treatment</span> processes and technologies.
            </p>
          </div>

          {/* Card 2: Teamwork */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0c71c3] group-hover:text-white transition-colors duration-300">
              <TeamIcon />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Collaborative Spirit</h3>
            <p className="text-gray-600 leading-relaxed">
              If you enjoy working with an <span className="font-semibold text-[#0c71c3]">insightful and inspirational team</span> driven by engineering excellence.
            </p>
          </div>

          {/* Card 3: Challenge */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0c71c3] group-hover:text-white transition-colors duration-300">
              <ChallengeIcon />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Growth Mindset</h3>
            <p className="text-gray-600 leading-relaxed">
              If you are looking for a <span className="font-semibold text-[#0c71c3]">challenging opportunity</span> with a different task every day.
            </p>
          </div>

        </div>
      </div>

      {/* 3. APPLICATION CTA */}
      <div className="bg-[#0b1c2c] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">
            Ready to make an impact?
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            We are always eager to meet talented professionals. If the points above resonate with you, we would love to hear from you.
          </p>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-xl mx-auto">
            <p className="text-gray-300 text-sm uppercase tracking-widest mb-4">Send your application to</p>
            <a 
              href="mailto:info@kimberlitewaterplus.com" 
              className="text-2xl md:text-3xl font-bold text-white hover:text-[#0c71c3] transition-colors break-all"
            >
              info@kimberlitewaterplus.com
            </a>
            <div className="mt-8">
              <a 
                href="mailto:info@kimberlitewaterplus.com"
                className="inline-flex items-center px-8 py-4 bg-[#0c71c3] hover:bg-[#095593] text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                Forward Updated CV <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Careers;