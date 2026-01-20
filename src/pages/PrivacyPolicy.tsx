import React, { useState, useEffect } from 'react';

// --- Icons ---
const ShieldIcon = () => (
  <svg className="w-6 h-6 text-[#0c71c3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-6 h-6 text-[#0c71c3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const FileIcon = () => (
  <svg className="w-6 h-6 text-[#0c71c3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  const sections = [
    { id: 'introduction', label: '1. Introduction' },
    { id: 'collection', label: '2. Information We Collect' },
    { id: 'usage', label: '3. How We Use Data' },
    { id: 'sharing', label: '4. Data Sharing' },
    { id: 'security', label: '5. Security Measures' },
    { id: 'cookies', label: '6. Cookies Policy' },
    { id: 'rights', label: '7. Your Rights' },
    { id: 'contact', label: '8. Contact Us' },
  ];

  return (
    <div className="bg-white font-sans text-gray-900 selection:bg-blue-50 selection:text-blue-900">
      
      {/* 1. HERO SECTION */}
      <div className="relative pt-32 pb-20 bg-gray-50 border-b border-gray-100">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#0c71c3 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#0c71c3] font-bold tracking-widest text-xs uppercase mb-4">
            Legal & Compliance
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
            Transparency is key to our partnership. This document outlines how Kimberlite Water Plus collects, protects, and utilizes your data.
          </p>
          <p className="mt-8 text-sm text-gray-400 font-medium">
            Last Updated: January 15, 2026
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* 2. SIDEBAR NAVIGATION (Sticky) */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Table of Contents</h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-50 text-[#0c71c3]'
                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </nav>
              
              <div className="mt-10 p-6 bg-gray-900 rounded-xl text-white">
                <FileIcon />
                <h4 className="font-bold mt-4 mb-2">Need a PDF copy?</h4>
                <p className="text-xs text-gray-400 mb-4">Download this policy for your legal records.</p>
                <button className="text-xs font-bold text-[#0c71c3] hover:text-white transition-colors uppercase tracking-wider">
                  Download PDF &rarr;
                </button>
              </div>
            </div>
          </div>

          {/* 3. MAIN CONTENT */}
          <div className="lg:col-span-9">
            
            {/* Quick Summary Card */}
            <div className="bg-blue-50/50 border border-blue-100 p-8 rounded-2xl mb-16">
              <h3 className="text-lg font-serif font-bold text-[#0c71c3] mb-4 flex items-center">
                <ShieldIcon />
                <span className="ml-3">Executive Summary</span>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Kimberlite Water Plus respects your privacy. We strictly use your data to provide industrial engineering services, process orders, and improve our website experience. We <strong>never</strong> sell your personal data to third-party advertisers. All data is stored on secure, encrypted servers compliant with global industrial standards.
              </p>
            </div>

            <div className="prose prose-lg text-gray-600 max-w-none space-y-16">
              
              {/* Section 1 */}
              <section id="introduction" className="scroll-mt-28">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p>
                  Welcome to Kimberlite Water Plus ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us.
                </p>
                <p className="mt-4">
                  This Privacy Policy applies to all information collected through our website (https://www.kimberlitewaterplus.com), and/or any related services, sales, marketing, or events.
                </p>
              </section>

              {/* Section 2 */}
              <section id="collection" className="scroll-mt-28">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                <p className="mb-4">We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Data:</strong> Name, phone number, email address, and job title.</li>
                  <li><strong>Business Data:</strong> Company name, industrial sector, and plant capacity requirements.</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, and operating system (collected automatically via cookies).</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section id="usage" className="scroll-mt-28">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">3. How We Use Your Data</h2>
                <p>We use the information we collect or receive for the following business purposes:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="p-4 border border-gray-100 rounded-lg">
                    <h4 className="font-bold text-gray-900 text-sm mb-2">Service Delivery</h4>
                    <p className="text-sm">To facilitate account creation, process industrial orders, and deliver engineering consultations.</p>
                  </div>
                  <div className="p-4 border border-gray-100 rounded-lg">
                    <h4 className="font-bold text-gray-900 text-sm mb-2">Communication</h4>
                    <p className="text-sm">To send you administrative information, product updates, and technical datasheets.</p>
                  </div>
                  <div className="p-4 border border-gray-100 rounded-lg">
                    <h4 className="font-bold text-gray-900 text-sm mb-2">Compliance</h4>
                    <p className="text-sm">To enforce our terms, conditions, and policies for business purposes and to comply with legal and regulatory requirements.</p>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section id="sharing" className="scroll-mt-28">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">4. Data Sharing</h2>
                <p>
                  We may process or share your data that we hold based on the following legal basis:
                </p>
                <p className="mt-4">
                  <strong>Subsidiaries & Affiliates:</strong> We may share your information with our parent company, <em>Kimberlite Chemicals India Pvt Ltd</em>, and affiliates (e.g., <em>World of Chemicals</em>) to offer integrated industrial solutions.
                </p>
                <p className="mt-4">
                  <strong>Business Partners:</strong> We may share your information with our strategic partners (e.g., <em>Pall Water, Celar Water</em>) solely for the purpose of executing specific engineering projects you have requested.
                </p>
              </section>

              {/* Section 5 */}
              <section id="security" className="scroll-mt-28">
                <div className="flex items-center mb-4">
                   <LockIcon /> 
                   <h2 className="text-2xl font-serif font-bold text-gray-900 ml-2">5. Security Measures</h2>
                </div>
                <p>
                  We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our Website is at your own risk.
                </p>
              </section>

              {/* Section 6 */}
              <section id="cookies" className="scroll-mt-28">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">6. Cookies Policy</h2>
                <p>
                  We use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
                </p>
              </section>

              {/* Section 7 */}
              <section id="rights" className="scroll-mt-28">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">7. Your Rights</h2>
                <p>
                  Depending on your location, you may have the following rights regarding your personal data:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>The right to request access and obtain a copy of your personal information.</li>
                  <li>The right to request rectification or erasure.</li>
                  <li>The right to restrict the processing of your personal information.</li>
                </ul>
              </section>

              {/* Section 8 */}
              <section id="contact" className="scroll-mt-28 mb-12">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">8. Contact Us</h2>
                <p>
                  If you have questions or comments about this policy, you may email our Data Protection Officer (DPO) at:
                </p>
                <div className="mt-6 p-6 bg-gray-50 rounded-xl inline-block pr-12">
                  <p className="font-bold text-gray-900">Kimberlite Water Plus Pvt Ltd.</p>
                  <p className="text-sm mt-1">Industrial Area Phase II</p>
                  <p className="text-sm">New Delhi, India - 110020</p>
                  <a href="mailto:privacy@kimberlitewater.com" className="text-[#0c71c3] font-medium mt-4 block hover:underline">
                    privacy@kimberlitewater.com
                  </a>
                </div>
              </section>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;