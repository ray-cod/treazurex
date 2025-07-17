import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    <Link to="product-detail/1">
      <article className="w-80 overflow-hidden shadow-md">
        <img
          src="https://res.cloudinary.com/dicqdr7wa/image/upload/v1752490704/view-skateboard-with-retro-memorabilia_ktqzak.jpg"
          alt="Red Shoes"
          className="w-full h-[25rem] object-cover"
        />
        <div className="flex flex-col p-4 text-white">
          <h3 className="text-xl font-semibold">Red Shoes</h3>
          <hr className="w-12 pb-2" />
          <p className="text-sm text-gray-400">
            These red shoes are perfect for any occasion.
          </p>
          <span className="text-lg font-bold mt-2">$49.99</span>
        </div>
      </article>
    </Link>
  );
}

export default ProductCard