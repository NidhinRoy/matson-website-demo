
import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  const contactImage = '/lovable-uploads/b62dea22-612a-4c7a-91b2-08d1c51e5af9.png';
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <PageHeader title="Contact Us" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src={contactImage}
              alt="Aswin and Priya" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-serif text-gold mb-4">Get in Touch</h3>
            <p className="text-lg mb-6">
              We'd love to hear from you! Whether you have questions about our wedding, 
              need accommodation recommendations, or just want to send us well wishes, feel free to reach out.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-gold mr-4" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:aswinandpriya@example.com" className="text-muted-foreground hover:text-gold transition-colors">
                    aswinandpriya@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="text-gold mr-4" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+911234567890" className="text-muted-foreground hover:text-gold transition-colors">
                    +91 12345 67890
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-serif text-gold mb-4">Parents Contact</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-medium">Mr. Biju KA & Kavitha Biju</p>
                  <p className="text-muted-foreground">
                    Kumblemannil, Vallamkulam<br />
                    Thiruvalla
                  </p>
                  <a href="tel:+911234567890" className="text-muted-foreground hover:text-gold transition-colors block mt-1">
                    +91 98765 43210
                  </a>
                </div>
                <div>
                  <p className="font-medium">Mr. Rajesh TS & Mrs. Letha R</p>
                  <p className="text-muted-foreground">
                    Manasam, Sreekumarapuram Nagar,<br />
                    Mangad, Kollam
                  </p>
                  <a href="tel:+911234567890" className="text-muted-foreground hover:text-gold transition-colors block mt-1">
                    +91 98765 43211
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-serif text-gold mb-8 text-center">Send us a Message</h3>
          
          <form className="bg-white p-8 rounded-lg shadow-md border border-gold/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-2 border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                placeholder="Question about the wedding"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full px-4 py-2 border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <div className="text-center">
              <button 
                type="submit" 
                className="bg-gold text-white px-6 py-3 rounded-md hover:bg-darkGold transition-colors font-medium"
              >
                Send Message
              </button>
            </div>
          </form>
          
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>We'll get back to you as soon as possible!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
