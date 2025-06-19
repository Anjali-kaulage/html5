
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Plane, Globe, Users, Award, Calendar, Clock } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460574283810-2aab119d8511')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Wanderlust</h1>
              <p className="text-xl opacity-90 mb-8">
                Crafting unforgettable travel experiences since 2010
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <div className="prose lg:prose-lg mx-auto">
                <p className="text-gray-700 mb-4">
                  Wanderlust was born from a passion for exploration and a desire to share the transformative power of travel with others. Founded in 2010 by a group of avid travelers who believed that experiencing new cultures and destinations could change lives, our agency has grown from a small startup to a trusted name in the travel industry.
                </p>
                <p className="text-gray-700 mb-4">
                  What began as a small office with just three travel enthusiasts has expanded into a team of over 50 travel experts, each bringing their unique experiences and destination knowledge to help our clients create memories that last a lifetime.
                </p>
                <p className="text-gray-700">
                  Today, Wanderlust arranges journeys for thousands of travelers each year, maintaining the same personalized service and attention to detail that defined us from the beginning. Our mission remains unchanged: to open the world to those who seek authentic, meaningful travel experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Wanderlust</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-calendar-highlight/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-7 w-7 text-calendar-highlight" />
                </div>
                <h3 className="text-xl font-bold mb-2">Destination Expertise</h3>
                <p className="text-gray-600">
                  Our travel consultants have firsthand experience with over 100 countries, providing insider knowledge you won't find elsewhere.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-calendar-highlight/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-calendar-highlight" />
                </div>
                <h3 className="text-xl font-bold mb-2">Personalized Service</h3>
                <p className="text-gray-600">
                  We take the time to understand your preferences and travel style to create customized itineraries that perfectly match your dreams.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-calendar-highlight/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-7 w-7 text-calendar-highlight" />
                </div>
                <h3 className="text-xl font-bold mb-2">Award-Winning Agency</h3>
                <p className="text-gray-600">
                  Recognized by the travel industry for our exceptional service and innovative travel packages year after year.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-calendar-highlight/10 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-7 w-7 text-calendar-highlight" />
                </div>
                <h3 className="text-xl font-bold mb-2">Flexible Planning</h3>
                <p className="text-gray-600">
                  Change of plans? No problem. We offer flexible booking options and are ready to adjust your itinerary as needed.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-calendar-highlight/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-7 w-7 text-calendar-highlight" />
                </div>
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Travel with peace of mind knowing our team is available around the clock to assist with any issues that may arise.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-calendar-highlight/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-7 w-7 text-calendar-highlight" />
                </div>
                <h3 className="text-xl font-bold mb-2">Unique Experiences</h3>
                <p className="text-gray-600">
                  Access exclusive experiences and hidden gems that transform an ordinary trip into an extraordinary journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Anagha Kaulage",
                  role: "Founder & CEO",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                  bio: "A passionate traveler with 20+ years in the industry."
                },
                {
                  name: "Atharv Deshmukh",
                  role: "Head of Asia Pacific",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
                  bio: "Specialized in unique cultural experiences across Asia."
                },
                {
                  name: "Anisha Tarte",
                  role: "European Destinations",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
                  bio: "Your guide to the hidden treasures of Europe."
                },
                {
                  name: "Aniket Patil",
                  role: "Adventure Travel",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
                  bio: "Leading our expeditions to the world's wildest places."
                }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 relative mx-auto w-48 h-48 rounded-full overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-calendar-highlight mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
