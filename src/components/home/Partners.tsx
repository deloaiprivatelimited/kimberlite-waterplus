import React from 'react';

const GroupCompanies = () => {
  const companies = [
    { 
      name: 'Kimberlite Chemicals', 
      src: 'https://www.kimberlitewaterplus.com/wp-content/uploads/KCIPL-LOGO-About-us.png' 
    },
    { 
      name: 'World of Chemicals', 
      src: 'https://www.kimberlitewaterplus.com/wp-content/uploads/WOC-LOGO-About-us.png' 
    },
    { 
      name: 'Kimberlite Water Plus', 
      src: 'https://www.kimberlitewaterplus.com/wp-content/uploads/LOGO-About-us.png' 
    },
    { 
      name: 'Kimberlite Softwares', 
      src: 'https://www.kimberlitewaterplus.com/wp-content/uploads/KSPL-LOGO-About-us.png' 
    }
  ];

  return (
    <div id="group-companies" className="py-20 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
            Our Ecosystem
          </h3>
          <h2 className="text-3xl font-bold text-gray-900 font-serif">
            Group Companies
          </h2>
          <div className="w-16 h-1 bg-[#0c71c3] mx-auto mt-4 mb-6"></div>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="group w-full flex justify-center items-center transition-all duration-300"
            >
              <img 
                src={company.src} 
                alt={company.name} 
                className="max-h-20 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 cursor-pointer" 
              />
            </div>
          ))}
        </div>
        
        {/* Optional Footer Line */}
        <div className="mt-16 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-500">
            Synergizing expertise across chemicals, water solutions, and technology.
          </p>
        </div>

      </div>
    </div>
  );
};

export default GroupCompanies;