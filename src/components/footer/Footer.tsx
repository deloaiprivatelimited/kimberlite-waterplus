import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Kimberlite
              </span>
              <span className="ml-1 text-xs uppercase tracking-widest text-[#0c71c3] font-bold mt-1">
                Water Plus
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Engineered water intelligence for the modern industrial world. 
              Delivering regulatory compliance and operational excellence through 
              advanced filtration and chemical solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">
              Important Links
            </h3>
            <ul className="space-y-3">
              {['About Us', 'Terms & Conditions', 'Privacy Policy', 'Products'].map((item) => (
                <li key={item}>
                  <a 
                    href={`${item.toLowerCase()}`} 
                    className="text-base text-gray-400 hover:text-[#0c71c3] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <span className="text-[#0c71c3] mr-2">📍</span>
                <span>Industrial Area Phase II,<br/>New Delhi, India</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#0c71c3] mr-2">✉️</span>
                <a href="mailto:info@kimberlitewater.com" className="hover:text-white transition-colors">
                  info@kimberlitewater.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-500">
            &copy; {currentYear} Kimberlite Water Plus. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;