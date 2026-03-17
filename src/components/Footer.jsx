import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <span className="text-blue-500 font-mono font-bold text-lg">&lt;JNNCE_ACM /&gt;</span>
          <p className="text-zinc-500 text-sm mt-2">© 2026 Jawaharlal Nehru National College of Engineering.</p>
        </div>
        <div className="flex gap-6 text-zinc-400 text-sm">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;