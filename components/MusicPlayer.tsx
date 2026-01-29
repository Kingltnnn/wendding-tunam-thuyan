
import React, { useState, useRef, useEffect } from 'react';
import { Music, Pause } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Link nhạc chất lượng cao, nhẹ nhàng cho đám cưới
  const musicUrl = "https://media.vocaroo.com/mp3/1fLvhxmBRdPI";

  useEffect(() => {
    const handleAutoPlay = () => {
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(e => console.log("Yêu cầu tương tác người dùng để phát nhạc:", e));
      }
    };

    // Lắng nghe sự kiện "Mở thiệp" từ App.tsx
    window.addEventListener('playWeddingMusic', handleAutoPlay);

    // Thử phát ngay khi mount (trong trường hợp trình duyệt cho phép)
    handleAutoPlay();

    return () => {
      window.removeEventListener('playWeddingMusic', handleAutoPlay);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Không thể phát nhạc:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <audio ref={audioRef} src={musicUrl} loop />
      <button 
        onClick={togglePlay}
        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 bg-white border border-gray-100 ${isPlaying ? 'text-wedding-gold animate-spin-slow' : 'text-gray-400 opacity-60'}`}
        title={isPlaying ? "Tạm dừng nhạc" : "Phát nhạc"}
      >
        <Music size={20} className={isPlaying ? "animate-pulse" : ""} />
        {isPlaying && (
          <div className="absolute inset-0 rounded-full border-2 border-wedding-gold animate-ping opacity-20"></div>
        )}
      </button>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MusicPlayer;
