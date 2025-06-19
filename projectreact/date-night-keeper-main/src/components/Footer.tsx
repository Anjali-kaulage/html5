
import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Plane className="h-6 w-6 text-calendar-highlight" />
              <span className="text-xl font-bold text-white">Wanderlust</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Discover the world with our expertly crafted travel experiences. From tropical beaches to ancient ruins, we've got you covered.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-calendar-highlight transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-calendar-highlight transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-calendar-highlight transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-calendar-highlight transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-calendar-highlight transition-colors text-sm">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/trips" className="hover:text-calendar-highlight transition-colors text-sm">
                  Trips & Tours
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-calendar-highlight transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-calendar-highlight transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Top Destinations</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-calendar-highlight transition-colors text-sm">
                  Santorini, Greece
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-calendar-highlight transition-colors text-sm">
                  Bali, Indonesia
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-calendar-highlight transition-colors text-sm">
                  Kyoto, Japan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-calendar-highlight transition-colors text-sm">
                  Amalfi Coast, Italy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-calendar-highlight transition-colors text-sm">
                  Machu Picchu, Peru
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-calendar-highlight mt-0.5" />
                <span className="text-sm">pune,411057</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-calendar-highlight" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-calendar-highlight" />
                <span className="text-sm">info@wanderlust.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Wanderlust Travel. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
            <a href="#" className="text-xs text-gray-500 hover:text-calendar-highlight">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-calendar-highlight">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-calendar-highlight">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
