
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import Reveal from './Reveal';

const photos = [
  "https://i.ibb.co/wF8xCw78/1-D0-A4394-2.jpg",
  "https://i.ibb.co/JjnSc6Pb/1D0A3821.jpg",
  "https://i.ibb.co/m5h6q3HQ/1D0A3845.jpg",
  "https://i.ibb.co/3nbsNmP/1D0A4111.jpg",
  "https://i.ibb.co/0pwQYFtP/1D0A4301.jpg",
  "https://iili.io/fsoB3iX.jpg",
];

const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextImage = () => setActiveIndex((prev) => (prev + 1) % photos.length);
  const prevImage = () => setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <section id="gallery" className="min-h-screen w-full bg-[#FAF7F2] flex flex-col py-16">
      <div className="w-full h-full flex flex-col p-4 md:p-6 max-w-6xl mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-row items-center justify-center gap-4 md:gap-12 h-40 md:h-64 mb-8 shrink-0">
            <Reveal animation="zoom" className="h-full aspect-[3/4] relative p-1 bg-[#4A6FA5] shadow-lg rotate-[-3deg]">
                <div className="w-full h-full border-[2px] border-white overflow-hidden bg-gray-200">
                    <img src={photos[0]} alt="Couple Portrait" className="w-full h-full object-cover" loading="eager" />
                </div>
            </Reveal>

            <Reveal animation="fade-up" delay={200} className="flex flex-col items-start justify-center text-[#4A6FA5]">
                <h2 className="font-script text-4xl md:text-6xl lg:text-7xl leading-none ml-2">Kỷ niệm</h2>
                <span className="font-serif italic text-xs md:text-xl text-gray-500 self-center my-1">của</span>
                <h2 className="font-script text-4xl md:text-6xl lg:text-7xl leading-none ml-8 md:ml-12">Chúng mình</h2>
            </Reveal>
        </div>

        {/* Bottom Section */}
        <Reveal animation="slide-left" delay={300} className="h-[400px] md:h-[600px] bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-4 border-[#4A6FA5]/20 p-2 md:p-4 flex flex-col gap-2 md:gap-3 relative overflow-hidden">
             <div className="relative flex-1 w-full overflow-hidden rounded-lg bg-gray-50 group">
                <img
                    key={photos[activeIndex]}
                    src={photos[activeIndex]}
                    alt={`Memory ${activeIndex + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-500"
                    loading="eager"
                />
                <button onClick={prevImage} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/70 hover:bg-white text-gray-800 rounded-full flex items-center justify-center shadow-md transition-all opacity-0 group-hover:opacity-100 z-10">
                    <ChevronLeft size={18} />
                </button>
                <button onClick={nextImage} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/70 hover:bg-white text-gray-800 rounded-full flex items-center justify-center shadow-md transition-all opacity-0 group-hover:opacity-100 z-10">
                    <ChevronRight size={18} />
                </button>
                <div className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full text-gray-600 shadow-sm backdrop-blur-sm">
                   <Maximize2 size={14} />
                </div>
             </div>

             <div className="h-16 md:h-24 flex gap-2 md:gap-3 overflow-x-auto no-scrollbar justify-center px-1 shrink-0">
                {photos.map((photo, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`relative aspect-square h-full rounded-md overflow-hidden transition-all duration-300 border-2 flex-shrink-0 ${
                            index === activeIndex ? 'border-[#4A6FA5] opacity-100 scale-100' : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                    >
                        <img src={photo} className="w-full h-full object-cover" alt={`Thumbnail ${index + 1}`} />
                    </button>
                ))}
             </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Gallery;
