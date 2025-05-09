
import React from 'react';
import PageHeader from '@/components/PageHeader';

const OurStory = () => {
  // Story sections
  const storyImage1 = '/lovable-uploads/33f35150-6c2a-48ae-b08f-2844f80464bd.png';
  const coupleImage = '/lovable-uploads/58c0768d-1d9f-40c5-b639-edb15ffa83c6.png';
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <PageHeader title="Our Story" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-serif text-gold mb-4">How We Met</h3>
            <p className="text-lg mb-4">
              Our paths crossed unexpectedly at a mutual friend's birthday celebration in 2022. 
              Aswin was captivated by Priya's smile from across the room, while Priya couldn't 
              help but notice Aswin's infectious laughter.
            </p>
            <p className="text-lg">
              What started as casual conversation over cups of coffee quickly blossomed into 
              something more meaningful. We discovered our shared love for travel, traditional 
              music, and our deep connection to our cultural roots.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src={coupleImage}
              alt="Aswin and Priya" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center my-16">
          <h3 className="text-2xl md:text-3xl font-serif text-gold mb-6">The Proposal</h3>
          <p className="text-lg mb-8">
            After two years of creating beautiful memories together, Aswin knew it was time to take the 
            next step. On a quiet evening by the beach, with the sound of waves as background music, 
            he got down on one knee and asked Priya to spend the rest of her life with him. 
            Through happy tears, she said yes - making it the most perfect moment of our lives so far.
          </p>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <img 
              src={storyImage1}
              alt="Our Story Video Thumbnail" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gold transition-colors">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-gold hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 5v10l7-5-7-5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-secondary p-6 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-serif text-gold mb-3">First Date</h4>
            <p className="text-muted-foreground">
              A quiet dinner at our favorite local restaurant, where we talked for hours and discovered 
              our many shared interests.
            </p>
          </div>
          
          <div className="bg-secondary p-6 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-serif text-gold mb-3">First Trip</h4>
            <p className="text-muted-foreground">
              A weekend getaway to the mountains, where we watched the sunrise together and realized 
              how perfectly we complement each other.
            </p>
          </div>
          
          <div className="bg-secondary p-6 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-serif text-gold mb-3">The Proposal</h4>
            <p className="text-muted-foreground">
              On the beautiful shores of Kovalam Beach, with the sunset painting the sky in shades of 
              orange and pink, Aswin proposed with a ring and his heart.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
