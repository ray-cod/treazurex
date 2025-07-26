import { useEffect, useState } from 'react'
import useApiStore from '../../hooks/useApiStore'
import { useParams } from 'react-router-dom';
import ReviewRates from '../../components/ReviewRates';
import RelatedProduct from '../../components/RelatedProduct';

const ProductDetail = () => {
  const apiStore = useApiStore();
  const [product, setProduct] = useState(null);
  const productId = useParams().id;
  const [isLoading, setIsLoading] = useState(true);
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const [activeTab, setActiveTab] = useState("reviews");

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
        <div className="flex container mx-auto py-10">
          {/* Side Image */}
          <aside className="max-md:hidden flex w-[30%] px-4">
            <div className="w-1/3 h-full flex flex-col justify-between mr-1">
              <div className="h-1/3 border"></div>
              <div className="h-1/2 border"></div>
            </div>
            <div className="h-1/3 w-1/3 border mt-96 mr-1"></div>
            <div className="w-1/3">
              <div className='h-1/5 border mt-30'></div>
              <div className="h-1/2 border mt-[300px]"></div>
            </div>
          </aside>

          {/* Product Details */}
          <section className="max-md:container px-4 md:mx-6 md:w-[70%]">
            <h2 className="text-6xl max-md:text-[54px] max-sm:text-[48px] mb-4">
              Product Details
            </h2>
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
            <ReviewRates />

            {/* Card & Wishlistn buttons */}
            <div className="mb-6">
              <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 active:bg-blue-700">
                Add to Cart
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded ml-4 cursor-pointer hover:bg-green-600 active:bg-green-700">
                Add to Wishlist
              </button>
            </div>

            {/* Tabs for Reviews and F&Q */}
            <ul className="flex items-center gap-4 text-gray-500 border-b pb-3">
              <li>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`cursor-pointer ${
                    activeTab === "reviews" ? "text-white" : "text-gray-400"
                  }`}
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("f&q")}
                  className={`cursor-pointer ${
                    activeTab === "f&q" ? "text-white" : "text-gray-400"
                  }`}
                >
                  F&Q
                </button>
              </li>
            </ul>

            {activeTab === "reviews" ? (
              <div className="mt-6">
                <h4 className="text-2xl mb-4">Customer Reviews</h4>
                <p className="text-gray-500 mb-4">
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
            ) : (
              <div className="mt-6">
                <h4 className="text-2xl mb-4">Frequently Asked Questions</h4>
                <p className="text-gray-500 mb-4">
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
          </section>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ProductDetail