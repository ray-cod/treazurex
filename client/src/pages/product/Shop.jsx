import React, { useEffect, useState } from 'react'
import useApiStore from '../../hooks/useApiStore';
import ShopCard from '../../components/ShopCard';
import { Link } from 'react-router-dom';

const Shop = () => {
  const apiStore = useApiStore();
  const [products, setProducts] = useState([]);

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
          src="https://res.cloudinary.com/dicqdr7wa/image/upload/v1752578786/lonely-814631_1920_qu8ans.jpg"
          alt="product banner"
          className="h-50 w-full object-cover rounded-lg shadow-lg mb-6"
        />
      </div>
      <div className="md:hidden h-10 bg-gray-500 border-gray-950 border-b flex items-center justify-center gap-1">
        <p className="font-semibold">Explore The Latest Collections -</p>{" "}
        <Link to='/' className='underline'>Show</Link>
      </div>
      <section className="container mx-auto p-4 flex max-lg:flex-col">
        <aside className="border min-h-10 w-[20%] max-lg:w-full"></aside>
        <div id="shop-content" className="py-6 w-[80%] max-lg:w-full lg:px-6">
          <h1 className="text-6xl mb-4 ">Shop</h1>
          <p className="text-gray-700 mb-6">
            Explore our collection of products.
          </p>

          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            {products.slice(0, 10).map((product) => (
              <ShopCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Shop