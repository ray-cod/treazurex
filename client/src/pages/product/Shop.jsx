import React, { useEffect, useState } from 'react'
import useApiStore from '../../hooks/useApiStore';
import ShopCard from '../../components/ShopCard';
import { Link } from 'react-router-dom';
import Pagination from '../../components/Pagination';

const Shop = () => {
  const apiStore = useApiStore();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const lastPostIndex = currentPage * itemsPerPage;
  const firstPostIndex = lastPostIndex - itemsPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
      // Fetch all products when the component mounts
      const fetchProducts = async () => {
        try {
          const products = await apiStore.getAllProducts();
          setProducts(products);
          console.log("Fetched products:", products);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
      fetchProducts();
    }, []);
  
  return (
    <>
      <div className="mx-auto p-4 max-md:hidden">
        <img
          src="https://res.cloudinary.com/dicqdr7wa/image/upload/v1753272504/priscilla-du-preez-uEDvD3dmSNk-unsplash_d5roif.jpg"
          alt="product banner"
          className="h-50 w-full object-cover rounded-lg shadow-lg mb-6 object-[0px_-333px]"
        />
      </div>
      <div className="md:hidden h-10 bg-gray-500 border-gray-950 border-b flex items-center justify-center gap-1">
        <p className="font-semibold">Explore The Latest Collections -</p>{" "}
        <Link to="/" className="underline">
          Show
        </Link>
      </div>
      <section className="container mx-auto p-4">
        <div id="shop-content" className="py-6 max-lg:w-full lg:px-6">
          <h1 className="text-6xl mb-4 ">Shop</h1>
          <p className="text-gray-700 mb-6">
            Explore our collection of products.
          </p>

          {/* Filter Section */}
          <section
            id="filter"
            className="min-h-10 w-full mb-6 flex justify-between items-center flex-wrap gap-4"
          >
            <h2 className="text-xl font-semibold">
              Total Products ({products.length})
            </h2>
            <div className="flex items-center gap-4">
              <label htmlFor="sort">Sort By:</label>
              <select
                id="sort"
                className="border border-gray-300 rounded-lg p-2"
                onChange={(e) => apiStore.sortProducts(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="priceHighToLow">Price: High to Low</option>
              </select>
            </div>
          </section>

          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            {currentPosts.map((product) => (
              <ShopCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <Pagination
          totalPosts={products.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </section>
    </>
  );
}

export default Shop