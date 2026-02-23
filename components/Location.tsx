
import React from 'react';
import Reveal from './Reveal';

const Location: React.FC = () => {
  const iframeSrc = "https://maps.google.com/maps?q=20.862441,106.167778&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="location" className="w-full bg-white relative flex flex-col items-center justify-center py-4 md:py-8 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-2 gap-4 md:gap-16 items-stretch px-4 md:px-8">
        
        {/* Left Image */}
        <Reveal animation="slide-left" className="w-full h-[250px] sm:h-[400px] md:h-[600px] relative">
          <img 
            src="/img/1D0A4084.webp" 
            alt="Couple" 
            className="w-full h-full object-cover" 
          />
        </Reveal>
        
        {/* Right Content */}
        <Reveal animation="slide-right" className="flex flex-col h-full items-center text-center py-2 md:py-4">
          <img 
            src="https://assets.cinelove.me/templates/assets/428a253a-0bb7-412b-8861-ec12c5f06582/9c01aa31-3bae-48ba-aa73-64b67b69668a.png" 
            alt="Address" 
            className="w-24 sm:w-32 md:w-64 mb-2 md:mb-6 object-contain shrink-0" 
          />
          <h2 className="font-serif text-xs sm:text-lg md:text-3xl font-bold text-gray-900 mb-1 md:mb-4 uppercase tracking-wide shrink-0">
            Tư Gia Nhà Trai
          </h2>
          <p className="text-gray-600 mb-3 md:mb-8 font-sans text-[10px] sm:text-sm md:text-lg shrink-0">
           Đường An - TP.Hải Phòng
          </p>
          
          <div className="w-full max-w-md border border-[#8B1A1A] p-0.5 md:p-1 bg-white flex-1 min-h-0 relative">
            <iframe 
              title="Wedding Location"
              width="100%" 
              height="100%" 
              id="gmap_canvas" 
              src={iframeSrc}
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0}
              className="absolute inset-0 w-full h-full p-0.5 md:p-1"
            ></iframe>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Location;
