
import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { motion } from 'framer-motion';

interface GalleryGridProps {
  images: string[];
  limit?: number;
}

export default function GalleryGrid({ images, limit }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const displayImages = limit ? images.slice(0, limit) : images;
  
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      } 
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayImages.map((image, index) => (
          <motion.div 
            key={index} 
            className="aspect-[3/4] overflow-hidden rounded-lg border border-gold/20 shadow-sm hover:shadow-md transition-all cursor-pointer backdrop-blur-sm bg-white/10"
            onClick={() => setSelectedImage(image)}
            variants={imageVariants}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 10px 25px -5px rgba(176, 152, 109, 0.3)" 
            }}
            layout
          >
            <img 
              src={image} 
              alt={`Aswin and Priya - photo ${index + 1}`} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-hidden p-1 bg-cream/80 backdrop-blur-lg">
          {selectedImage && (
            <motion.img 
              src={selectedImage} 
              alt="Enlarged gallery image" 
              className="w-full h-full object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
