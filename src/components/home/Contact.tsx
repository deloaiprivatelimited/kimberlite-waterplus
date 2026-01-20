import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white py-20 border-t border-gray-100 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 font-serif">
          Drive Your Operational Success
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Ready to optimize your water infrastructure? Get in touch with our engineering team for a consultation tailored to your specific industrial needs.
        </p>
        <button className="bg-[#0c71c3] text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:bg-[#095593] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transform cursor-pointer">
          Contact Our Engineers
        </button>
      </div>
    </div>
  );
};

export default Contact;