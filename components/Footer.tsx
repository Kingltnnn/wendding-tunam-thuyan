
import React from 'react';
import Reveal from './Reveal';

const Footer: React.FC = () => {
  return (
    <footer className="h-screen w-full snap-start bg-[#F9F5F0] flex flex-col relative overflow-hidden">
      
      {/* Full Page Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/ynYJzQKc/1D0A4540.jpg" 
          alt="Tú Nam & Thúy An Thank You Background" 
          className="w-full h-full object-cover"
        />
        {/* Deep gradient overlay for better text contrast with the serif font */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20"></div>
      </div>

      {/* Text Content Overlay - Refined with smaller sizes and lower placement */}
      <div className="relative z-10 mt-auto mb-12 md:mb-20 px-6 text-center">
        <Reveal animation="fade-up" delay={300} className="max-w-2xl mx-auto space-y-4 md:space-y-6">
          
          <div className="space-y-3">
            <p className="text-white font-serif italic text-lg md:text-xl tracking-wide drop-shadow-lg">
              Cảm ơn bạn đã dành tình cảm cho chúng mình!
            </p>
            
            <div className="w-8 h-[1px] bg-white/40 mx-auto"></div>
            
            <p className="text-white/80 font-serif text-xs md:text-sm leading-relaxed max-w-sm md:max-w-md mx-auto drop-shadow-md px-4 opacity-80">
              Sự hiện diện của bạn chính là món quà ý nghĩa nhất, và chúng mình vô cùng trân quý khi được cùng bạn chia sẻ niềm hạnh phúc trong ngày trọng đại này.
            </p>
          </div>

          <div className="pt-2 md:pt-4">
            <h2 className="font-serif text-5xl md:text-7xl text-white tracking-tighter drop-shadow-2xl opacity-90 select-none">
              Thankyou!
            </h2>
          </div>
        </Reveal>
      </div>

      {/* Vertical Side Text - Slightly more subtle */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 origin-bottom rotate-90 z-20">
         <p className="text-[9px] md:text-[10px] text-white/40 font-serif tracking-[0.4em] uppercase whitespace-nowrap">
          HAPPY FOREVER 
         </p>
      </div>

      {/* Delicate inner border to emphasize the "Invitation Card" feel */}
      <div className="absolute inset-6 md:inset-10 border border-white/10 pointer-events-none z-10"></div>
    </footer>
  );
};

export default Footer;
