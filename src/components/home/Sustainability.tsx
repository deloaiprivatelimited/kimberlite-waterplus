import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

// Register specific ChartJS components for Polar Area
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const Sustainability = () => {
  const chartData = {
    labels: ['Environmental', 'Social', 'Economic'],
    datasets: [
      {
        label: 'Focus Area',
        data: [33, 33, 33],
        backgroundColor: [
          'rgba(12, 113, 195, 0.8)', // Primary Brand
          'rgba(134, 184, 225, 0.8)', // Lighter Blue
          'rgba(9, 85, 147, 0.8)',   // Darker Blue
        ],
        borderWidth: 2,
        borderColor: '#fff',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        grid: { display: false },
        ticks: { display: false, backdropColor: 'transparent' },
      },
    },
    plugins: {
      legend: {
        position: 'right' as const,
      },
    },
  };

  return (
    <div id="values" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Quality Policy Card */}
          <div className="bg-gray-50 rounded-xl p-8 border-t-4 border-[#0c71c3] shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
              Quality Policy
            </h3>
            <p className="text-gray-600">
              Kimberlite Water Plus is committed to achieving total customer satisfaction by delivering high-quality water treatment equipment, specialty chemicals, and innovative services.
            </p>
          </div>

          {/* Business Sustainability Card */}
          <div className="bg-gray-900 rounded-xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4 font-serif">
              Business Sustainability
            </h3>
            <p className="text-gray-300">
              Achieving business growth while supporting environmental protection. We embed sustainability into every business decision.
            </p>
          </div>
        </div>

        {/* Bottom Chart Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-10">
          
          {/* Chart Container */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full h-[250px] max-w-[400px]">
              <PolarArea data={chartData} options={chartOptions} />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 font-serif">
              Triple Bottom Line Focus
            </h3>
            <p className="text-gray-600 mt-4">
              We balance Economic Growth, Social Responsibility, and Environmental Protection to create long-term value for our clients and the planet.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Sustainability;