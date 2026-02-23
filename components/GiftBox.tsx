
import React, { useState } from 'react';
import { Copy } from 'lucide-react';
import Reveal from './Reveal';

const BankCard: React.FC<{
  bankName: string;
  accountName: string;
  accountNumber: string;
  qrCode: string;
}> = ({ bankName, accountName, accountNumber, qrCode }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    alert(`Đã sao chép ${accountNumber}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center w-full max-w-[280px] mx-auto">
      <img src={qrCode} alt="QR Code" className="w-32 h-32 mb-4 mix-blend-multiply object-cover" loading="lazy" decoding="async" />
      <h4 className="font-bold text-gray-800">{bankName}</h4>
      <p className="text-gray-600 text-sm mb-2 truncate w-full">{accountName}</p>
      <div className="flex items-center justify-center space-x-2 bg-gray-50 px-3 py-1.5 rounded-full cursor-pointer hover:bg-gray-100 transition-colors w-full" onClick={handleCopy}>
        <span className="font-mono text-wedding-gold font-bold text-sm">{accountNumber}</span>
        <Copy size={12} className="text-gray-400" />
      </div>
    </div>
  );
};

const GiftBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="giftbox" className="min-h-[60vh] w-full bg-white border-t border-gray-100 flex flex-col justify-center py-20 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center w-full">
        <Reveal animation="fade-up">
            <div 
              className="inline-block cursor-pointer transition-transform hover:scale-110 mb-6"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="w-20 h-28 md:w-24 md:h-32 bg-red-600 rounded-lg relative overflow-hidden shadow-xl border border-red-700 flex flex-col items-center justify-center animate-bounce">
                <div className="absolute top-0 w-full h-10 md:h-12 bg-red-700 rounded-b-[50%] shadow-sm"></div>
                <div className="w-6 h-6 md:w-8 md:h-8 bg-yellow-400 rounded-full z-10 border-2 border-yellow-500 flex items-center justify-center shadow-md mt-4 md:mt-6">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-yellow-500 rounded-full"></div>
                </div>
                <p className="text-yellow-400 font-serif font-bold mt-2 z-10 text-xs md:text-sm">Lì Xì</p>
              </div>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">Gửi quà tới 
cô dâu chú rể</h2>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto text-sm md:text-base">
              <br/>
              <span className="text-xs italic text-gray-400">(Nhấn vào phong bao lì xì)</span>
            </p>
        </Reveal>
        
        <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center max-w-2xl mx-auto pt-4">
            <Reveal animation="slide-left" delay={100}>
              <BankCard 
                  bankName="Vietcombank"
                  accountName="LÊ TÚ NAM"
                  accountNumber="1046220082"
                  qrCode="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=1046220082"
              />
            </Reveal>
            <Reveal animation="slide-right" delay={200}>
             <BankCard 
              bankName="Vietcombank"
              accountName="BÙI THỊ THÚY AN"
              accountNumber="9876 5432 1111"
              qrCode="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=987654321111"
            />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftBox;
