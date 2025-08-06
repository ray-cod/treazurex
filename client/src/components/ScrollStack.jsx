const ScrollStack = () => {
  return (
    <section className="py-10 pb-20 relative bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-medium mb-12 sticky top-[40px] text-center">
          Latest Accessories
        </h2>
        <div className="flex flex-col items-center sticky gap-2">
          <article className="w-full h-[350px] sticky top-[134px] rounded-lg overflow-hidden">
            <img
              src="https://res.cloudinary.com/dicqdr7wa/image/upload/v1754394439/ben-mathis-seibel-uBHntlP-FUk-unsplash_rnf6h3.jpg"
              alt="Luxury watch"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end items-start text-white p-6">
              <h3 className="text-2xl font-medium mb-2">Watches</h3>
              <button className="cursor-pointer bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-4 py-2 rounded-full">
                Shop Now
              </button>
            </div>
          </article>

          <article className="w-full h-[350px] sticky top-[134px] rounded-lg overflow-hidden">
            <img
              src="https://res.cloudinary.com/dicqdr7wa/image/upload/v1754394446/arno-senoner-nYqRSq0gJno-unsplash_dvygyx.jpg"
              alt="Luxury bag"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end items-start text-white p-6">
              <h3 className="text-2xl font-medium mb-2">Hand Bags</h3>
              <button className="cursor-pointer bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-4 py-2 rounded-full">
                Shop Now
              </button>
            </div>
          </article>

          <article className="w-full h-[350px] sticky top-[134px] rounded-lg overflow-hidden">
            <img
              src="https://res.cloudinary.com/dicqdr7wa/image/upload/v1754402932/prahant-designing-studio-HRQHR_lRckk-unsplash_rp09is.jpg"
              alt="Silver necklace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end items-start text-white p-6">
              <h3 className="text-2xl font-medium mb-2">Jewelleries</h3>
              <button className="cursor-pointer bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-4 py-2 rounded-full">
                Shop Now
              </button>
            </div>
          </article>

          <article className="w-full h-[350px] sticky top-[134px] rounded-lg overflow-hidden">
            <img
              src="https://res.cloudinary.com/dicqdr7wa/image/upload/v1754394837/micah-sammie-chaffin-EY_rkLfraEg-unsplash_zll3yx.jpg"
              alt="Wedding ring"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end items-start text-white p-6">
              <h3 className="text-2xl font-medium mb-2">A+ Rings</h3>
              <button className="cursor-pointer bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-4 py-2 rounded-full">
                Shop Now
              </button>
            </div>
          </article>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 h-20 bg-gradient-to-t from-[#030712] to-transparent w-[100%]"></div>
    </section>
  );
}

export default ScrollStack