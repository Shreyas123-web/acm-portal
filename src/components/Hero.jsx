import React from 'react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block px-3 py-1 mb-6 border border-blue-500/30 bg-blue-500/10 rounded-full text-blue-400 text-xs font-mono">
          ESTD. 2025 • DEPT. OF AI & ML
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
          Advancing <span className="text-blue-500">Computing</span> <br /> 
          as a Science & Profession.
        </h1>
        <p className="max-w-2xl mx-auto text-zinc-400 text-lg mb-10">
          The JNNCE ACM Student Chapter is a hub for innovation, coding excellence, and 
          technical growth. Join a community of passionate developers and researchers.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#events" className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-zinc-200 transition-all">
            View Events
          </a>
          <button className="border border-zinc-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-zinc-900 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;