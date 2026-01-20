import React from 'react';

const Partners = () => {
  const partners = [
    { name: 'BRAND', suffix: 'ONE', subtext: 'Industrial Leader' },
    { name: 'SUGAR', suffix: 'CORP', subtext: 'Sector Authority' },
    { name: 'PETRO', suffix: 'TECH', subtext: 'Global Partner' },
    { name: 'PHARMA', suffix: 'PLUS', subtext: 'Quality Focused' },
    { name: 'INFRA', suffix: 'GO', subtext: 'Urban Development' }
  ];

  return (
    <div id="partners" className="py-20 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
            Trusted by Leading Brands
          </h2>
          <div className="w-20 h-1 bg-[#0c71c3] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our products and solutions are the choice of industry leaders across the industrial, commercial, and infrastructure sectors. These long-term partnerships are built on quality, innovation, and customer-focused service.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="group flex justify-center p-8 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:scale-105 cursor-default"
            >
              <div className="text-center opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                <div className="font-bold text-gray-400 text-xl tracking-tighter group-hover:text-gray-900">
                  {partner.name}<span className="text-[#0c71c3]">{partner.suffix}</span>
                </div>
                <div className="text-[10px] uppercase text-gray-400 tracking-widest mt-1 group-hover:text-[#0c71c3]">
                  {partner.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 font-medium">
            Over 500+ successful installations across industrial complexes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partners;