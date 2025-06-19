
import React from 'react';
import { Button } from './ui/button';
import { Calendar, MapPin, Clock, User } from 'lucide-react';

interface TravelPackage {
  id: number;
  title: string;
  destination: string;
  image: string;
  duration: string;
  groupSize: string;
  price: string;
  description: string;
}

const packages: TravelPackage[] = [
  {
    id: 1,
    title: "Greek Island Hopping Adventure",
    destination: "Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
    duration: "10 Days",
    groupSize: "Max 12",
    price: "92,199",
    description: "Explore the stunning Cyclades islands including Santorini, Mykonos and Naxos."
  },
  {
    id: 2,
    title: "Japan Cherry Blossom Tour",
    destination: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    duration: "12 Days",
    groupSize: "Max 10",
    price: "43,299",
    description: "Experience the magical cherry blossom season while exploring Tokyo, Kyoto and more."
  },
  {
    id: 3,
    title: "Thailand Beach & Culture Escape",
    destination: "Thailand",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a",
    duration: "9 Days",
    groupSize: "Max 14",
    price: "61,699",
    description: "Immerse in Thai culture with Bangkok exploration followed by relaxation in Phuket."
  }
];

const FeaturedPackages: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Packages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Carefully curated travel experiences designed to inspire and delight, all at exceptional value
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
                <div className="absolute top-4 right-4 bg-calendar-highlight text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{pkg.title}</h3>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{pkg.destination}</span>
                </div>
                <p className="text-gray-600 mb-6">
                  {pkg.description}
                </p>
                <div className="flex justify-between items-center mb-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-calendar-event" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-calendar-event" />
                    {pkg.groupSize}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="font-bold text-xl">{pkg.price}</div>
                  <Button variant="outline" className="border-calendar-highlight text-calendar-highlight hover:bg-calendar-highlight hover:text-white transition-colors">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button className="bg-calendar-highlight hover:bg-calendar-highlight/90 text-white" size="lg">
            View All Packages
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
