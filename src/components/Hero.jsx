const Hero = () => {
  return (
    <section className="relative py-20 px-6 flex flex-col items-center text-center">
      <img src="/aiml_logo.png" alt="Dept Logo" className="h-24 mb-6 opacity-90" />
      <h1 className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
        JNNACM
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-blue-500 mb-6">
        Dept. of AI & ML
      </h2>
      <p className="max-w-2xl text-zinc-400 text-lg mb-10">
        Empowering students through technology and innovation.
      </p>
      <div className="flex gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-bold transition-all">
          Explore Events
        </button>
      </div>
    </section>
  );
};