
import React from 'react';
import PageHeader from '@/components/PageHeader';

const Events = () => {
  const eventsImage = '/lovable-uploads/fc085db9-9f1a-450e-b669-f6f052f93b76.png';
  
  // Wedding events
  const events = [
    {
      time: '10:00 AM',
      title: 'Guest Arrival & Seating',
      description: 'Please arrive on time to be seated before the ceremony begins.'
    },
    {
      time: '10:30 AM',
      title: 'Church Ceremony Begins',
      description: 'The wedding ceremony will commence with traditional rituals.'
    },
    {
      time: '11:15 AM',
      title: 'Vows & Ring Exchange',
      description: 'The couple will exchange their vows and wedding rings.'
    },
    {
      time: '11:30 AM',
      title: 'Official Pronouncement',
      description: 'The couple will be officially pronounced as married.'
    },
    {
      time: '12:00 PM',
      title: 'Wedding Photos at the Church Garden',
      description: 'Family and group photos will be taken in the church garden.'
    },
    {
      time: '1:00 PM',
      title: 'Reception Lunch at Church Hall',
      description: 'Join us for a delightful lunch reception at the church hall.'
    },
    {
      time: '2:00 PM',
      title: "Couple's First Dance & Toasts",
      description: 'The couple will share their first dance followed by toasts.'
    },
    {
      time: '3:00 PM',
      title: 'Cake Cutting & Celebration',
      description: 'The couple will cut the wedding cake followed by celebrations.'
    },
    {
      time: '4:00 PM',
      title: 'Thank You Speech',
      description: 'The couple will share their gratitude with all guests.'
    },
    {
      time: '5:00 PM',
      title: "Farewell & Couple's Send-off",
      description: 'Bid farewell to the newlyweds as they embark on their new journey.'
    }
  ];
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <PageHeader title="Events" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src={eventsImage}
              alt="Wedding Events" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-serif text-gold mb-4">Wedding Ceremony & Reception</h3>
            <p className="text-lg mb-4">
              We're excited to invite you to celebrate our wedding day with us. The ceremony 
              and reception will take place at Sree Vallabha Temple, Thiruvalla.
            </p>
            <p className="text-lg mb-6">
              Please find the detailed schedule below. We can't wait to share this special day with you!
            </p>
            <div>
              <p className="font-medium">Date: <span className="font-normal">December 25, 2025</span></p>
              <p className="font-medium">Venue: <span className="font-normal">Sree Vallabha Temple, Thiruvalla</span></p>
              <p className="font-medium">Dress Code: <span className="font-normal">Traditional Attire</span></p>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-serif text-gold mb-8 text-center">Event Schedule</h3>
          
          <div className="space-y-6">
            {events.map((event, index) => (
              <div key={index} className="flex gap-6 items-start bg-white p-6 rounded-lg shadow-sm border border-gold/20">
                <div className="min-w-[100px] text-center">
                  <span className="text-xl font-medium text-gold block">{event.time}</span>
                </div>
                <div>
                  <h4 className="text-xl font-serif text-foreground mb-2">{event.title}</h4>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="#" 
              download 
              className="bg-gold text-white px-6 py-3 rounded-md hover:bg-darkGold transition-colors font-medium inline-block"
            >
              Download Schedule
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
