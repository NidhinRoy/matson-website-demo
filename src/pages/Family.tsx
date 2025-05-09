
import React from 'react';
import PageHeader from '@/components/PageHeader';

const Family = () => {
  const familyImage = '/lovable-uploads/0bb998e8-b0e9-442b-80e0-aea5f0990ccf.png';
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <PageHeader title="Our Family" />
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="rounded-lg overflow-hidden shadow-lg mb-8">
              <img 
                src={familyImage}
                alt="Family Photo" 
                className="w-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-3xl md:text-4xl font-serif text-gold mb-6">Aswin</h3>
              <p className="text-lg mb-4">
                Son of Mr. Biju KA & Mrs. Kavitha Biju
              </p>
              <p className="text-muted-foreground mb-6">
                Kumblemannil, Vallamkulam<br />
                Thiruvalla
              </p>
              <p className="text-foreground">
                Aswin grew up in Thiruvalla, where he developed his passion for engineering and photography. 
                He is known for his infectious laughter and warm personality. Currently working as a software 
                engineer, he balances his love for technology with his creative pursuits.
              </p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-serif text-gold mb-6">Priya</h3>
              <p className="text-lg mb-4">
                Daughter of Mr. Rajesh TS & Mrs. Letha R
              </p>
              <p className="text-muted-foreground mb-6">
                Manasam, Sreekumarapuram Nagar,<br />
                Mangad, Kollam
              </p>
              <p className="text-foreground">
                Priya was raised in Kollam, where she discovered her love for classical dance and literature. 
                Her gentle nature and artistic talents have always made her stand out. She works as a data analyst 
                and enjoys teaching dance to children in her spare time.
              </p>
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-serif text-gold mb-6">Words from Our Parents</h3>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gold/20 italic text-foreground">
              <p className="mb-4">
                "We have watched Aswin and Priya's love story unfold with joy in our hearts. Their 
                commitment to each other and their shared values make us confident that they will build 
                a beautiful life together. We are proud to welcome Priya into our family."
              </p>
              <p className="text-right font-medium not-italic">- Mr. & Mrs. Biju</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gold/20 mt-6 italic text-foreground">
              <p className="mb-4">
                "From the first time Aswin visited our home, we knew he was special. His respect, kindness, 
                and genuine love for our daughter fill us with happiness. We are blessed to gain not just a 
                son-in-law but a son in Aswin."
              </p>
              <p className="text-right font-medium not-italic">- Mr. & Mrs. Rajesh</p>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-serif text-gold mb-6">Wedding Party</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-foreground">
              We're grateful to have our closest friends and family members standing beside us 
              as we begin this new journey together.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-4"></div>
                <h4 className="font-medium">Anoop K</h4>
                <p className="text-sm text-muted-foreground">Best Man</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-4"></div>
                <h4 className="font-medium">Meera R</h4>
                <p className="text-sm text-muted-foreground">Maid of Honor</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-4"></div>
                <h4 className="font-medium">Vishnu S</h4>
                <p className="text-sm text-muted-foreground">Groomsman</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-4"></div>
                <h4 className="font-medium">Lakshmi T</h4>
                <p className="text-sm text-muted-foreground">Bridesmaid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Family;
