import React, { useState } from 'react';

// --- Icons ---
const MapIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert("Thank you. Our engineering team will contact you shortly.");
  };

  return (
    <div className="bg-white font-sans text-gray-900 selection:bg-blue-50 selection:text-blue-900">
      
      {/* 1. HERO SECTION */}
      <div className="relative pt-32 pb-20 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#0c71c3 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#0c71c3] font-bold tracking-widest text-xs uppercase mb-4">
            Get in Touch
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Let's Engineer Your <br /><span className="text-[#0c71c3]">Water Solution.</span>
          </h1>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
            Our technical experts are ready to assist with plant upgrades, chemical requirements, and compliance consultations.
          </p>
        </div>
      </div>

      {/* 2. MAIN CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Global Headquarters</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                Located in New Delhi, our central office coordinates manufacturing, R&D, and global distribution for all Kimberlite Group subsidiaries.
              </p>
            </div>

            <div className="space-y-6">
              {/* Address Card */}
              <div className="flex items-start p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-50 p-3 rounded-lg text-[#0c71c3] shrink-0 mr-4">
                  <MapIcon />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Corporate Office</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Industrial Area Phase II,<br />
                    New Delhi, India - 110020
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-start p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-50 p-3 rounded-lg text-[#0c71c3] shrink-0 mr-4">
                  <PhoneIcon />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Direct Line</h3>
                  <p className="text-gray-500 text-sm mb-1">+91 11 2345 6789</p>
                  <p className="text-gray-400 text-xs uppercase tracking-wide">Mon-Fri, 9am - 6pm IST</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-start p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-50 p-3 rounded-lg text-[#0c71c3] shrink-0 mr-4">
                  <MailIcon />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Engineering Support</h3>
                  <p className="text-gray-500 text-sm">info@kimberlitewater.com</p>
                  <p className="text-gray-500 text-sm">support@kimberlitewater.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-xl shadow-blue-900/5">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#0c71c3] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#0c71c3] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="+91..."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                <input 
                  type="text" 
                  id="company"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#0c71c3] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  placeholder="Industrial Ltd."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#0c71c3] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#0c71c3] focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                  placeholder="Tell us about your water treatment requirements..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 px-6 bg-[#0c71c3] hover:bg-[#095593] text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Submit Request
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* 3. MAP SECTION */}
      <div className="w-full h-96 bg-gray-200 relative grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          title="Kimberlite Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52728034389636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1625687451234!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy"
        ></iframe>
      </div>

    </div>
  );
};

export default Contact;