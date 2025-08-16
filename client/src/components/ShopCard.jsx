import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const ShopCard = ({ product }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  return (
    <Link
      to={`/product-detail/${product.id}`}
      className="group block w-full rounded-md overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative w-full h-[20rem] max-sm:h-48 max-md:h-72 overflow-hidden">
        <img
          src={
            product.image_url ||
            "https://res.cloudinary.com/dicqdr7wa/image/upload/v1752490704/view-skateboard-with-retro-memorabilia_ktqzak.jpg"
          }
          alt={product.name || "Product Image"}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content */}
      <article className="p-4">
        <h3 className="text-xl max-sm:text-base font-medium text-gray-900 dark:text-white group-hover:text-amber-600 transition-colors">
          {product.name || "Product Name"}
        </h3>

        <hr className="w-12 border-amber-500 my-2" />

        {/* Description toggle */}
        <p
          className="text-sm text-gray-600 dark:text-gray-400 cursor-pointer hover:underline"
          onClick={(e) => {
            e.preventDefault(); // Prevent link navigation
            setIsDescriptionVisible(!isDescriptionVisible);
          }}
        >
          {isDescriptionVisible ? (
            product?.description ? (
              `${product.description.slice(0, 70)}${
                product.description.length > 70 ? "..." : ""
              }`
            ) : (
              "This is a sample product description."
            )
          ) : (
            <span>Show description...</span>
          )}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-lg max-sm:text-base font-bold text-gray-900 dark:text-white">
            R{product.price || "99.99"}
          </p>

          <div className="flex items-center gap-1 text-amber-500">
            <FaStar />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              5.0
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ShopCard;
