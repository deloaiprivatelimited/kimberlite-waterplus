import React from 'react';
import { 
  Droplets, 
  Factory, 
  ArrowRight, 
  Beaker 
} from 'lucide-react';

const SpecialtyChemicalsOverview = () => {
  return (
    <div className="bg-white font-sans text-gray-900 selection:bg-blue-50 selection:text-blue-900">
      
      {/* 1. INTRO HEADER */}
      <div className="relative pt-20 pb-16 bg-gray-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/3 translate-y-1/3"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-[#0c71c3] text-xs font-bold uppercase tracking-widest mb-6">
            <Beaker className="w-4 h-4" />
            <span>Industrial Expertise</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Kimberlite Specialty Chemicals
          </h1>
          
          <div className="prose prose-lg text-gray-600 mx-auto leading-relaxed">
            <p className="mb-4">
              We offer a wide portfolio of products for all applications along with full service supports to meet your needs. Our talented team is made up of individuals with proven experiences in <span className="text-gray-900 font-medium">Industrial Water Treatment</span> & <span className="text-gray-900 font-medium">Sugar Process Industries</span>.
            </p>
            <p>
              Our Understanding of the chemical and engineering issues within these environments allows Kimberlite to develop tailor made solutions to the particular requirements of our client’s operation.
            </p>
          </div>
        </div>
      </div>

      {/* 2. SPLIT FEATURE CARDS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Water Treatment */}
          <div className="group relative h-[500px] rounded-2xl overflow-hidden shadow-xl cursor-pointer">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="https://www.kimberlitewaterplus.com/wp-content/uploads/Untitled-design-68.png" 
                alt="Water Treatment" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay - Blue/Teal for Water */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e4061] via-[#0e4061]/80 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="bg-white/10 backdrop-blur-sm w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-white border border-white/20">
                <Droplets className="w-6 h-6" />
              </div>
              
              <h2 className="text-3xl font-serif font-bold text-white mb-4">
                Water Treatment
              </h2>
              
              <p className="text-gray-200 text-lg mb-8 line-clamp-3">
                We offer wide range of products that contribute to sustaining and enhancing efficiency in manufacturing processes for boiler, cooling, and membrane systems.
              </p>

              <a href="/technologies" className="inline-flex items-center group/btn text-white font-bold tracking-wide uppercase text-sm">
                See Full Range
                <span className="ml-2 bg-white/20 rounded-full p-1 transition-transform group-hover/btn:translate-x-2">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>

          {/* Card 2: Sugar Process */}
          <div className="group relative h-[500px] rounded-2xl overflow-hidden shadow-xl cursor-pointer">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="https://www.kimberlitewaterplus.com/wp-content/uploads/CFImage1.jpg" 
                alt="Sugar Process" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay - Amber/Brown for Sugar/Industrial */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#8B4513] via-[#8B4513]/80 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="bg-white/10 backdrop-blur-sm w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-white border border-white/20">
                <Factory className="w-6 h-6" />
              </div>
              
              <h2 className="text-3xl font-serif font-bold text-white mb-4">
                Sugar Process
              </h2>
              
              <p className="text-gray-200 text-lg mb-8">
                The Sugar industry is one of the major economic Industry in India. Kimberlite Water Plus has always been a strategic partner in optimizing production efficiency.
              </p>

              <a href="/chemicals" className="inline-flex items-center group/btn text-white font-bold tracking-wide uppercase text-sm">
                See Full Range
                <span className="ml-2 bg-white/20 rounded-full p-1 transition-transform group-hover/btn:translate-x-2">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
};

export default SpecialtyChemicalsOverview;