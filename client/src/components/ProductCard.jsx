import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const ProductCard = () => {
  return (
    <Link to="product-detail/1">
      <article className="w-80 max-sm:w-64 max-md:w-72 overflow-hidden shadow-md">
        <img
          src="https://res.cloudinary.com/dicqdr7wa/image/upload/v1752490704/view-skateboard-with-retro-memorabilia_ktqzak.jpg"
          alt="Red Shoes"
          className="w-full h-[25rem] object-cover max-sm:h-80 max-md:h-90"
        />
        <div className="flex flex-col p-4 text-white">
          <h3 className="text-xl max-sm:text-[16px] max-md:text-[18px] font-semibold">
            Red Shoes
          </h3>
          <hr className="w-12 pb-2" />
          <p className="text-sm text-gray-400">
            These red shoes are perfect for any occasion.
          </p>
          <div className="flex items-center justify-between">
            <p className="text-lg max-sm:text-[15px] max-md:text-[17px] font-bold mt-2">
              $49.99
            </p>
            <p className="text-lg max-sm:text-[15px] max-md:text-[17px] font-bold mt-2 flex items-center gap-2">
              <FaStar className='text-amber-500'/>
              5.0
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default ProductCard