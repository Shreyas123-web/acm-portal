import React from 'react';

// Path is lowercase to match your files, but Variable is Capital for React
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Team from './components/Team';
import Footer from './components/Footer';

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