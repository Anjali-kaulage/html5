
import React from 'react';
import { MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

interface Destination {
  id: number;
  name: string;
  location: string;
  image: string;
  price: string;
  rating: number;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Santorini",
    location: "Greece",
    image: "https://th.bing.com/th/id/R.652fe3961356b4c3c30c072e3e107a1e?rik=IUAWeTmJjTqFFw&pid=ImgRaw&r=0",
    price: "81,299",
    rating: 4.8
  },
  {
    id: 2,
    name: "Bali",
    location: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    price: "91899",
    rating: 4.7
  },
  {
    id: 3,
    name: "Kyoto",
    location: "Japan",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186",
    price: "61,599",
    rating: 4.9
  },
  {
    id: 4,
    name: "Machu Picchu",
    location: "Peru",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
    price: "81,899",
    rating: 4.9
  },
  {
    id: 5,
    name: "Amalfi Coast",
    location: "Italy",
    image: "https://th.bing.com/th/id/OIP.0IWOg5ebsYXXcGDk9KKimgHaEK?cb=iwp2&rs=1&pid=ImgDetMain",
    price: "91,499",
    rating: 4.7
  }
];

const PopularDestinations: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most sought-after vacation destinations loved by travelers around the world
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-1">
            {destinations.map((destination) => (
              <CarouselItem key={destination.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                      <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                        {destination.price}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg">{destination.name}</h3>
                          <div className="flex items-center mt-1 text-gray-500">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span className="text-sm">{destination.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center bg-yellow-50 px-2 py-1 rounded">
                          <span className="text-yellow-600 font-medium">{destination.rating}</span>
                          <svg className="w-4 h-4 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex justify-center gap-2">
            <CarouselPrevious className="relative static left-0 translate-y-0 bg-calendar-highlight text-white hover:bg-calendar-highlight/90" />
            <CarouselNext className="relative static right-0 translate-y-0 bg-calendar-highlight text-white hover:bg-calendar-highlight/90" />
          </div>
        </Carousel>
        
      </div>
    </section>
  );
};

export default PopularDestinations;
