
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
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar selection:bg-wedding-pink selection:text-wedding-dark">
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
      <MusicPlayer />
    </div>
  );
};

export default App;
