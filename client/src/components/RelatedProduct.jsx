import React from 'react'

const RelatedProduct = () => {
  return (
    <article className="w-60 max-md:w-54 max-sm:w-48 overflow-hidden cursor-pointer">
      <img
        src="https://res.cloudinary.com/dicqdr7wa/image/upload/v1753360489/ca9f9922-7ad0-4d6f-a067-5f12e7e6651c_sgxvq9.jpg"
        alt="Related Product"
        className="w-full h-60 max-md:h-54 max-sm:h-48 object-cover mb-2 shadow-lg"
      />
      <h4 className="text-xl max-sm:text-[16px] max-md:text-[18px] font-medium">
        Related Product Name
      </h4>
      <p className="text-gray-500">R299.99</p>
    </article>
  );
}

export default RelatedProduct