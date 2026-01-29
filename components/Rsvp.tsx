
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import Reveal from './Reveal';

const Rsvp: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', guests: 1, attending: 'yes', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 800);
  };

  return (
    <section id="rsvp" className="min-h-screen w-full bg-wedding-pink/10 relative flex flex-col justify-center py-16 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto w-full">
        <Reveal animation="fade-up">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="hidden md:flex md:w-5/12 bg-wedding-dark text-white p-8 flex-col justify-center relative">
              <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522673607200-1645062cd958?auto=format&fit=crop&w=800&q=80")' }}></div>
              <div className="relative z-10 text-center">
                <h3 className="font-script text-4xl mb-6 text-wedding-gold">Be Our Guest</h3>
                <p className="mb-6 font-light text-gray-300 text-sm">Chúng mình rất hạnh phúc khi có sự hiện diện của bạn trong ngày trọng đại.</p>
              </div>
            </div>

            <div className="w-full md:w-7/12 p-6 md:p-12">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="text-center md:text-left">
                    <h2 className="font-serif text-2xl md:text-3xl text-gray-800">Xác Nhận Tham Dự</h2>
                    <p className="text-gray-500 text-xs md:text-sm mb-4">Vui lòng phản hồi trước ngày 15/06</p>
                  </div>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg outline-none bg-gray-50/50" placeholder="Họ và tên của bạn" />
                  <div className="flex gap-3">
                    <select value={formData.guests} onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})} className="w-1/2 px-4 py-3 text-sm border border-gray-200 rounded-lg outline-none bg-gray-50/50">
                      {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n} Người</option>)}
                    </select>
                    <select value={formData.attending} onChange={(e) => setFormData({...formData, attending: e.target.value})} className="w-1/2 px-4 py-3 text-sm border border-gray-200 rounded-lg outline-none bg-gray-50/50">
                      <option value="yes">Sẽ tham dự</option>
                      <option value="no">Rất tiếc</option>
                    </select>
                  </div>
                  <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg outline-none resize-none h-32 bg-gray-50/50" placeholder="Gửi lời chúc tốt đẹp nhất..."></textarea>
                  <button type="submit" className="w-full bg-wedding-dark text-white py-3.5 rounded-lg font-serif uppercase text-sm tracking-widest shadow-lg flex items-center justify-center gap-2">
                    <Send size={16} /> Gửi Xác Nhận
                  </button>
                </form>
              ) : (
                <div className="py-12 flex flex-col items-center justify-center text-center animate-fade-in-up">
                  <CheckCircle size={64} className="text-green-500 mb-6" />
                  <h3 className="font-serif text-3xl text-gray-800 mb-3">Cảm Ơn Bạn!</h3>
                  <p className="text-gray-600">Thông tin của bạn đã được gửi đi thành công.</p>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Rsvp;
