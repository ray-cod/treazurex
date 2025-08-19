import { useEffect, useState } from 'react'
import useApiStore from '../../hooks/useApiStore'
import { useParams } from 'react-router-dom';
import ReviewRates from '../../components/ReviewRates';
import RelatedProduct from '../../components/RelatedProduct';
import FashionEvent from "../../components/FashionEvent";

const ProductDetail = () => {
  const apiStore = useApiStore();
  const [product, setProduct] = useState(null);
  const productId = useParams().id;
  const [isLoading, setIsLoading] = useState(true);
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    if (!productId) return; // skip if undefined

    let isMounted = true;
    const controller = new AbortController();

    const fetchProductDetails = async () => {
      try {
        setIsLoading(true);
        const product = await apiStore.getProductById(productId, {
          signal: controller.signal,
        });
        if (isMounted) {
          console.log("Fetched product details:", product);
          setProduct(product);
        }
      } catch (error) {
        if (isMounted) {
          console.error("Error fetching product details:", error);
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchProductDetails();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [productId]);


  return (
    <>
      {!isLoading ? (
        <section className="container mx-auto px-4 py-13 md:py-20 lg:py-24">
          <h2 className="text-6xl max-md:text-[54px] max-sm:text-[48px] mb-4">
            Product Details
          </h2>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            View more about our carefully curated product.
          </p>

          <div className="max-md:flex-col flex py-10">
            {/* Images section */}
            <section className="max-md:w-full w-[50%]">
              <img
                src={
                  product.image_url ||
                  "https://res.cloudinary.com/dicqdr7wa/image/upload/v1753360489/ca9f9922-7ad0-4d6f-a067-5f12e7e6651c_sgxvq9.jpg"
                }
                alt="Product Image"
                className="w-full h-[550px] max-sm:h-96 object-cover mb-6 shadow-lg"
              />
            </section>

            {/* Product Details */}
            <section className="max-md:container md:mx-6 md:w-[50%]">
              <p className="text-gray-600 dark:text-gray-400 mb-2 text-xl max-sm:text-lg">
                By Treazurex
              </p>
              <h3 className="font-semibold text-4xl mb-2 max-sm:text-2xl max-md:text-3xl">
                {product.name}
              </h3>
              <p className="my-5">
                Every Treazurex item is thoughtfully curated to offer more than
                just function or style. It’s an experience designed to match the
                confidence and individuality of those who choose to stand apart.
              </p>
              <p className="mb-4 font-semibold text-2xl max-sm:text-xl">
                R{product.price}
              </p>
              <ul className="flex items-center gap-2 mb-6">
                {sizes.map((size, index) => (
                  <li
                    key={index}
                    className="border rounded-lg w-15 h-10 flex justify-center items-center hover:text-blue-500 hover:cursor-pointer"
                  >
                    {size}
                  </li>
                ))}
              </ul>

              {/* Reviews percentages */}
              <ReviewRates />

              {/* Card & Wishlistn buttons */}
              <div className="mb-6 flex max-sm:flex-col gap-2">
                <button className="w-full bg-blue-500 text-white py-2 rounded cursor-pointer hover:bg-blue-600 active:bg-blue-700">
                  Add to Cart
                </button>
                <button className="w-full bg-green-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-green-600 active:bg-green-700">
                  Add to Wishlist
                </button>
              </div>
            </section>
          </div>

          {/* Tabs for Reviews and F&Q */}
          <ul className="flex items-center gap-4 max-sm:gap-0 bg-gray-200 dark:bg-gray-900 p-2 rounded-lg overflow-hidden text-sm">
            <li className="w-full">
              <button
                onClick={() => setActiveTab("description")}
                className={`cursor-pointer py-2 w-full rounded-lg ${
                  activeTab === "description"
                    ? "text-black dark:text-white bg-gray-100 dark:bg-gray-950"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                Description
              </button>
            </li>
            <li className="w-full">
              <button
                onClick={() => setActiveTab("reviews")}
                className={`cursor-pointer py-2 w-full rounded-lg ${
                  activeTab === "reviews"
                    ? "text-black dark:text-white bg-gray-100 dark:bg-gray-950"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                Reviews
              </button>
            </li>
            <li className="w-full">
              <button
                onClick={() => setActiveTab("f&q")}
                className={`cursor-pointer py-2 w-full rounded-lg ${
                  activeTab === "f&q"
                    ? "text-black dark:text-white bg-gray-100 dark:bg-gray-950"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                F&Q
              </button>
            </li>
          </ul>

          {activeTab === "reviews" ? (
            <div className="mt-6">
              <h4 className="text-2xl mb-4">Customer Reviews</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                No reviews yet. Be the first to review this product!
              </p>
              <form className="flex flex-col gap-4">
                <textarea
                  className="border rounded-lg p-2"
                  placeholder="Write your review here..."
                  rows="4"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 active:bg-blue-700"
                >
                  Submit Review
                </button>
              </form>
            </div>
          ) : activeTab === "description" ? (
            <div className="mt-6">
              <h4 className="text-2xl mb-4">Product Description</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {product.description}
              </p>
            </div>
          ) : (
            <div className="mt-6">
              <h4 className="text-2xl mb-4">Frequently Asked Questions</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                No questions yet. Be the first to ask a question about this
                product!
              </p>
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  className="border rounded-lg p-2"
                  placeholder="Ask your question here..."
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 active:bg-blue-700"
                >
                  Submit Question
                </button>
              </form>
            </div>
          )}

          {/* Related Products Section */}
          <div id="related-products" className="mt-8 pt-6">
            <h3 className="text-2xl mb-4">Related Products</h3>
            <div className="product-slider">
              <div className="slider-container">
                <RelatedProduct />
                <RelatedProduct />
                <RelatedProduct />
                <RelatedProduct />
                <RelatedProduct />
              </div>
            </div>
          </div>

          {/* Fashion show */}
          <FashionEvent />
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ProductDetail