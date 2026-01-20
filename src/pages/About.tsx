import React, { useState } from 'react';

// SVG Icons for visual clarity
const VisionIcon = () => (
  <svg className="w-8 h-8 text-[#0c71c3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const MissionIcon = () => (
  <svg className="w-8 h-8 text-[#0c71c3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const ValuesIcon = () => (
  <svg className="w-8 h-8 text-[#0c71c3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('who');

  const tabs = [
    { id: 'who', label: 'Who We Are' },
    { id: 'group', label: 'Kimberlite Group' },
    { id: 'mission', label: 'Mission & Values' },
    { id: 'expertise', label: 'Our Expertise' },
  ];

  return (
    <div className="bg-white font-sans text-gray-900 selection:bg-blue-50 selection:text-blue-900">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.kimberlitewaterplus.com/wp-content/uploads/splashing-165192_1280.jpg" 
            alt="Water Splashing" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 text-xs font-bold tracking-[0.2em] uppercase mb-6">
            Est. 1997
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg">
            One Stop <span className="text-blue-200">Water Solution</span>
          </h1>
          <p className="text-xl text-blue-50 font-light max-w-2xl mx-auto leading-relaxed">
            Delivering comprehensive, integrated, and custom-made water solutions to upgrade industrial infrastructure.
          </p>
        </div>
      </div>

      {/* 2. TAB NAVIGATION */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-4 md:space-x-12 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-5 text-sm font-medium tracking-wide transition-all whitespace-nowrap border-b-2 ${
                  activeTab === tab.id
                    ? 'border-[#0c71c3] text-[#0c71c3]'
                    : 'border-transparent text-gray-500 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. DYNAMIC CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 py-20 min-h-[600px]">
        
        {/* TAB 1: WHO WE ARE (Includes Stats) */}
        {activeTab === 'who' && (
          <div className="max-w-5xl mx-auto fade-in">
            <div className="space-y-12">
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">Water Solutions</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Kimberlite Water Plus Pvt Ltd is a wholly owned subsidiary of Kimberlite Chemicals India Pvt Ltd, Bengaluru. We provide comprehensive, integrated, and custom-made water solutions to industries to upgrade existing and new water & waste treatment plants.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8 border-t border-gray-100">
                <div className="pl-6 border-l-4 border-[#0c71c3]">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">We Supply</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Industrial Water & Waste Water treatment equipment, systems, chemicals, and services to improve operational consistency, reduce production costs, and support environmental compliance.
                  </p>
                </div>
                <div className="pl-6 border-l-4 border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Our Experience</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Decades of experience in manufacturing specialty chemicals for industrial applications with innovative solutions that contribute to sustainable development.
                  </p>
                </div>
              </div>

              {/* STATS STRIP (Moved Inside Tab) */}
              <div className="bg-gray-900 rounded-2xl p-10 text-white mt-12 shadow-xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-700">
                  {[
                    { label: "Industry Experience", val: "30 Years" },
                    { label: "Global Presence", val: "40+ Countries" },
                    { label: "Expert Support", val: "Certified Team" },
                    { label: "Customer Service", val: "24/7" },
                  ].map((stat, i) => (
                    <div key={i} className="pl-4">
                      <div className="text-3xl font-serif font-bold mb-2 text-[#0c71c3]">{stat.val}</div>
                      <div className="text-xs uppercase tracking-widest text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: KIMBERLITE GROUP (Includes Channel Partners) */}
        {activeTab === 'group' && (
          <div className="fade-in">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">The Corporate Ecosystem</h2>
              <p className="text-gray-600">
                Incorporated in 1997 in India, serving customers globally from our corporate office & manufacturing plant in Bengaluru.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
               {[
                 { title: "Leading Manufacturer", icon: "🏭", desc: "Specialty chemicals for diverse industrial applications." },
                 { title: "Global Reach", icon: "🌍", desc: "Exporting products to over 40 countries." },
                 { title: "In-House Production", icon: "⚗️", desc: "Acrylic Polymers, Phosphonates, Biocides, and more." },
                 { title: "ISO 9001:2015", icon: "✅", desc: "FDA approved lab, Halal & Kosher certified products." }
               ].map((item, idx) => (
                 <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                   <div className="text-4xl mb-4">{item.icon}</div>
                   <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                   <p className="text-sm text-gray-500">{item.desc}</p>
                 </div>
               ))}
            </div>

            <h3 className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Group Companies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center grayscale hover:grayscale-0 transition-all duration-500 mb-20 border-b border-gray-100 pb-16">
                <img src="https://www.kimberlitewaterplus.com/wp-content/uploads/KCIPL-LOGO-About-us.png" alt="Kimberlite Chemicals" className="max-h-16 object-contain" />
                <img src="https://www.kimberlitewaterplus.com/wp-content/uploads/WOC-LOGO-About-us.png" alt="World of Chemicals" className="max-h-16 object-contain" />
                <img src="https://www.kimberlitewaterplus.com/wp-content/uploads/LOGO-About-us.png" alt="Kimberlite Water Plus" className="max-h-16 object-contain" />
                <img src="https://www.kimberlitewaterplus.com/wp-content/uploads/KSPL-LOGO-About-us.png" alt="Kimberlite Softwares" className="max-h-16 object-contain" />
            </div>

            {/* CHANNEL PARTNERS (Moved Inside Tab) */}
            <div className="bg-blue-50/50 rounded-2xl p-12 border border-blue-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Strategic Channel Partners</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Kimberlite Water Plus has collaborated with <span className="font-bold text-[#0c71c3]">Celar Water</span> & <span className="font-bold text-[#0c71c3]">Pall Water</span> to provide world-class water treatment projects to heavy industries.
                    </p>
                  </div>
                  <div className="flex gap-8 justify-center lg:justify-end">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <img src="https://www.kimberlitewaterplus.com/wp-content/uploads/Ceor.jpg" alt="Celar Water" className="h-10 w-auto grayscale hover:grayscale-0 transition-all" />
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <img src="https://www.kimberlitewaterplus.com/wp-content/uploads/Pall_Water_2021.jpg" alt="Pall Water" className="h-10 w-auto grayscale hover:grayscale-0 transition-all" />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        )}

        {/* TAB 3: MISSION & VALUES */}
        {activeTab === 'mission' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 fade-in">
            <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 hover:bg-blue-50 transition-colors">
              <div className="mb-6"><VisionIcon /></div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide sustainable water treatment solutions to our customers through expertise.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg relative transform lg:-translate-y-4">
              <div className="mb-6"><MissionIcon /></div>
              <h3 className="text-xl font-serif font-bold text-[#0c71c3] mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide our customers with the most professional, proficient, and reliable products. We aim to exploit treatment systems to increase water usage efficacy.
              </p>
            </div>

            <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 hover:bg-blue-50 transition-colors">
              <div className="mb-6"><ValuesIcon /></div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Customer care is of the utmost priority. We pride ourselves on outstanding service and tailored solutions.
              </p>
            </div>
            
            <div className="lg:col-span-3 mt-8 rounded-2xl overflow-hidden h-64 relative">
               <img src="https://www.kimberlitewaterplus.com/wp-content/uploads/shaking-hands-3096229_1920-1.jpg" alt="Partnership" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                 <p className="text-white font-medium text-lg">Building lasting partnerships through trust and compliance.</p>
               </div>
            </div>
          </div>
        )}

        {/* TAB 4: EXPERTISE (Includes Certificates) */}
        {activeTab === 'expertise' && (
          <div className="max-w-5xl mx-auto fade-in">
            <div className="prose prose-lg text-gray-600 mb-16">
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">Engineering Mastery</h3>
              <p className="leading-relaxed">
                Our understanding of the chemical and engineering issues within industrial environments allows Kimberlite Water Plus to develop tailor-made solutions for specific client requirements.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  "Process efficiency optimization",
                  "Regulatory & environmental compliance",
                  "Customized chemical formulations",
                  "Advanced membrane technologies"
                ].map((item, i) => (
                  <div key={i} className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <span className="w-2 h-2 bg-[#0c71c3] rounded-full mr-4 shrink-0"></span>
                    <span className="font-medium text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CERTIFICATES (Moved Inside Tab) */}
            <div className="border-t border-gray-100 pt-16">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-gray-900 font-serif">Certifications & Approvals</h3>
                <p className="text-gray-500 mt-2">Recognized quality and safety standards.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  "https://www.kimberlitewaterplus.com/wp-content/uploads/Certificate_2.jpg",
                  "https://www.kimberlitewaterplus.com/wp-content/uploads/Certificate_5.jpg",
                  "https://www.kimberlitewaterplus.com/wp-content/uploads/Certificate_4.jpg",
                  "https://www.kimberlitewaterplus.com/wp-content/uploads/Certificate_6.jpg"
                ].map((src, i) => (
                  <div key={i} className="bg-white p-3 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer group">
                    <img src={src} alt="Certificate" className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default AboutPage;