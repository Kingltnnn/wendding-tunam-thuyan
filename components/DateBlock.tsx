import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const DateBlock: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20 flex justify-center items-center">
      <Reveal animation="fade-up" className="flex flex-col items-center w-full max-w-3xl px-4">
        <motion.h2 
          className="font-serif text-2xl md:text-4xl text-[#8B1A1A] uppercase tracking-widest mb-6 md:mb-10"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ 
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          Lễ Thành Hôn
        </motion.h2>
        
        <div className="flex flex-col items-center text-[#8B1A1A] w-full max-w-sm md:max-w-md">
          <span className="font-serif uppercase tracking-widest text-sm md:text-xl mb-4">Chủ nhật</span>
          
          <div className="flex items-center justify-center w-full mb-4">
            <div className="flex-1 border-y-[1.5px] border-black py-3 text-center">
              <span className="font-serif uppercase tracking-widest text-sm md:text-xl whitespace-nowrap">Tháng 3</span>
            </div>
            <div className="px-6 md:px-10 mx-2">
              <span className="font-[Arial] text-6xl md:text-8xl font-bold leading-none">08</span>
            </div>
            <div className="flex-1 border-y-[1.5px] border-black py-3 text-center">
              <span className="font-serif uppercase tracking-widest text-sm md:text-xl whitespace-nowrap">Năm 2026</span>
            </div>
          </div>
          
          <span className="font-serif text-xl md:text-3xl mt-2">10:00</span>
        </div>
        
        <p className="text-gray-700 mt-6 md:mt-8 font-sans text-sm md:text-lg">
          Nhằm ngày 20 tháng 1 năm Bính Ngọ
        </p>
      </Reveal>
    </section>
  );
};

export default DateBlock;
