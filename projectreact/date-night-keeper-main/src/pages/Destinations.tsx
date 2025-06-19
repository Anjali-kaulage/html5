
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Plane, Calendar, Users } from 'lucide-react';
import { Button } from '../components/ui/button';

interface Destination {
  id: number;
  name: string;
  country: string;
  image: string;
  description: string;
  highlights: string[];
  price: string;
  rating: number;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Santorini",
    country: "Greece",
    image: "https://th.bing.com/th/id/OIP.xRadX-w5vDo1lql1e6qvGwHaEK?w=287&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3",
    description: "Experience the breathtaking views of white-washed buildings against the deep blue of the Aegean Sea. Santorini offers stunning sunsets, volcanic beaches, and charming villages.",
    highlights: ["Oia Sunset Views", "Volcanic Beaches", "Wine Tasting", "Ancient Ruins of Akrotiri"],
    price: "21,299",
    rating: 4.8
  },
  {
    id: 2,
    name: "Kyoto",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186",
    description: "Step back in time in this cultural capital of Japan. Discover ancient temples, traditional tea houses, and beautiful gardens that change with the seasons.",
    highlights: ["Fushimi Inari Shrine", "Bamboo Forest of Arashiyama", "Kinkaku-ji (Golden Pavilion)", "Gion District"],
    price: "31,599",
    rating: 4.9
  },
  {
    id: 3,
    name: "Amalfi Coast",
    country: "Italy",
    image: "https://wallpaperaccess.com/full/2612963.jpg",
    description: "Drive along the stunning coastline of southern Italy, where colorful villages cling to cliffs above the azure Mediterranean Sea. Indulge in fresh seafood and limoncello.",
    highlights: ["Positano Village", "Ravello Views", "Boat Tours to Capri", "Path of the Gods Hike"],
    price: "81,499",
    rating: 4.7
  },
  {
    id: 4,
    name: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    description: "Find your paradise on this Indonesian island known for lush rice terraces, stunning temples, world-class surfing, and warm hospitality.",
    highlights: ["Ubud Monkey Forest", "Tegallalang Rice Terraces", "Uluwatu Temple", "Kuta Beach"],
    price: "98899",
    rating: 4.7
  },
  {
    id: 5,
    name: "Machu Picchu",
    country: "Peru",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
    description: "Discover the lost city of the Incas, perched high in the Andes Mountains. This UNESCO World Heritage site is one of the most remarkable examples of ancient engineering.",
    highlights: ["Inca Trail", "Sun Gate", "Temple of the Sun", "Sacred Valley"],
    price: "91,899",
    rating: 4.9
  },
  {
    id: 6,
    name: "Marrakech",
    country: "Morocco",
    image: "https://cdn.pixabay.com/photo/2017/09/13/18/38/morocco-2746495_1280.jpg",
    description: "Immerse yourself in the vibrant colors and sounds of this ancient city. Explore bustling markets, ornate palaces, and serene gardens.",
    highlights: ["Jardin Majorelle", "Bahia Palace", "Medina Souks", "Jemaa el-Fnaa Square"],
    price: "88999",
    rating: 4.6
  }
];

const Destinations: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486718448742-163732cd1544')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Explore Our Destinations</h1>
              <p className="text-xl opacity-90">
                Discover handpicked destinations that promise unforgettable experiences
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 px-4 bg-gray-50 border-b">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-4 items-center">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Region</label>
                  <select className="border rounded-lg px-3 py-2 bg-white min-w-[150px]">
                    <option>All Regions</option>
                    <option>Europe</option>
                    <option>Asia</option>
                    <option>Americas</option>
                    <option>Africa</option>
                    <option>Oceania</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Experience</label>
                  <select className="border rounded-lg px-3 py-2 bg-white min-w-[150px]">
                    <option>All Experiences</option>
                    <option>Beach</option>
                    <option>Cultural</option>
                    <option>Adventure</option>
                    <option>Nature</option>
                    <option>Urban</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Sort by</label>
                <select className="border rounded-lg px-3 py-2 bg-white min-w-[150px]">
                  <option>Popularity</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations List */}
        <section className="py-12 px-4 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination) => (
                <div key={destination.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                      {destination.price}
                    </div>
                  </div>
                  
                  <div className="p-5 flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-xl">{destination.name}</h3>
                        <div className="flex items-center mt-1 text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{destination.country}</span>
                        </div>
                      </div>
                      <div className="flex items-center bg-yellow-50 px-2 py-1 rounded">
                        <span className="text-yellow-600 font-medium">{destination.rating}</span>
                        <svg className="w-4 h-4 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">{destination.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium mb-2 text-sm">Highlights:</h4>
                      <div className="flex flex-wrap gap-2">
                        {destination.highlights.slice(0, 3).map((highlight, idx) => (
                          <span 
                            key={idx}
                            className="text-xs bg-gray-100 px-2 py-1 rounded"
                          >
                            {highlight}
                          </span>
                        ))}
                        {destination.highlights.length > 3 && (
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">+{destination.highlights.length - 3} more</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t p-5">
                    <Button className="w-full bg-calendar-highlight hover:bg-calendar-highlight/90 text-white">
                      View Packages
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" className="border-calendar-highlight text-calendar-highlight hover:bg-calendar-highlight hover:text-white">
                Load More Destinations
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Destinations;
