import React, { useState } from 'react';

const Industries = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const industriesList = [
    "Sugar & Ethanol", "Power", "Textile", "Steel", 
    "Pharmaceutical", "Fertilizer", "Petrochemical", "Pulp & Paper", 
    "Paint", "Dairy", "Oil & Gas", "Mining", 
    "Leather", "Cement", "Food & Beverage", "Construction", 
    "Automobile", "Airport", "Hospital", "Hotel", 
    "Ceramic", "Rice Mill", "Confectionery", "Commercial Complexes"
  ];

  // Filter logic
  const filteredIndustries = industriesList.filter(industry =>
    industry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="industries" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-gray-900 font-serif">
              Industries We Serve
            </h2>
            <p className="mt-4 text-gray-600">
              Tailored wastewater and water solutions for 20+ specialized sectors worldwide.
            </p>
          </div>

          {/* Right Column: Search & Grid */}
          <div className="lg:col-span-2">

            {/* Grid Display */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 h-64 overflow-y-auto pr-2 custom-scrollbar">
              {filteredIndustries.length > 0 ? (
                filteredIndustries.map((industry, index) => (
                  <div 
                    key={index} 
                    className="bg-white border border-gray-100 rounded-lg p-3 text-sm text-center text-gray-600 hover:text-[#0c71c3] transition-colors shadow-sm cursor-default flex items-center justify-center"
                  >
                    {industry}
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center text-gray-500 py-4">
                  No industries found matching "{searchTerm}"
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Industries;