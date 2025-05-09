
import React from 'react';
import PageHeader from '@/components/PageHeader';
import GalleryGrid from '@/components/GalleryGrid';

const Gallery = () => {
  // Images from the gallery
  const images = [
    '/lovable-uploads/4d2a86c3-be84-4c0a-b3eb-12c65838f5dd.png',
    '/lovable-uploads/58c0768d-1d9f-40c5-b639-edb15ffa83c6.png',
    '/lovable-uploads/b62dea22-612a-4c7a-91b2-08d1c51e5af9.png',
    '/lovable-uploads/fc085db9-9f1a-450e-b669-f6f052f93b76.png',
    '/lovable-uploads/78f31aa6-ec62-442e-98fe-c0fdb04ebfe1.png',
    '/lovable-uploads/33f35150-6c2a-48ae-b08f-2844f80464bd.png',
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <PageHeader title="Gallery" />
        
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <p className="text-lg text-muted-foreground">
            Browse through some of our favorite moments together - from our first dates to our engagement photoshoot.
          </p>
        </div>
        
        <GalleryGrid images={images} />
        
        <div className="mt-12 text-center">
          <button className="bg-gold text-white px-6 py-3 rounded-md hover:bg-darkGold transition-colors font-medium">
            Load More Photos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
