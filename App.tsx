
import React from 'react';
import Hero from './components/Hero';
import Couple from './components/Couple';
import Countdown from './components/Countdown';
import Events from './components/Events';
import DateBlock from './components/DateBlock';
import Location from './components/Location';
import Gallery from './components/Gallery';
import GiftBox from './components/GiftBox';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex justify-center">
      <div className="w-full max-w-md h-screen bg-white relative shadow-2xl overflow-hidden">
        <div className="h-full w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar selection:bg-wedding-pink selection:text-wedding-dark">
          <main>
            <Hero />
            <Couple />
            <Countdown />
            <Events />
            <DateBlock />
            <Location />
            <Gallery />
            <GiftBox />
            <Footer />
          </main>
        </div>
        <MusicPlayer />
      </div>
    </div>
  );
};

export default App;