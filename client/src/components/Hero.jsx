
export default function Hero() {
    
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-[#0b0f14] text-white overflow-hidden">
      {/* Hero content */}
      <div className="container min-h-screen mx-auto px-6 py-16 grid md:grid-cols-2 items-center gap-12">
        {/* Left text */}
        <div>
          <span className="bg-indigo-700 px-3 py-1 text-xs uppercase rounded-full tracking-wider">
            Exclusive Offer
          </span>
          <h2 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight">
            Discover the Next Level of{" "}
            <span className="text-blue-500">Performance</span>
          </h2>
          <p className="mt-6 text-lg text-slate-300 max-w-lg">
            Treazurex brings you gear engineered for style, comfort, and
            unmatched durability. Push your limits and look your best—on and off
            the track.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition cursor-pointer">
              Shop Now
            </button>
            <button className="border border-blue-600 hover:bg-blue-600 hover:text-slate-900 px-6 py-3 rounded-full font-semibold transition cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

        {/* Right product image */}
        <div className="relative flex justify-center items-center">
          <div className="absolute -top-6 -right-6 bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
            UP TO 30% OFF
          </div>
          <img
            src="./src/assets/9-2-watch-picture.png"
            alt="Treazurex Premium Shoe"
            className="w-full max-w-md drop-shadow-2xl transform hover:scale-105 transition duration-500"
          />
        </div>
      </div>

      {/* Bottom quick links */}
      <div className="bg-slate-800/50 backdrop-blur-md py-4 px-6 flex justify-center gap-8 text-sm font-medium border-t border-slate-700 text-nowrap">
        <a href="#running" className="hover:text-indigo-300 transition">
          Running Gear
        </a>
        <a href="#training" className="hover:text-indigo-300 transition">
          Training Wear
        </a>
        <a href="#accessories" className="hover:text-indigo-300 transition">
          Accessories
        </a>
      </div>
    </section>
  );
}
