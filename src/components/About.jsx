import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white tracking-tight">/The_Mission</h2>
          <p className="text-zinc-400 leading-relaxed text-lg">
            Our chapter focuses on bringing high-end technical workshops, hackathons, 
            and industry talks to JNNCE. We bridge the gap between classroom theory 
            and real-world software engineering.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="text-white font-bold text-2xl font-mono">50+</h4>
              <p className="text-zinc-500 text-sm italic">Active Members</p>
            </div>
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="text-white font-bold text-2xl font-mono">12+</h4>
              <p className="text-zinc-500 text-sm italic">Events Planned</p>
            </div>
          </div>
        </div>
        <div className="aspect-square bg-zinc-800/50 rounded-2xl border border-zinc-700 flex items-center justify-center p-8">
           <div className="text-zinc-600 font-mono text-xs overflow-hidden leading-tight">
              {`// ACM JNNCE Core Logic\nwhile(learning) {\n  innovate();\n  build();\n  collaborate();\n}`}
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;