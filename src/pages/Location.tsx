
import React from 'react';
import PageHeader from '@/components/PageHeader';
import { MapPin } from 'lucide-react';

const Location = () => {
  const locationImage = '/lovable-uploads/78f31aa6-ec62-442e-98fe-c0fdb04ebfe1.png';
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <PageHeader title="Location" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-serif text-gold mb-4">Venue Details</h3>
            <div className="mb-6">
              <h4 className="text-xl font-medium mb-2">Sree Vallabha Temple</h4>
              <p className="text-muted-foreground mb-4">Thiruvalla, Kerala, India</p>
              <div className="space-y-2 text-foreground">
                <p>The ceremony and reception will take place at the beautiful Sree Vallabha Temple in Thiruvalla.</p>
                <p>This historic temple is known for its stunning architecture and peaceful atmosphere, making it the perfect backdrop for our special day.</p>
              </div>
            </div>
            <a 
              href="https://maps.google.com/?q=Sree+Vallabha+Temple+Thiruvalla" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gold text-white px-6 py-3 rounded-md hover:bg-darkGold transition-colors font-medium inline-flex items-center self-start"
            >
              <MapPin size={18} className="mr-2" />
              Get Directions
            </a>
          </div>
          <div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={locationImage}
                alt="Sree Vallabha Temple Map" 
                className="w-full object-cover"
              />
            </div>
            <div className="mt-6 text-center text-sm text-muted-foreground">
              Interactive map - click 'Get Directions' for navigation
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gold/20">
            <h4 className="text-xl font-serif text-gold mb-3">Accommodation</h4>
            <p className="text-muted-foreground mb-4">
              We've arranged special rates at these nearby hotels:
            </p>
            <ul className="space-y-2 text-foreground">
              <li>Hotel Grand Krishna - 2km from venue</li>
              <li>Rama's Residency - 3.5km from venue</li>
              <li>Valley View Resort - 5km from venue</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gold/20">
            <h4 className="text-xl font-serif text-gold mb-3">Transportation</h4>
            <p className="text-muted-foreground mb-4">
              Getting to the venue:
            </p>
            <ul className="space-y-2 text-foreground">
              <li>Shuttle service from partner hotels</li>
              <li>Parking available at temple grounds</li>
              <li>Taxi services recommended for others</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gold/20">
            <h4 className="text-xl font-serif text-gold mb-3">Local Attractions</h4>
            <p className="text-muted-foreground mb-4">
              While you're here, consider visiting:
            </p>
            <ul className="space-y-2 text-foreground">
              <li>Thiruvalla Heritage Museum</li>
              <li>Aranmula Boat Race Site</li>
              <li>Pamba River Gardens</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
