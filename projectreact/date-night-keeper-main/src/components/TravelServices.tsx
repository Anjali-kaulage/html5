
import React from 'react';
import { Plane, MapPin, Calendar, Hotel, Ship, Ticket } from 'lucide-react';

const services = [
  {
    icon: <Plane className="h-10 w-10 text-calendar-highlight" />,
    title: "Flight Booking",
    description: "Find and book flights to any destination worldwide at competitive prices."
  },
  {
    icon: <Hotel className="h-10 w-10 text-calendar-highlight" />,
    title: "Hotel Reservations",
    description: "From luxury resorts to boutique hotels, find the perfect accommodation for your stay."
  },
  {
    icon: <MapPin className="h-10 w-10 text-calendar-highlight" />,
    title: "Vacation Packages",
    description: "Save with our curated all-inclusive packages to popular destinations."
  },
  {
    icon: <Ship className="h-10 w-10 text-calendar-highlight" />,
    title: "Cruises",
    description: "Explore incredible cruise options to experience multiple destinations in one trip."
  },
  {
    icon: <Ticket className="h-10 w-10 text-calendar-highlight" />,
    title: "Activities & Tours",
    description: "Book guided tours and exciting activities led by local experts."
  },
  {
    icon: <Calendar className="h-10 w-10 text-calendar-highlight" />,
    title: "Travel Planning",
    description: "Custom itinerary planning tailored to your preferences and budget."
  }
];

const TravelServices: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Travel Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need for a perfect journey, all in one place
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow bg-white group hover:border-calendar-highlight/30"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-calendar-highlight transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelServices;
