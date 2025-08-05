import React from 'react'

const FashionEvent = () => {
  return (
    <section className="container mx-auto h-full py-16 max-sm:py-8 px-4">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
        Latest Fashion Show
      </h2>

      <article className="w-full h-[350px] sticky rounded-lg overflow-hidden">
        <img
          src="https://res.cloudinary.com/dicqdr7wa/image/upload/v1754394439/ben-mathis-seibel-uBHntlP-FUk-unsplash_rnf6h3.jpg"
          alt="Black Luxury bag"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-end items-start text-white p-6">
          <h3 className="text-2xl font-bold mb-2">Glam Bags</h3>
          <button className="cursor-pointer bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-4 py-2 rounded-full">
            Shop Now
          </button>
        </div>
      </article>
    </section>
  );
}

export default FashionEvent