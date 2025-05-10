
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-cream py-8 border-t border-gold/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="font-script text-2xl text-gold">
              Aswin & Priya
            </Link>
            <p className="text-muted-foreground mt-1">December 25, 2025</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <Link to="/gallery" className="text-foreground hover:text-gold transition-colors">
              Gallery
            </Link>
            <Link to="/location" className="text-foreground hover:text-gold transition-colors">
              Location
            </Link>
            <Link to="/contact" className="text-foreground hover:text-gold transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-muted-foreground text-sm">
          <p>&copy; 2025 Matson . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
