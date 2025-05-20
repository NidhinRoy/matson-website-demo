
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-cream py-8 border-t border-gold/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 md:mb-0">
            <Link to="/" className="font-script text-2xl text-gold">
              Aswin & Priya
            </Link>
            <p className="text-muted-foreground mt-1">December 25, 2025</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <Link to="/gallery" className="text-foreground hover:text-gold transition-colors">
                Gallery
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <Link to="/location" className="text-foreground hover:text-gold transition-colors">
                Location
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <Link to="/contact" className="text-foreground hover:text-gold transition-colors">
                Contact
              </Link>
            </motion.div>
          </div>
        </motion.div>
        <div className="mt-8 text-center text-muted-foreground text-sm">
          <p>&copy; 2025 Matson . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
