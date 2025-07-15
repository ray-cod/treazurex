
export default function Hero() {
    
  return (
    <section className="relative min-h-screen flex items-end justify-center bg-black text-white px-4">
      {/* Background Graphic (could also be a <video> or <img>) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://res.cloudinary.com/dicqdr7wa/image/upload/v1752578786/lonely-814631_1920_qu8ans.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 mx-auto pb-20">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          All You Need
          <br />
          <span className="text-primary">in One Singe Place</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Treazurex is your all-in-one shopping companion,bringing handpicked
          products
        </p>
        <button className="bg-blue-700 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-800 transition hover:cursor-pointer">
          Get Started
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#030712] to-transparent w-[100%]"></div>
    </section>
  );
}
