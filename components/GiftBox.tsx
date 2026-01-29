
import React from 'react';
import { Gift, Copy } from 'lucide-react';
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
      <img src={qrCode} alt="QR Code" className="w-32 h-32 mb-4 mix-blend-multiply" />
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
  return (
    <section className="min-h-[60vh] w-full bg-white border-t border-gray-100 flex flex-col justify-center py-20 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center w-full">
        <Reveal animation="fade-up">
            <div className="inline-block p-3 rounded-full bg-wedding-pink/20 mb-6">
              <Gift size={32} className="text-wedding-accent" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">Wedding Gift</h2>
            <p className="text-gray-500 mb-12 max-w-lg mx-auto text-sm md:text-base">
              Sự hiện diện của bạn là món quà tuyệt vời nhất.
            </p>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center max-w-2xl mx-auto">
          <Reveal animation="slide-left" delay={200}>
            <BankCard 
                bankName="Vietcombank"
                accountName="LÊ TÚ NAM"
                accountNumber="1234 5678 9999"
                qrCode="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=123456789999"
            />
          </Reveal>
          <Reveal animation="slide-right" delay={300}>
           <BankCard 
            bankName="Vietcombank"
            accountName="BÙI THỊ THÚY AN"
            accountNumber="9876 5432 1111"
            qrCode="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=987654321111"
          />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default GiftBox;
