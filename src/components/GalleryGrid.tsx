
import React from 'react';

interface GalleryGridProps {
  images: string[];
  limit?: number;
}

export default function GalleryGrid({ images, limit }: GalleryGridProps) {
  const displayImages = limit ? images.slice(0, limit) : images;
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {displayImages.map((image, index) => (
        <div key={index} className="aspect-square overflow-hidden rounded-lg border border-gold/20 shadow-sm hover:shadow-md transition-all">
          <img 
            src={image} 
            alt={`Gallery image ${index + 1}`} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      ))}
    </div>
  );
}
