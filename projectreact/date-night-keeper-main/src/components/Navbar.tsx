
import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, MapPin, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 w-full z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <Plane className="h-6 w-6 text-calendar-highlight" />
          <span className="text-xl font-bold bg-gradient-to-r from-calendar-highlight to-calendar-event bg-clip-text text-transparent">
            Wanderlust
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-calendar-highlight transition-colors">
            Home
          </Link>
          <Link to="/destinations" className="text-sm font-medium hover:text-calendar-highlight transition-colors">
            Destinations
          </Link>
          <Link to="/trips" className="text-sm font-medium hover:text-calendar-highlight transition-colors">
            Trips
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-calendar-highlight transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-calendar-highlight transition-colors">
            Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-sm font-medium">
            Sign In
          </Button>
          <Button className="bg-gradient-to-r from-calendar-highlight to-calendar-event hover:opacity-90 text-white">
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-500 hover:text-calendar-highlight"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link to="/" className="py-2 text-sm font-medium hover:text-calendar-highlight" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/destinations" className="py-2 text-sm font-medium hover:text-calendar-highlight" onClick={() => setIsOpen(false)}>
              Destinations
            </Link>
            <Link to="/trips" className="py-2 text-sm font-medium hover:text-calendar-highlight" onClick={() => setIsOpen(false)}>
              Trips
            </Link>
            <Link to="/about" className="py-2 text-sm font-medium hover:text-calendar-highlight" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link to="/contact" className="py-2 text-sm font-medium hover:text-calendar-highlight" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t border-gray-100 mt-2">
              <Button variant="ghost" className="justify-center">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-calendar-highlight to-calendar-event hover:opacity-90 text-white justify-center">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
