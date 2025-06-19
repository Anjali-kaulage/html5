import React from "react";

const destinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    description: "Tropical paradise with beautiful beaches and vibrant culture.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Paris, France",
    description: "The city of light, romance, and world-class art.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "New York City, USA",
    description: "The city that never sleeps, filled with iconic landmarks.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Kyoto, Japan",
    description: "Ancient temples and beautiful cherry blossoms.",
    image:
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Cape Town, South Africa",
    description: "Stunning landscapes with mountains and oceans.",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Rome, Italy",
    description: "Historic ruins and vibrant street life.",
    image:
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=600&q=80",
  },
];

export default function TravelApp() {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-blue-50 to-white shadow-lg flex flex-col" style={{height: "100vh"}}>
      {/* Header */}
      <header className="bg-blue-700 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">Travel Explorer</h1>
        <nav className="space-x-4 hidden md:flex">
          <a href="#destinations" className="hover:underline">
            Destinations
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
        <button className="md:hidden focus:outline-none" aria-label="Open menu">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex-grow p-6 flex flex-col justify-center bg-gradient-to-r from-blue-100 to-blue-200">
        <h2 className="text-3xl font-extrabold mb-2 text-blue-900">
          Discover Your Next Adventure
        </h2>
        <p className="mb-4 text-blue-800">
          Explore amazing destinations around the world with ease.
        </p>
        <div className="flex max-w-lg">
          <input
            type="text"
            placeholder="Search destinations"
            className="flex-grow p-2 rounded-l-md border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-4 rounded-r-md font-semibold hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </section>

      {/* Destinations */}
      <section
        id="destinations"
        className="p-4 overflow-y-auto flex-grow"
      >
        <h3 className="text-xl font-bold mb-3 text-blue-900">Popular Destinations</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {destinations.map(({ id, name, description, image }) => (
            <div
              key={id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={image}
                alt={name}
                className="h-40 w-full object-cover"
                loading="lazy"
              />
              <div className="p-3 flex flex-col flex-grow">
                <h4 className="font-semibold text-blue-800">{name}</h4>
                <p className="text-sm text-gray-600 flex-grow">{description}</p>
                <button className="mt-2 self-start bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition text-sm font-semibold">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white p-3 text-center text-sm">
        © 2024 Travel Explorer. All rights reserved.
      </footer>
    </div>
  );
}
