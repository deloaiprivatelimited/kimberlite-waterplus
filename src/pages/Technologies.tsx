import React, { useState } from 'react';
import { 
  Droplets, 
  Filter, 
  Waves, 
  Recycle, 
  Factory, 
  Activity, 
  FlaskConical, 
  Settings,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

// --- Interfaces ---
interface SubType {
  title: string;
  desc: string;
}

interface Technology {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
  imageUrl: string;
  caption: string;
  subTypes?: SubType[];
}

// --- DATA ---
const technologies: Technology[] = [
  {
    id: "clarification",
    title: "Clarification Systems",
    icon: <Droplets className="w-5 h-5" />,
    description: "Clarification is the essential first step in water treatment, removing suspended solids, sediments, and organic matter to prepare raw water for downstream purification. Our high-rate solid contact clarifiers reduce turbidity efficiently.",
    caption: "Fig 1.0 — Sedimentation & Clarification",
    details: [
      "High Rate Solid Contact Clarifier",
      "Tube Settler Systems",
      "Lamella Clariflocculator",
      "Sludge Recirculation"
    ],
    imageUrl: "https://www.kimberlitewaterplus.com/wp-content/uploads/Clarification-System_Final_New.jpg"
  },
  {
    id: "filtration",
    title: "Filtration Systems",
    icon: <Filter className="w-5 h-5" />,
    description: "Advanced media filtration to remove particulate matter down to micron levels. We engineer pressure sand, activated carbon, and dual-media filters customized for specific turbidity loads and flow rates.",
    caption: "Fig 1.0 — Multi-Grade Sand Filtration",
    details: [
      "Pressure Sand Filter (PSF)",
      "Activated Carbon Filter (ACF)",
      "Dual Media Filter (DMF)",
      "Iron Removal Filters"
    ],
    imageUrl: "https://www.kimberlitewaterplus.com/wp-content/uploads/Filtration-System-New-Responsive.jpg"
  },
  {
    id: "membrane",
    title: "Membrane Technologies",
    icon: <Waves className="w-5 h-5" />,
    description: "State-of-the-art membrane separation processes designed to remove dissolved solids, organics, and bacteria. From brackish water to sea water desalination, our membrane systems deliver high-purity permeate.",
    caption: "Fig 1.0 — Reverse Osmosis Process",
    imageUrl: "https://www.kimberlitewaterplus.com/wp-content/uploads/membrane.png",
    details: ["High Recovery Rates", "Low Energy Consumption", "Automated CIP Systems", "Containerized Options"],
    subTypes: [
      { title: "Ultra Filtration (UF)", desc: "Removes colloids, proteins, and bacteria (0.01 micron)." },
      { title: "Reverse Osmosis (RO)", desc: "Rejects 99% of dissolved salts and minerals." },
      { title: "Disc Tube RO (DTRO)", desc: "Specialized for high-COD leachate treatment." },
      { title: "Nano Filtration (NF)", desc: "Selective removal of divalent ions and hardness." },
    ]
  },
  {
    id: "ion-exchange",
    title: "Ion Exchange",
    icon: <Recycle className="w-5 h-5" />,
    description: "Resin-based demineralization and softening solutions for boiler feed and process water. Our DM plants ensure conductivity < 1 µS/cm and silica removal for critical industrial applications.",
    caption: "Fig 1.0 — Cation & Anion Exchange",
    details: [
      "Softening Plants (Ca/Mg Removal)",
      "Demineralization (DM) Plants",
      "Mixed Bed Polishers",
      "Condensate Polishing"
    ],
    imageUrl: "https://www.kimberlitewaterplus.com/wp-content/uploads/ion-exchange.png"
  },
  {
    id: "stp-etp",
    title: "STP & ETP",
    icon: <Factory className="w-5 h-5" />,
    description: "Comprehensive wastewater management solutions ensuring Zero Liquid Discharge (ZLD) and environmental compliance. We utilize MBR and Activated Sludge technologies for effective biological treatment.",
    caption: "Fig 1.0 — Biological Treatment Flow",
    details: [
      "Sewage Treatment (MBR/SBR)",
      "Industrial Effluent Treatment",
      "Zero Liquid Discharge (ZLD)",
      "Sludge Dewatering"
    ],
    imageUrl: "https://www.kimberlitewaterplus.com/wp-content/uploads/stp-etp.png"
  },
  {
    id: "cpu",
    title: "Condensate Polishing",
    icon: <Activity className="w-5 h-5" />,
    description: "Maximize water recovery by treating and recycling steam condensate. Our CPU systems remove trace contaminants (crud, iron, silica), allowing high-temperature condensate to be returned to the boiler.",
    caption: "Fig 1.0 — Condensate Recovery Loop",
    details: ["Sugar Industry CPU", "Thermal Power CPU", "Ammonia Removal", "Trace Iron Filtration"],
    imageUrl: "https://www.kimberlitewaterplus.com/wp-content/uploads/Condensate-Polishing-new-Responsive.jpg"
  },
  {
    id: "clo2",
    title: "Disinfection Systems",
    icon: <FlaskConical className="w-5 h-5" />,
    description: "Chlorine Dioxide (ClO2) generation for superior disinfection without formation of THMs. Effective over a wide pH range, it destroys biofilm and controls Legionella in cooling towers and potable water.",
    caption: "Fig 1.0 — ClO2 Generation Process",
    details: ["No THM Formation", "Biofilm Destruction", "Odor Control", "Wide pH Stability"],
    imageUrl: "https://www.kimberlitewaterplus.com/wp-content/uploads/New-Project_111_222_333.jpg"
  },
  {
    id: "process-control",
    title: "Process Control",
    icon: <Settings className="w-5 h-5" />,
    description: "Precision dosing and automation systems for consistent water quality management. Our PLC-based controllers and sensor networks ensure optimal chemical usage and real-time monitoring.",
    caption: "Fig 1.0 — Dosing & Instrumentation",
    details: ["Electronic Dosing Pumps", "pH/ORP/TDS Controllers", "IoT Remote Monitoring", "Skid Mounted Systems"],
    imageUrl: "https://www.kimberlitewaterplus.com/wp-content/uploads/CHLORINE-DIOXIDE-GENERATION-SYSTEMS.jpg"
  }
];

const WaterTechnologiesPage = () => {
  const [activeTabId, setActiveTabId] = useState<string>('membrane');
  const [isAnimating, setIsAnimating] = useState(false);

  // Helper to find active content
  const activeTech = technologies.find(t => t.id === activeTabId) || technologies[0];

  const handleTabChange = (id: string) => {
    if (id === activeTabId) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTabId(id);
      setIsAnimating(false);
    }, 200);
  };

  return (
    <div className="bg-white font-sans text-gray-900 selection:bg-blue-50 selection:text-blue-900">
      
      {/* 1. HERO SECTION - Fixed to match Chemicals Page height (py-24) */}
      <div className="relative py-24 bg-gray-900 overflow-hidden group">
        <div className="absolute inset-0 opacity-50">
           <img 
             key={activeTech.imageUrl}
             src={activeTech.imageUrl} 
             alt={activeTech.title} 
             className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
           />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
          <div className="animate-fade-in-up">
            <span className="text-[#0c71c3] font-bold tracking-widest uppercase mb-2 block">Our Expertise</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 tracking-tight">
              {activeTech.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl font-light leading-relaxed border-l-4 border-[#0c71c3] pl-6">
              Advanced engineering solutions for {activeTech.title.toLowerCase()} and industrial water management.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* 2. NAVIGATION SIDEBAR */}
          <div className="lg:col-span-4">
            
            {/* STICKY CONTAINER FIX: Wraps both the menu and the card */}
            <div className="sticky top-24 space-y-8">
              
              {/* Nav Menu */}
              <div className="bg-white lg:bg-gray-50 lg:rounded-xl lg:p-6 lg:border lg:border-gray-100 shadow-sm lg:shadow-none">
                <h4 className="hidden lg:block text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Technologies</h4>
                
                <ul className="flex lg:block overflow-x-auto pb-4 lg:pb-0 space-x-4 lg:space-x-0 lg:space-y-2 no-scrollbar">
                  {technologies.map((tech) => (
                    <li key={tech.id} className="shrink-0">
                      <button 
                        onClick={() => handleTabChange(tech.id)}
                        className={`
                          w-auto lg:w-full text-left px-5 py-3 rounded-full lg:rounded-lg text-sm font-medium transition-all duration-200 
                          flex items-center gap-3 whitespace-nowrap
                          ${activeTabId === tech.id 
                            ? 'bg-[#0c71c3] text-white shadow-md transform lg:translate-x-2' 
                            : 'bg-gray-100 lg:bg-transparent text-gray-600 hover:bg-white hover:text-[#0c71c3] hover:shadow-sm'}
                        `}
                      >
                        <span className={activeTabId === tech.id ? 'text-white' : 'text-[#0c71c3]'}>
                          {tech.icon}
                        </span>
                        <span>{tech.title}</span>
                        {activeTabId === tech.id && <ChevronRight className="hidden lg:block ml-auto w-4 h-4" />}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Contact Widget - Now inside the sticky wrapper */}
              <div className="hidden lg:block bg-[#0c71c3] text-white rounded-xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold font-serif mb-2">Need a Solution?</h3>
                <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                  Consult with our engineering team for a customized design proposal for your plant.
                </p>
                <button className="w-full py-3 bg-white text-[#0c71c3] font-bold rounded hover:bg-gray-50 transition-colors shadow-lg">
                  Contact Engineering
                </button>
              </div>

            </div>
          </div>

          {/* 3. MAIN CONTENT AREA */}
          <div className={`lg:col-span-8 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            
            {/* Description & Intro */}
            <div className="mb-10">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                Overview
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed text-justify">
                {activeTech.description}
              </p>
            </div>

            {/* Diagram Injection Logic */}
            <div className="mb-12">
               {activeTech.id === 'clarification' && (
                 <div className="my-6"></div>
               )}
               {activeTech.id === 'filtration' && (
                 <div className="my-6">

[Image of pressure sand filter diagram]
</div>
               )}
               {activeTech.id === 'membrane' && (
                 <div className="my-6">

[Image of reverse osmosis process diagram]
</div>
               )}
               {activeTech.id === 'ion-exchange' && (
                 <div className="my-6">

[Image of ion exchange resin process]
</div>
               )}
               {activeTech.id === 'stp-etp' && (
                 <div className="my-6">

[Image of sewage treatment plant flow chart]
</div>
               )}
                {activeTech.id === 'cpu' && (
                 <div className="my-6"></div>
               )}
            </div>

            {/* SubTypes Grid (Only if exists, e.g., for Membrane) */}
            {activeTech.subTypes && (
              <div className="mb-12">
                <h3 className="text-xl font-bold font-serif text-gray-900 mb-6">Process Variants</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeTech.subTypes.map((sub, idx) => (
                    <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
                      <h4 className="font-bold text-[#0c71c3] mb-2">{sub.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{sub.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features/Details List */}
            <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100">
              <h3 className="text-xl font-bold font-serif text-gray-900 mb-6">Key System Components</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {activeTech.details.map((detail, i) => (
                  <div key={i} className="flex items-start group">
                    <CheckCircle2 className="w-5 h-5 text-[#0c71c3] mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="ml-3 text-gray-700 font-medium">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Footer (Image) */}
            <div className="mt-12 bg-gray-50 p-3 rounded-lg border border-gray-200 shadow-sm">
                <div className="relative h-64 w-full overflow-hidden rounded">
                    <img src={activeTech.imageUrl} alt={activeTech.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    <div className="absolute bottom-0 left-0 bg-gray-900/80 text-white px-4 py-2 text-xs uppercase tracking-widest font-bold">
                        {activeTech.caption}
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterTechnologiesPage;