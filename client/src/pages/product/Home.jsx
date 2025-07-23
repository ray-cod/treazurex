import Hero from "../../components/Hero";
import ProductCard from "../../components/ProductCard";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import CollectionCard from "../../components/CollectionCard";
import useApiStore from "../../hooks/useApiStore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronsRight } from "lucide-react";

const Home = () => {
  const apiStore = useApiStore();
  const [products, setProducts] = useState([]);
  const collections = [
    {
      id: 1,
      image_url:
        "https://res.cloudinary.com/dicqdr7wa/image/upload/v1752845781/woman-with-shopping-bags-studio-yellow-background-isolated_vst2sp.jpg",
      name: "Classy Wear",
    },
    {
      id: 2,
      image_url:
        "https://res.cloudinary.com/dicqdr7wa/image/upload/v1753117181/jay-soundo-4JTvVYhijiY-unsplash_z6tjia.jpg",
      name: "Young and Stylish",
    },
    {
      id: 3,
      image_url:
        "https://res.cloudinary.com/dicqdr7wa/image/upload/v1753117178/kunal-sutrave-YSFlaL_zyLc-unsplash_bl5qvb.jpg",
      name: "Evening Glam",
    },
  ];

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
      <Hero />

      {/* Section One */}
      <section id="latest-items" className="container mx-auto px-4 py-10">
        <div className="flex items-end justify-between flex-wrap">
          <div>
            <h2 className="text-6xl max-sm:text-5xl max-md:text-[54px] font-bold pt-8 pb-7">
              Beyond The Edges <br /> of{" "}
              <span className="text-blue-700">Your Needs</span>
            </h2>
            <p className="pb-3">Find our latest items curated only for you.</p>
          </div>
          <div className="flex items-center gap-4 pb-3">
            <CircleArrowLeft className="w-12 h-12 cursor-pointer dark:hover:bg-gray-800 rounded-full" />
            <CircleArrowRight className="w-12 h-12 cursor-pointer dark:hover:bg-gray-800 rounded-full" />
          </div>
        </div>

        <div className="product-slider">
          <div className="slider-container">
            {products.slice(0, 10).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            <Link className="mx-10 flex items-center" to="/shop">
              <ChevronsRight className="w-7 h-7" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section Two */}
      <section className="bg-gray-100 dark:bg-gray-800 py-10 pb-20 relative">
        <article className="container mx-auto px-4 flex max-md:flex-wrap-reverse items-center gap-10">
          <div>
            <h2 className="text-4xl max-sm:text-[29px] max-md:text-[33px] pb-5 font-bold">
              Your journey to the perfect product starts here.
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Fashion expresses identity and creativity. It blends trends with
              personal style, making statements through what we wear each day.
            </p>

            <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <CircleArrowRight className="w-4 h-4 text-blue-700 mt-1" />
                <div>
                  <h3 className="font-bold">Quality craftsmanship</h3>
                  <p className="text-sm w-3/4">
                    Our products are made with the finest materials.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CircleArrowRight className="w-4 h-4 text-blue-700 mt-1" />
                <div>
                  <h3 className="font-bold">Sustainable practices</h3>
                  <p className="text-sm w-3/4">
                    We prioritize eco-friendly materials and processes.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CircleArrowRight className="w-4 h-4 text-blue-700 mt-1" />
                <div>
                  <h3 className="font-bold">Innovative designs</h3>
                  <p className="text-sm w-3/4">
                    Our products feature unique designs that stand out.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <img
              src="https://res.cloudinary.com/dicqdr7wa/image/upload/v1752848701/slim-young-woman-posing-blue-wall_vrkb11.jpg"
              alt="Fashion"
              className="w-full h-[25rem] object-cover max-sm:h-80 max-md:h-90 rounded-lg shadow-lg"
            />
          </div>
        </article>
        <div className="absolute bottom-0 right-0 h-20 bg-gradient-to-t from-[#030712] to-transparent w-[100%]"></div>
      </section>

      {/* Section Three */}
      <section id="collections" className="container mx-auto px-4 py-10">
        <h2 className="text-6xl max-sm:text-5xl max-md:text-[54px] font-bold pb-12">
          <span className="text-blue-700">Explore</span> <br /> Our Collections
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 container mx-auto">
          {collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              image_url={collection.image_url}
              name={collection.name}
            />
          ))}
        </div>
      </section>

      {/* Section Four */}
      <section className="bg-[#030712] text-gray-100 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            What Our Customers Say
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {/* Testimonial Card */}
            {[1, 2, 3].map((id) => (
              <div
                key={id}
                className="bg-[#111827] rounded-2xl p-6 shadow-lg border border-gray-800"
              >
                <p className="text-gray-300 mb-4 italic">
                  "Absolutely love it! The quality is great and the service was
                  amazing. I’ll definitely be back for more."
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={`https://randomuser.me/api/portraits/men/${
                      id + 10
                    }.jpg`}
                    alt="Customer"
                    className="w-12 h-12 rounded-full border-2 border-blue-500"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-white">John Doe</h4>
                    <span className="text-sm text-gray-400">
                      Verified Buyer
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
