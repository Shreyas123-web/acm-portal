import React from 'react';

// Path is lowercase to match your files, but Variable is Capital for React
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Events from './components/events';
import Team from './components/team';
import Footer from './components/footer';

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;