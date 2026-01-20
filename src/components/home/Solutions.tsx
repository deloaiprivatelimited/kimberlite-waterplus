import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const Solutions = () => {
  const [activeTab, setActiveTab] = useState('tech');

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' as const },
    },
    cutout: '70%',
  };

  // Data content
  const contentData: any = {
    tech: {
      title: "Industrial Water Technologies",
      description: "Advanced equipment designed for high-load industrial applications. We focus on scalability and integration.",
      points: [
        "Integrated treatment infrastructure",
        "Plant retrofitting and optimization"
      ],
      chartData: [45, 30, 25],
    },
    chem: {
      title: "Specialty Chemistry",
      description: "High-quality chemicals that sustain and protect equipment assets while optimizing process throughput.",
      points: [
        "Corrosion and scale inhibitors",
        "Process efficiency additives"
      ],
      chartData: [30, 20, 50],
    },
    sugar: {
      title: "Sugar Process Engineering",
      description: "Dedicated water management for sugar and ethanol milling, ensuring efficiency during peak seasons.",
      points: [
        "Evaporator cleaning solutions",
        "Condensate polishing"
      ],
      chartData: [50, 25, 25],
    },
    filters: {
      title: "Filtration Systems",
      description: "Precision cartridge and bag filters designed for product purity and equipment protection.",
      points: [
        "High-flow cartridge systems",
        "Micro-filtration membranes"
      ],
      chartData: [20, 60, 20],
    }
  };

  const getChartData = () => ({
    labels: ['Stability', 'Compliance', 'Optimization'],
    datasets: [
      {
        data: contentData[activeTab].chartData,
        backgroundColor: ['#0c71c3', '#86b8e1', '#095593'],
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  });

  return (
    <>
      {/* SECTION 1: Operational Excellence Header (White Background) */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-[#0c71c3] font-semibold tracking-wide uppercase">
              Operational Excellence
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl font-serif">
              Custom-Made Water Solutions on Demand
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: Interactive Solutions Matrix (Gray Background) */}
      <div id="solutions" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tabs */}
          <div className="border-b border-gray-200 mb-8 overflow-x-auto">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'tech', label: 'Water Technologies' },
                { id: 'chem', label: 'Specialty Chemicals' },
                { id: 'sugar', label: 'Sugar Industry' },
                { id: 'filters', label: 'Filtration' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors cursor-pointer outline-none ${
                    activeTab === tab.id
                      ? 'border-[#0c71c3] text-[#0c71c3]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Content & Chart Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[350px]">
            
            {/* Left: Text Content */}
            <div className="fade-in transition-opacity duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                {contentData[activeTab].title}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {contentData[activeTab].description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {contentData[activeTab].points.map((point: string, index: number) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="text-[#0c71c3] mr-2 font-bold">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Chart */}
            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center h-full max-h-[400px]">
              <div className="relative w-full h-[300px] max-w-[600px]">
                <Doughnut data={getChartData()} options={chartOptions} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Solutions;