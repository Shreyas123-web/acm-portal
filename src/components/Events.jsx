import React from 'react';

const Events = () => {
  const events = [
    { title: "Monaithon 2.0", date: "April 2026", tag: "Hackathon" },
    { title: "React Deep Dive", date: "Coming Soon", tag: "Workshop" },
    { title: "DSA Masters", date: "Every Friday", tag: "Training" }
  ];

  return (
    <section id="events" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">Upcoming_Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((ev, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-blue-500/50 transition-all group">
              <span className="text-blue-500 text-xs font-mono uppercase tracking-widest">{ev.tag}</span>
              <h3 className="text-xl font-bold text-white mt-2 group-hover:text-blue-400 transition-colors">{ev.title}</h3>
              <p className="text-zinc-500 text-sm mt-4">{ev.date}</p>
              <button className="mt-6 text-white text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Register Now →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;