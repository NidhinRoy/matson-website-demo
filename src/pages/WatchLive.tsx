
import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Play } from 'lucide-react';

const WatchLive = () => {
  const liveImage = '/lovable-uploads/fbae7968-2e39-4996-bf30-c426af6c405e.png';
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <PageHeader title="Watch Live" accent="." />
        
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <p className="text-lg text-muted-foreground">
            Can't make it to our wedding? You can still be part of our special day by watching the live stream.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg mb-8">
            <img 
              src={liveImage}
              alt="Live Stream Thumbnail" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gold transition-colors">
                <Play size={36} className="text-gold hover:text-white ml-1" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gold/20 mb-12">
            <h3 className="text-2xl font-serif text-gold mb-4">Live Stream Details</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <span className="font-medium min-w-[120px]">Date:</span>
                <span>December 25, 2025</span>
              </p>
              <p className="flex items-center">
                <span className="font-medium min-w-[120px]">Start Time:</span>
                <span>10:00 AM IST (Indian Standard Time)</span>
              </p>
              <p className="flex items-center">
                <span className="font-medium min-w-[120px]">Platform:</span>
                <span>YouTube Live</span>
              </p>
              <p className="flex items-center">
                <span className="font-medium min-w-[120px]">Channel:</span>
                <span>Aswin & Priya Wedding</span>
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gold text-white px-6 py-3 rounded-md hover:bg-darkGold transition-colors font-medium inline-flex items-center"
            >
              <Play size={18} className="mr-2" />
              Subscribe to Channel
            </a>
            <p className="mt-4 text-muted-foreground">
              Subscribe to our channel to get notified when we go live.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchLive;
