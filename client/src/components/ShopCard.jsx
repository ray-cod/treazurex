import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { SpaceIcon } from "lucide-react";

const ShopCard = ({ product }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false)

  return (
    <article className="w-full overflow-hidden shadow-md">
      <img
        src={
          product.image_url ||
          "https://res.cloudinary.com/dicqdr7wa/image/upload/v1752490704/view-skateboard-with-retro-memorabilia_ktqzak.jpg"
        }
        alt={product.name || "Product Image"}
        className="w-full h-[25rem] object-cover max-sm:h-48 max-md:h-80"
      />
      <div className="flex flex-col p-4">
        <Link to={`/product-detail/${product.id}`} className="block">
          <h3 className="text-xl max-sm:text-[16px] max-md:text-[18px] font-medium">
            {product.name || "Product Name"}
          </h3>
        </Link>

        <hr className="w-12 pb-2" />
        <p
          className="text-sm text-gray-600 dark:text-gray-400 cursor-pointer"
          onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}
        >
          {isDescriptionVisible ? (
            product?.description ? (
              `${product.description.slice(0, 50)}${
                product.description.length > 50 ? "..." : ""
              }`
            ) : (
              "This is a sample product description that provides details about the product."
            )
          ) : (
            <span>Description...</span>
          )}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-lg max-sm:text-[15px] max-md:text-[17px] font-medium mt-2">
            R{product.price || "99.99"}
          </p>
          <p className="text-lg max-sm:text-[15px] max-md:text-[17px] font-medium mt-2 flex items-center gap-2">
            <FaStar className="text-amber-500" />
            5.0
          </p>
        </div>
      </div>
    </article>
  );
};

export default ShopCard;
