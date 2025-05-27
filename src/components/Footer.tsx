import React from 'react';
import Logo from './Logo';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8">
          <div className="mb-8 md:mb-0">
            <Logo className="text-3xl text-white" />
            <p className="mt-4 text-gray-300 max-w-xs">
              Connecting construction talent with the right opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-teal-300">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-teal-400" />
                  <a 
                    href="mailto:info@linktalentsupport.com" 
                    className="text-gray-300 hover:text-teal-300 transition-colors"
                  >
                    info@linktalentsupport.com
                  </a>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-teal-400" />
                  <span className="text-gray-300">Coming Soon</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-teal-400" />
                  <span className="text-gray-300">Coming Soon</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-teal-300">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-teal-300 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-teal-300 transition-colors">
                    Get Notified
                  </a>
                </li>
                <li>
                  <a href="mailto:info@linktalentsupport.com" className="text-gray-300 hover:text-teal-300 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {currentYear} Link Talent Support. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;