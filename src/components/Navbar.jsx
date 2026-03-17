import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-900 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <span className="text-blue-500 font-mono font-bold text-xl tracking-tighter">
            &lt;JNNCE_ACM /&gt;
          </span>
        </div>

        {/* Links Section */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
          <a href="#about" className="hover:text-blue-400 transition-colors">about</a>
          <a href="#events" className="hover:text-blue-400 transition-colors">events</a>
          <a href="#team" className="hover:text-blue-400 transition-colors">team</a>
        </div>

        {/* Action Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-bold transition-all">
          Join Us
        </button>
      </div>
    </nav>
  );
};

// CRITICAL: This line must match the name of the function above
export default Navbar;