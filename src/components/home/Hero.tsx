import React from 'react';

const Hero = () => {
  const handleScrollToSolutions = () => {
    const solutionsSection = document.getElementById('solutions');
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Background Pattern - Inline style used for specific radial gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundColor: '#1a202c',
          backgroundImage: 'radial-gradient(#2d3748 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6 font-serif">
          Engineered <span className="text-[#0c71c3]">Water Intelligence</span>
          <br className="hidden sm:block" /> for Global Industry
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
          Comprehensive, regulatory-compliant water and wastewater infrastructure designed for operational excellence.
        </p>
        
        <div className="mt-10 flex justify-center gap-4">
          <button 
            onClick={handleScrollToSolutions}
            className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#0c71c3] bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 cursor-pointer shadow-lg transition duration-150 ease-in-out"
          >
            Explore Solutions
          </button>
        </div>
        
        <p className="mt-6 text-sm text-gray-400 uppercase tracking-widest">
          Supporting New & Existing Plants • Global Compliance
        </p>
      </div>
    </div>
  );
};

export default Hero;