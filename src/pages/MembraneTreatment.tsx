import React, { useState } from 'react';

// --- Interfaces for Type Safety ---
interface Product {
  code: string;
  name: string;
  desc: string;
}

interface ChemicalCategory {
  title: string;
  heroImage: string;
  description: string;
  caption: string;
  products: Product[];
  benefits: string[];
}

// Define the shape of our data object with an index signature
interface ChemicalsData {
  [key: string]: ChemicalCategory;
}

// --- Icons ---
const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#0c71c3] mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

// --- DATA ---
const chemicalsData: ChemicalsData = {
  pretreatment: {
    title: "Pre-Treatment Chemicals",
    heroImage: "https://www.kimberlitewaterplus.com/wp-content/uploads/Pretreatmet-Chemicals_Client.jpg",
    description: "Raw water from natural sources often contains soluble chemical compounds that cause problems for industrial use. Our coagulants and flocculants are designed for effective clarification.",
    caption: "Fig 1.0 — Coagulation & Flocculation Process",
    products: [
      { code: "TC 4001", name: "Coagulant", desc: "High Cationic Coagulant – Liquid" },
      { code: "TC 4002", name: "Coagulant", desc: "Low Cationic Coagulant – Liquid" },
      { code: "TC 4326", name: "Anionic Poly Electrolyte", desc: "Polyacrylamide based High MW non-toxic Flocculant" },
      { code: "TC 6512", name: "Oxidizing Biocide", desc: "Chlorine Based Biocide for raw water disinfection" }
    ],
    benefits: ["Efficient removal of colloidal silica", "Improved clarity in filtrate", "Rapid settling of suspended solids", "Increased plant throughput"]
  },
  membrane: {
    title: "Membrane Treatment",
    heroImage: "https://www.kimberlitewaterplus.com/wp-content/uploads/membrane-chemicals.png",
    description: "Advanced antiscalants, antifoulants, and cleaners scientifically formulated to optimize Reverse Osmosis (RO) recovery rates and extend membrane life.",
    caption: "Fig 1.0 — Membrane Filtration & Fouling Prevention",
    products: [
      { code: "TC 6116", name: "Membrane Biocide", desc: "Iso thiozoline based Non-Oxidizing Biocide" },
      { code: "TC 7000", name: "RO Antiscalant", desc: "Liquid Dispersant for RO thin film systems – Acidic" },
      { code: "TC 7613", name: "RO Antiscalant – FDA", desc: "Polyacrylic acid/Phosphonates based – Alkaline" },
      { code: "TC 8204", name: "Membrane Cleaner", desc: "Acid based cleaner for inorganic scale removal" }
    ],
    benefits: ["Minimizes fouling by sequestering iron", "Effective calcium sulphate inhibition", "Compatible with Polyamide & Cellulose Acetate", "Reduces cleaning frequency"]
  },
  boiler: {
    title: "Boiler Water Treatment",
    heroImage: "https://www.kimberlitewaterplus.com/wp-content/uploads/New-Project-5.jpg",
    description: "Chemical solutions to control alkalinity, prevent scaling, correct pH, and control conductivity in boiler water systems, preventing tube failure and corrosion.",
    caption: "Fig 1.0 — Boiler Steam Cycle Protection",
    products: [
      { code: "TC 1276", name: "Phosphate Builder", desc: "Phosphate Builder for Boiler – Liquid" },
      { code: "TC 1302", name: "Oxygen Scavenger", desc: "Catalyzed Hydrazine Hydrate for High Pressure" },
      { code: "TC 1340", name: "Filming Amine", desc: "Filming & Neutralizing Amine for Condensate Lines" },
      { code: "TC 1502", name: "Sludge Conditioner", desc: "Polymer based conditioner for Low/Medium Pressure" }
    ],
    benefits: ["Prevents scale formation on heat transfer surfaces", "Controls pitting corrosion from dissolved oxygen", "Prevents caustic embrittlement", "Maintains steam purity"]
  },
  cooling: {
    title: "Cooling Tower Treatment",
    heroImage: "https://www.kimberlitewaterplus.com/wp-content/uploads/Untitled-design-64.png",
    description: "Comprehensive protection for open circulating, once-through, and closed-loop cooling systems against scaling, corrosion, and biological growth.",
    caption: "Fig 1.0 — Cooling Tower Circulation Loop",
    products: [
      { code: "TC 5002", name: "Closed Loop Inhibitor", desc: "Nitrite based Corrosion Inhibitor for Chillers" },
      { code: "TC 5141", name: "Corrosion Inhibitor", desc: "Azoles based inhibitor for Yellow Metals (Copper/Brass)" },
      { code: "TC 5211", name: "Scale Inhibitor", desc: "Zinc based inhibitor for High Hardness water" },
      { code: "TC 6308", name: "Biocide", desc: "Quaternary Ammonium Compound based Biocide" }
    ],
    benefits: ["Controls corrosion of ferrous & non-ferrous metals", "Prevents biological fouling and algae growth", "Optimizes water consumption (higher cycles)", "Extends equipment life"]
  },
  wastewater: {
    title: "Waste Water Treatment",
    heroImage: "https://www.kimberlitewaterplus.com/wp-content/uploads/Waste-Water-Client.jpg",
    description: "Coagulants, flocculants, and defoamers designed for primary, secondary, and tertiary effluent treatment to meet strict environmental compliance.",
    caption: "Fig 1.0 — Effluent Treatment Stages",
    products: [
      { code: "TC 4000", name: "Bio Culture", desc: "Macro/micro nutrients for biological treatment" },
      { code: "TC 4118", name: "Coagulant", desc: "Polyamine based Cationic Coagulant" },
      { code: "TC 4326", name: "Anionic Flocculant", desc: "High MW Polyacrylamide for sludge dewatering" },
      { code: "TC 2024", name: "Defoamer", desc: "Silicon Emulsion based high-performance defoamer" }
    ],
    benefits: ["Effective colour and odour removal", "Efficient sludge thickening and dewatering", "Reduction of COD and BOD levels", "Heavy metal removal"]
  },
  evaporator: {
    title: "Evaporator Treatment",
    heroImage: "https://www.kimberlitewaterplus.com/wp-content/uploads/Evaporator-Treatment-Client-New-Image.jpg",
    description: "Specialized antifoulants and defoamers to maintain heat transfer efficiency in Multiple Effect Evaporators (MEE) and brine concentrators.",
    caption: "Fig 1.0 — MEE Process Efficiency",
    products: [
      { code: "TC 7001", name: "Evaporator Antiscalant", desc: "High temperature stable antiscalant" },
      { code: "TC 2200", name: "High Temp Defoamer", desc: "Silicon based PDMS Defoamer for evaporators" },
      { code: "TC 8303", name: "Scale Softener", desc: "Non-Ionic Surfactant based scale softener" },
      { code: "TC 213", name: "Corrosion Inhibitor", desc: "Polymeric Inhibitor for acidic environments" }
    ],
    benefits: ["Prevents hard scale deposition on heating tubes", "Controls foaming to prevent carryover", "Reduces cleaning downtime", "Maintains evaporation rate"]
  }
};

const Chemicals = () => {
  const [activeTab, setActiveTab] = useState<string>('membrane');

  // Safety check: ensure content exists
  const content = chemicalsData[activeTab];

  if (!content) return <div>Loading...</div>;

  return (
    <div className="bg-white font-sans text-gray-900 selection:bg-blue-50 selection:text-blue-900">
      
      {/* 1. HERO SECTION */}
      <div className="relative py-24 bg-gray-900 overflow-hidden transition-all duration-700">
        <div className="absolute inset-0 opacity-40">
           {/* Use key to trigger animation on image change */}
           <img 
             key={content.heroImage}
             src={content.heroImage} 
             alt={content.title} 
             className="w-full h-full object-cover transition-opacity duration-700 animate-fade-in"
           />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            <span className="text-[#0c71c3]">Kimberlite</span> {content.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl font-light">
            Engineered chemical solutions for operational excellence.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* 2. SIDEBAR (Navigation & Quote) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Sidebar Menu */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Explore Our Chemicals</h4>
              <ul className="space-y-2">
                {Object.keys(chemicalsData).map((key) => (
                  <li key={key}>
                    <button 
                      onClick={() => setActiveTab(key)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex justify-between items-center ${
                        activeTab === key 
                          ? 'bg-[#0c71c3] text-white shadow-md transform translate-x-2' 
                          : 'text-gray-600 hover:bg-white hover:text-[#0c71c3] hover:shadow-sm'
                      }`}
                    >
                      {chemicalsData[key].title}
                      {activeTab === key && <span>&rarr;</span>}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sticky Quote Form */}
            <div className="bg-[#0c71c3] text-white rounded-xl p-6 shadow-xl sticky top-24">
              <h3 className="text-xl font-bold font-serif mb-6">Get Quick Quote</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Product Name" className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:bg-white/20" />
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:bg-white/20" />
                <input type="text" placeholder="Company Name" className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:bg-white/20" />
                <button className="w-full py-3 bg-white text-[#0c71c3] font-bold rounded hover:bg-gray-100 transition-colors shadow-lg">
                  Submit Inquiry
                </button>
              </form>
            </div>

          </div>

          {/* 3. MAIN CONTENT (Dynamic) */}
          <div className="lg:col-span-8 fade-in" key={activeTab}>
            
            <div className="prose prose-lg text-gray-600 max-w-none mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">{content.title}</h2>
              <p>{content.description}</p>
              
              {/* Diagram Placeholder */}
              <div className="my-8 bg-white p-4 border border-gray-100 rounded-lg shadow-sm flex flex-col items-center justify-center min-h-[200px] text-gray-400">
                 
                 <p className="text-xs mt-4 uppercase tracking-widest">{content.caption}</p>
              </div>
            </div>

            {/* Product Table */}
            <div className="mb-12 overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h3 className="font-bold text-gray-900">Popular Formulations</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Code</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Product</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Description</th>
                      <th className="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {content.products.map((product, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-bold text-[#0c71c3] whitespace-nowrap">{product.code}</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{product.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">{product.desc}</td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-xs font-bold text-[#0c71c3] hover:text-[#095593] uppercase tracking-wide whitespace-nowrap">
                            Quote
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 mb-12">
              <h3 className="text-xl font-bold font-serif text-gray-900 mb-6">Key Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start">
                    <CheckIcon />
                    <span className="ml-3 text-sm text-gray-700 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 4. CROSS-LINKING (Other Solutions) */}
      <div className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-10 text-center">See Also</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.keys(chemicalsData)
              .filter(key => key !== activeTab)
              .slice(0, 3)
              .map((key, i) => (
                <div 
                  key={i} 
                  onClick={() => {
                    setActiveTab(key);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} 
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
                >
                  <div className="h-40 overflow-hidden relative">
                    <img 
                      src={chemicalsData[key].heroImage} 
                      alt={chemicalsData[key].title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                  </div>
                  <div className="p-6 flex justify-between items-center">
                    <h3 className="text-md font-bold text-gray-900 group-hover:text-[#0c71c3] transition-colors">
                      {chemicalsData[key].title}
                    </h3>
                    <div className="text-gray-400 group-hover:text-[#0c71c3] transition-colors">
                      <ArrowRightIcon />
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Chemicals;