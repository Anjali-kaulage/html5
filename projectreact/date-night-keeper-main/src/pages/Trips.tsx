
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, Users, Clock, MapPin, Tag, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const Trips: React.FC = () => {
  // Sample trip data
  const trips = [
    {
      id: 1,
      name: "Greek Islands Explorer",
      duration: "10 Days",
      groupSize: "12 people max",
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
      description: "Discover the breathtaking beauty of the Greek islands with our carefully curated itinerary. From Santorini's iconic sunsets to Mykonos's vibrant culture and the hidden gems of lesser-known islands.",
      price: "62,499",
      startDate: "June 15, 2025",
      category: "island",
      highlights: ["Santorini sunset cruise", "Athens historical tour", "Mykonos beach party"],
      rating: 4.9
    },
    {
      id: 2,
      name: "Japanese Culture Immersion",
      duration: "14 Days",
      groupSize: "10 people max",
      image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3",
      description: "Experience the perfect blend of ancient traditions and modern innovations in Japan. From Tokyo's bustling streets to Kyoto's serene temples and the picturesque countryside.",
      price: "93,299",
      startDate: "April 5, 2025",
      category: "culture",
      highlights: ["Tea ceremony in Kyoto", "Tokyo night food tour", "Mt. Fuji excursion"],
      rating: 4.8
    },
    {
      id: 3,
      name: "Peruvian Andes Adventure",
      duration: "12 Days",
      groupSize: "8 people max",
      image: "https://images.unsplash.com/photo-1526392060635-9d6019884377",
      description: "Trek through the stunning landscapes of Peru, from the sacred valley to the magnificent Machu Picchu. Experience authentic Peruvian culture, cuisine, and hospitality.",
      price: "72,799",
      startDate: "August 22, 2025",
      category: "adventure",
      highlights: ["Inca Trail trek", "Sacred Valley exploration", "Cusco cultural tour"],
      rating: 4.9
    },
    {
      id: 4,
      name: "Safari and Beach Tanzania",
      duration: "11 Days",
      groupSize: "6 people max",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      description: "Combine the thrill of an African safari with relaxing beach days on Tanzania's pristine coastline. Witness the incredible wildlife of Serengeti and Ngorongoro, then unwind on Zanzibar's white sands.",
      price: "53,899",
      startDate: "July 10, 2025",
      category: "adventure",
      highlights: ["Big Five game drives", "Zanzibar beach stay", "Local village visit"],
      rating: 4.8
    },
    {
      id: 5,
      name: "Italian Foodie Tour",
      duration: "8 Days",
      groupSize: "12 people max",
      image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee",
      description: "Indulge in the flavors of Italy as you journey through Rome, Florence, and Bologna. Learn cooking techniques from local chefs and enjoy wine tastings in Tuscany's rolling hills.",
      price: "72,199",
      startDate: "September 14, 2025",
      category: "food",
      highlights: ["Pasta making class in Bologna", "Tuscan wine tour", "Roman food market visit"],
      rating: 4.7
    },
    {
      id: 6,
      name: "Northern Lights Expedition",
      duration: "7 Days",
      groupSize: "10 people max",
      image: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73",
      description: "Chase the magical aurora borealis across Iceland's stunning landscapes. Soak in hot springs, explore ice caves, and witness the mesmerizing dance of the northern lights.",
      price: "82,899",
      startDate: "February 3, 2025",
      category: "nature",
      highlights: ["Aurora viewing", "Blue Lagoon visit", "Glacier hike"],
      rating: 4.9
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503220317375-aaad61436b1b')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Curated Trips</h1>
              <p className="text-xl opacity-90">
                Expertly designed travel experiences to create memories that last a lifetime
              </p>
            </div>
          </div>
        </section>

        {/* Filter/Category Section */}
        <section className="py-8 bg-white">
          <div className="container mx-auto">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="h-10">
                  <TabsTrigger value="all" className="px-6">All Trips</TabsTrigger>
                  <TabsTrigger value="adventure" className="px-6">Adventure</TabsTrigger>
                  <TabsTrigger value="culture" className="px-6">Cultural</TabsTrigger>
                  <TabsTrigger value="food" className="px-6">Food & Wine</TabsTrigger>
                  <TabsTrigger value="nature" className="px-6">Nature</TabsTrigger>
                  <TabsTrigger value="island" className="px-6">Island</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {trips.map((trip) => (
                    <TripCard key={trip.id} trip={trip} />
                  ))}
                </div>
              </TabsContent>
              
              {["adventure", "culture", "food", "nature", "island"].map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {trips
                      .filter((trip) => trip.category === category)
                      .map((trip) => (
                        <TripCard key={trip.id} trip={trip} />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Trip Planning Section */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Plan Your Perfect Trip</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don't see exactly what you're looking for? Our travel experts can create a custom itinerary
                tailored precisely to your preferences, timeline, and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-14 h-14 bg-calendar-highlight/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Calendar className="h-7 w-7 text-calendar-highlight" />
                </div>
                <h3 className="text-xl font-bold mb-2">Flexible Dates</h3>
                <p className="text-gray-600">
                  Choose the perfect time for your journey with flexible scheduling options.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-14 h-14 bg-calendar-highlight/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Users className="h-7 w-7 text-calendar-highlight" />
                </div>
                <h3 className="text-xl font-bold mb-2">Private Groups</h3>
                <p className="text-gray-600">
                  Travel with just your friends and family for a more intimate experience.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-14 h-14 bg-calendar-highlight/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Star className="h-7 w-7 text-calendar-highlight" />
                </div>
                <h3 className="text-xl font-bold mb-2">Custom Experiences</h3>
                <p className="text-gray-600">
                  Add special experiences and activities that match your interests.
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <Button className="bg-calendar-highlight hover:bg-calendar-highlight/90 text-white px-8 py-6">
                Request Custom Itinerary
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// Trip Card Component
interface TripCardProps {
  trip: {
    id: number;
    name: string;
    duration: string;
    groupSize: string;
    image: string;
    description: string;
    price: string;
    startDate: string;
    category: string;
    highlights: string[];
    rating: number;
  };
}

const TripCard: React.FC<TripCardProps> = ({ trip }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={trip.image} 
          alt={trip.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
          {trip.price}
        </div>
      </div>
      
      <div className="p-5 flex-grow">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-xl">{trip.name}</h3>
          <div className="flex items-center bg-yellow-50 px-2 py-1 rounded">
            <span className="text-yellow-600 font-medium text-sm">{trip.rating}</span>
            <svg className="w-4 h-4 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
        
        <div className="mt-4 space-y-2 text-gray-500 text-sm">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            <span>{trip.duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2" />
            <span>{trip.groupSize}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>Starting {trip.startDate}</span>
          </div>
          <div className="flex items-center">
            <Tag className="h-4 w-4 mr-2" />
            <span className="capitalize">{trip.category}</span>
          </div>
        </div>
        
        <p className="mt-4 text-gray-600 line-clamp-3">{trip.description}</p>
      </div>
      
      <div className="p-5 border-t">
        <Button className="w-full bg-calendar-highlight hover:bg-calendar-highlight/90 text-white">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default Trips;
