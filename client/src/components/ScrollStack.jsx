import React from 'react'

const ScrollStack = () => {
  return (
    <section className="py-10 pb-20 relative bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 sticky top-[40px] text-center">
          Latest Fashion Show
        </h2>
        <div className="flex flex-col items-center sticky">
          <div className="bg-red-600 w-full h-[300px] sticky top-[134px] rounded-lg">
            div 1
          </div>
          <div className="bg-blue-600 w-full h-[300px] sticky top-[184px] rounded-lg">
            div 2
          </div>
          <div className="bg-green-600 w-full h-[300px] sticky top-[234px] rounded-lg">
            div 3
          </div>
          <div className="bg-gray-600 w-full h-[300px] sticky top-[284px] rounded-lg">
            div 4
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 h-20 bg-gradient-to-t from-[#030712] to-transparent w-[100%]"></div>
    </section>
  );
}

export default ScrollStack