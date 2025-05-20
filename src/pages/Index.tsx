
import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import CountdownTimer from '@/components/CountdownTimer';
import { motion } from 'framer-motion';

const Index = () => {
  // Updated hero image path to use the new uploaded image
  const heroImage = '/lovable-uploads/c4954fbf-33d2-4b38-923e-9a8da1cfa72c.png';
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
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
        
        <motion.div
          className="container mx-auto px-4 relative z-10 text-center text-white"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="font-script text-5xl md:text-7xl lg:text-8xl mb-4"
            variants={fadeInUp}
          >
            Aswin & Priya
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl font-serif mb-8"
            variants={fadeInUp}
          >
            We are getting engaged
          </motion.p>
          <motion.div 
            className="mb-8"
            variants={fadeInUp}
          >
            <p className="uppercase tracking-widest text-xl md:text-2xl font-light">
              SAVE OUR DATE
            </p>
            <p className="text-2xl md:text-3xl font-serif">
              25.12.2025
            </p>
          </motion.div>
          <motion.div 
            className="flex justify-center space-x-4"
            variants={fadeInUp}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/our-story" className="glass bg-cream/80 text-gold px-6 py-3 rounded-md hover:bg-gold hover:text-cream transition-colors font-medium inline-block backdrop-blur-sm">
                Our Story
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/events" className="glass-dark bg-transparent text-white border border-white px-6 py-3 rounded-md hover:bg-white/10 transition-colors font-medium inline-block backdrop-blur-sm">
                Event Details
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <a href="#welcome" className="flex flex-col items-center">
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
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section id="welcome" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gold mb-6">Welcome to Our Wedding Website</h2>
            <p className="text-lg mb-8 text-foreground">
              We're excited to celebrate our special day with you. Here, you'll find all the information 
              you need about our wedding events, venue, accommodations, and more.
            </p>
            <div className="fancy-divider mx-auto w-32"></div>
            <CountdownTimer targetDate="2025-12-25T10:00:00" />
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <Link to="/our-story" className="glass-card block p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-serif text-gold mb-3">Our Story</h3>
                <p className="text-muted-foreground mb-4">Learn about how we met and our journey together.</p>
                <span className="text-gold font-medium">Read More →</span>
              </Link>
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <Link to="/events" className="glass-card block p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-serif text-gold mb-3">Events</h3>
                <p className="text-muted-foreground mb-4">Find all the details about our wedding events.</p>
                <span className="text-gold font-medium">View Schedule →</span>
              </Link>
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <Link to="/gallery" className="glass-card block p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-serif text-gold mb-3">Gallery</h3>
                <p className="text-muted-foreground mb-4">Browse through our engagement and pre-wedding photos.</p>
                <span className="text-gold font-medium">See Photos →</span>
              </Link>
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <Link to="/location" className="glass-card block p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-serif text-gold mb-3">Location</h3>
                <p className="text-muted-foreground mb-4">Get directions and details about our venue.</p>
                <span className="text-gold font-medium">View Map →</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Watch Live Teaser */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gold mb-6">Watch Live</h2>
            <p className="text-lg mb-8 text-foreground">
              Can't make it to our wedding? Don't worry, you can join us virtually!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/watch-live" 
                className="inline-flex items-center justify-center space-x-2 bg-gold text-white px-6 py-3 rounded-md hover:bg-darkGold transition-colors font-medium"
              >
                <Play size={18} />
                <span>Stream Details</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
