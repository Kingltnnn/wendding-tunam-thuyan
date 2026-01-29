import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import Reveal from './Reveal';

const Rsvp: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    guests: 1,
    attending: 'yes',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="rsvp" className="h-screen w-full snap-start bg-wedding-pink/10 relative flex flex-col justify-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 w-full h-full flex flex-col justify-center py-16 md:py-0">
        <Reveal animation="fade-up" className="w-full h-full md:h-auto flex flex-col justify-center">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-full">
            
            {/* Info Side */}
            <div className="hidden md:flex md:w-5/12 bg-wedding-dark text-white p-8 flex-col justify-center relative">
              <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522673607200-1645062cd958?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")' }}></div>
              <div className="relative z-10">
                <h3 className="font-script text-4xl mb-6 text-wedding-gold text-center">Be Our Guest</h3>
                <p className="mb-6 font-light text-gray-300 text-sm text-center">Chúng mình rất hạnh phúc khi có sự hiện diện của bạn trong ngày trọng đại.</p>
              </div>
            </div>

            <div className="w-full md:w-7/12 p-5 md:p-10 flex flex-col h-full overflow-y-auto">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col h-full justify-center space-y-4">
                  <div className="text-center md:text-left mb-2 flex-shrink-0">
                    <h2 className="font-serif text-2xl md:text-3xl text-gray-800">Xác Nhận Tham Dự</h2>
                    <p className="text-gray-500 text-xs md:text-sm">Vui lòng phản hồi trước ngày 15/06</p>
                  </div>

                  <div className="space-y-4">
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-wedding-gold outline-none bg-gray-50/50"
                      placeholder="Họ và tên của bạn"
                    />
                    
                    <div className="flex gap-3">
                      <select 
                        value={formData.guests}
                        onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
                        className="w-1/2 px-4 py-3 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-wedding-gold outline-none bg-gray-50/50"
                      >
                        {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n} Người</option>)}
                      </select>
                      <select 
                        value={formData.attending}
                        onChange={(e) => setFormData({...formData, attending: e.target.value})}
                        className="w-1/2 px-4 py-3 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-wedding-gold outline-none bg-gray-50/50"
                      >
                        <option value="yes">Sẽ tham dự</option>
                        <option value="no">Rất tiếc, không thể đến</option>
                      </select>
                    </div>

                    <div className="flex flex-col">
                      <label className="block text-xs font-medium text-gray-600 mb-1">Lời chúc gửi đến cô dâu & chú rể</label>
                      <textarea 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-wedding-gold outline-none resize-none h-32 bg-gray-50/50"
                        placeholder="Gửi lời chúc tốt đẹp nhất..."
                      ></textarea>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-wedding-dark text-white py-3.5 rounded-lg hover:bg-gray-800 font-serif uppercase text-sm tracking-widest shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    Gửi Xác Nhận
                  </button>
                </form>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in-up">
                  <CheckCircle size={64} className="text-green-500 mb-6" />
                  <h3 className="font-serif text-3xl text-gray-800 mb-3">Cảm Ơn Bạn!</h3>
                  <p className="text-gray-600 text-base">Thông tin của bạn đã được gửi đi thành công.</p>
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