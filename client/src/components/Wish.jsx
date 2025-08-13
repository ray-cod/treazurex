import { FaStar } from 'react-icons/fa';
import { ShoppingCart } from 'lucide-react';

const Wish = () => {
  return (
    <article className="w-full overflow-hidden cursor-pointer bg-gray-900 rounded-lg">
      <img
        src="https://res.cloudinary.com/dicqdr7wa/image/upload/v1753360489/ca9f9922-7ad0-4d6f-a067-5f12e7e6651c_sgxvq9.jpg"
        alt="Related Product"
        className="w-full h-60 max-xl:h-45 max-md:h-54 max-sm:h-40 object-cover shadow-lg"
      />
      <div className="p-3">
        <h4 className="max-xl:text-sm font-medium max-[23rem]:text-base">
          Related Product Name
        </h4>
        <div className="flex justify-between items-center text-sm">
          <p className="text-gray-600 dark:text-gray-400">R299.99</p>
          <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
            <FaStar className="text-amber-500" />
            5.0
          </p>
        </div>
        <button className="bg-blue-500 w-full py-2 text-sm rounded-sm mt-3 inline-flex justify-center gap-2 hover:bg-blue-600 active:bg-blue-700 cursor-pointer">
          <ShoppingCart className="w-4 h-4" /> Add to Cart
        </button>
      </div>
    </article>
  );
}

export default Wish