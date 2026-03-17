import React from 'react';

const Team = () => {
  const members = [
    { name: "Shreyas A", role: "Web Master" },
    { name: "Committee Member", role: "Chairperson" },
    { name: "Committee Member", role: "Secretary" },
    { name: "Committee Member", role: "Treasurer" }
  ];

  return (
    <section id="team" className="py-24 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-16">The_Core_Team</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((m, i) => (
            <div key={i} className="text-center group">
              <div className="w-24 h-24 bg-zinc-800 rounded-full mx-auto mb-4 border-2 border-zinc-700 group-hover:border-blue-500 transition-all"></div>
              <h4 className="text-white font-bold">{m.name}</h4>
              <p className="text-blue-500 text-xs font-mono mt-1">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;