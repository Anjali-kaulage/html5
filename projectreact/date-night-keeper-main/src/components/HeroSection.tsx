
import React from 'react';
import { MapPin, Calendar, Search } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 min-h-[85vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1682687220063-4742bd7fd538')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-calendar-highlight">Discover</span> Amazing Places Around The World
            </h1>
            <p className="text-lg max-w-lg opacity-90">
              Start your journey with us and explore the beauty of the world. Perfect destinations 
              for your next adventure await you.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-calendar-highlight hover:bg-calendar-highlight/90 text-white">
                Explore Destinations
              </Button>
               <Button size="lg" className="bg-calendar-highlight hover:bg-calendar-highlight/90 text-white">
                View Special Offers
              </Button>
              
              
            </div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Find Your Perfect Trip</h3>
            <form className="space-y-4">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="h-4 w-4" />
                  Where to
                </label>
                <input 
                  type="text" 
                  placeholder="Destination" 
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-calendar-highlight"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="h-4 w-4" />
                    Check In
                  </label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-calendar-highlight"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="h-4 w-4" />
                    Check Out
                  </label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-calendar-highlight"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2">Adults</label>
                  <select className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-calendar-highlight">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4+</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2">Children</label>
                  <select className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-calendar-highlight">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3+</option>
                  </select>
                </div>
              </div>
              
              <Button className="w-full bg-calendar-event hover:bg-calendar-event/90 text-white font-medium py-3 flex items-center justify-center gap-2">
                <Search className="h-4 w-4" />
                Search Packages
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Wave svg at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,224C384,224,480,256,576,256C672,256,768,224,864,213.3C960,203,1056,213,1152,213.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
