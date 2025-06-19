
import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { MapPin, Plane, Globe } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-calendar-highlight/20 to-calendar-event/20 z-0"></div>
      
      {/* Pattern background */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute top-10 left-10">
          <MapPin className="h-24 w-24" />
        </div>
        <div className="absolute bottom-10 right-10">
          <Plane className="h-24 w-24" />
        </div>
        <div className="absolute bottom-40 left-1/3">
          <Globe className="h-24 w-24" />
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Inspired for Your Next Trip</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter and receive exclusive offers, travel tips, and destination inspiration straight to your inbox.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow"
              required
            />
            <Button className="bg-calendar-highlight hover:bg-calendar-highlight/90 text-white">
              Subscribe
            </Button>
          </form>
          
          <p className="text-gray-500 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
