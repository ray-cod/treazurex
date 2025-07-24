import { useEffect, useState } from 'react'
import useApiStore from '../../hooks/useApiStore'
import { NavLink, useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const ProductDetail = () => {
  const apiStore = useApiStore();
  const [product, setProduct] = useState(null);
  const productId = useParams().id;
  const [isLoading, setIsLoading] = useState(true);
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  useEffect(() => {
    // Fetch product details by ID when the component mounts
    const fetchProductDetails = async (productId) => {
      try {
        const product = await apiStore.getProductById(productId);
        console.log("Fetched product details:", product);
        setProduct(product);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails(productId);
  }, []);

  return (
    <>
      {!isLoading ? (
        <div className="flex">
          {/* Side Image */}
          <aside className="hidden md:block w-[30%] border"></aside>

          {/* Product Details */}
          <section className="container mx-auto px-4 py-10 md:mx-6 md:w-[70%]">
            <h2 className="text-6xl mb-4">Product Details</h2>
            <p className="text-gray-700 mb-6">
              Explore the details of this product, including its features and
              specifications.
            </p>
            <img
              src={
                product.image_url ||
                "https://res.cloudinary.com/dicqdr7wa/image/upload/v1753360489/ca9f9922-7ad0-4d6f-a067-5f12e7e6651c_sgxvq9.jpg"
              }
              alt="Product Image"
              className="w-full md:w-96 h-96 object-cover mb-6 shadow-lg"
            />
            <h3 className="font-semibold text-2xl mb-2">{product.name}</h3>
            <p className="text-gray-400 mb-2">By Treazurex</p>
            <p className="mb-2">{product.description}</p>
            <p className="mb-2 font-semibold text-2xl">R{product.price}</p>
            <ul className="flex items-center gap-2 mb-6">
              {sizes.map((size, index) => (
                <li
                  key={index}
                  className="border rounded-lg w-10 h-10 flex justify-center items-center hover:text-blue-500 hover:cursor-pointer"
                >
                  {size}
                </li>
              ))}
            </ul>

            {/* Reviews percentages */}
            <div id="reviews-rates" className="flex items-center gap-10 mb-6">
              <div className="flex flex-col items-center gap-2">
                <h4 className="font-bold text-3xl">5.0</h4>
                <div className="flex items-center gap-1">
                  <FaStar className="text-amber-500" />
                  <FaStar className="text-amber-500" />
                  <FaStar className="text-amber-500" />
                  <FaStar className="text-amber-500" />
                  <FaStar className="text-amber-500" />
                </div>
                <p className="text-gray-400">124 reviews</p>
              </div>
              <ul className="w-full md:w-1/2">
                <li className="flex items-center gap-4 mb-2">
                  <span>5</span>
                  <div className="w-full bg-blue-200 h-2.5 overflow-hidden rounded-full">
                    <div className="bg-green-600 h-2.5 rounded-full w-[80%]"></div>
                  </div>
                  <span>80%</span>
                </li>
                <li className="flex items-center gap-4 mb-2">
                  <span>4</span>
                  <div className="w-full bg-blue-200 h-2.5 overflow-hidden rounded-full">
                    <div className="bg-green-600 h-2.5 rounded-full w-[50%]"></div>
                  </div>
                  <span>50%</span>
                </li>
                <li className="flex items-center gap-4 mb-2">
                  <span>3</span>
                  <div className="w-full bg-blue-200 h-2.5 overflow-hidden rounded-full">
                    <div className="bg-green-600 h-2.5 rounded-full w-[20%]"></div>
                  </div>
                  <span>20%</span>
                </li>
                <li className="flex items-center gap-4 mb-2">
                  <span>2</span>
                  <div className="w-full bg-blue-200 h-2.5 overflow-hidden rounded-full">
                    <div className="bg-green-600 h-2.5 rounded-full w-[0%]"></div>
                  </div>
                  <span>00%</span>
                </li>
                <li className="flex items-center gap-4 mb-2">
                  <span>1</span>
                  <div className="w-full bg-blue-200 h-2.5 overflow-hidden rounded-full">
                    <div className="bg-green-600 h-2.5 rounded-full w-[30%]"></div>
                  </div>
                  <span>30%</span>
                </li>
              </ul>
            </div>

            {/* Card & Wishlistn buttons */}
            <div className="mb-6">
              <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600">
                Add to Cart
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded ml-4 cursor-pointer hover:bg-green-600">
                Add to Wishlist
              </button>
            </div>

            {/* Tabs for Reviews and F&Q */}
            <ul className="flex items-center gap-4 text-gray-500 border-b pb-3">
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Reviews
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="x"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  F&Q
                </NavLink>
              </li>
            </ul>
          </section>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ProductDetail