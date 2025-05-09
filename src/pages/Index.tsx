
import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import CountdownTimer from '@/components/CountdownTimer';

const Index = () => {
  // Placeholder image paths - use the uploaded ones
  const heroImage = '/lovable-uploads/58c0768d-1d9f-40c5-b639-edb15ffa83c6.png';
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Aswin and Priya" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="font-script text-5xl md:text-7xl lg:text-8xl mb-4 animate-fade-in">
            Aswin & Priya
          </h1>
          <p className="text-2xl md:text-3xl font-serif mb-8 animate-fade-in">
            We are getting engaged
          </p>
          <div className="mb-8 animate-fade-in">
            <p className="uppercase tracking-widest text-xl md:text-2xl font-light">
              SAVE OUR DATE
            </p>
            <p className="text-2xl md:text-3xl font-serif">
              25.12.2025
            </p>
          </div>
          <div className="flex justify-center space-x-4 animate-fade-in">
            <Link to="/our-story" className="bg-cream text-gold px-6 py-3 rounded-md hover:bg-gold hover:text-cream transition-colors font-medium">
              Our Story
            </Link>
            <Link to="/events" className="bg-transparent text-white border border-white px-6 py-3 rounded-md hover:bg-white/10 transition-colors font-medium">
              Event Details
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white">
          <a href="#welcome" className="flex flex-col items-center animate-bounce">
            <span className="mb-2">Scroll Down</span>
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Welcome Section */}
      <section id="welcome" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-gold mb-6">Welcome to Our Wedding Website</h2>
            <p className="text-lg mb-8 text-foreground">
              We're excited to celebrate our special day with you. Here, you'll find all the information 
              you need about our wedding events, venue, accommodations, and more.
            </p>
            <div className="fancy-divider mx-auto w-32"></div>
            <CountdownTimer targetDate="2025-12-25T10:00:00" />
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/our-story" className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-serif text-gold mb-3">Our Story</h3>
              <p className="text-muted-foreground mb-4">Learn about how we met and our journey together.</p>
              <span className="text-gold font-medium">Read More →</span>
            </Link>
            
            <Link to="/events" className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-serif text-gold mb-3">Events</h3>
              <p className="text-muted-foreground mb-4">Find all the details about our wedding events.</p>
              <span className="text-gold font-medium">View Schedule →</span>
            </Link>
            
            <Link to="/gallery" className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-serif text-gold mb-3">Gallery</h3>
              <p className="text-muted-foreground mb-4">Browse through our engagement and pre-wedding photos.</p>
              <span className="text-gold font-medium">See Photos →</span>
            </Link>
            
            <Link to="/location" className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-serif text-gold mb-3">Location</h3>
              <p className="text-muted-foreground mb-4">Get directions and details about our venue.</p>
              <span className="text-gold font-medium">View Map →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Watch Live Teaser */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-gold mb-6">Watch Live</h2>
            <p className="text-lg mb-8 text-foreground">
              Can't make it to our wedding? Don't worry, you can join us virtually!
            </p>
            <Link 
              to="/watch-live" 
              className="inline-flex items-center justify-center space-x-2 bg-gold text-white px-6 py-3 rounded-md hover:bg-darkGold transition-colors font-medium"
            >
              <Play size={18} />
              <span>Stream Details</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
