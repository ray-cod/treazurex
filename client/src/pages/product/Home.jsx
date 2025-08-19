import Hero from "../../components/Hero";
import ProductCard from "../../components/ProductCard";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import CollectionCard from "../../components/CollectionCard";
import useApiStore from "../../hooks/useApiStore";
import { useEffect, useRef, useState } from "react";
import ScrollStack from "../../components/ScrollStack";

const Home = () => {
  const sliderRef = useRef(null);
  const apiStore = useApiStore();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const collections = [
    {
      id: 1,
      image_url:
        "https://res.cloudinary.com/dicqdr7wa/image/upload/f_auto,q_auto,dpr_auto,c_fill,g_auto,w_1200/v1752845781/woman-with-shopping-bags-studio-yellow-background-isolated_vst2sp.jpg",
      name: "Classy Wear",
    },
    {
      id: 2,
      image_url:
        "https://res.cloudinary.com/dicqdr7wa/image/upload/f_auto,q_auto,dpr_auto,c_fill,g_auto,w_1200/v1753117181/jay-soundo-4JTvVYhijiY-unsplash_z6tjia.jpg",
      name: "Young and Stylish",
    },
    {
      id: 3,
      image_url:
        "https://res.cloudinary.com/dicqdr7wa/image/upload/f_auto,q_auto,dpr_auto,c_fill,g_auto,w_1200/v1753117178/kunal-sutrave-YSFlaL_zyLc-unsplash_bl5qvb.jpg",
      name: "Evening Glam",
    },
  ];

  useEffect(() => {
    let isMounted = true; // track mount state
    const controller = new AbortController(); // cancel request if unmounted
    
    const fetchProducts = async () => {
      try {
        setIsLoading(true); 
        const products = await apiStore.getAllProducts({
          signal: controller.signal,
        });
        if (isMounted) {
          setProducts(products);
          console.log("Fetched products:", products);
        }
      } catch (error) {
        if (isMounted) {
          console.error("Error fetching products:", error);
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    
    fetchProducts();

    return () => {
      isMounted = false;
      controller.abort(); // cleanup
    };
  }, []);
  

  // Scroll functions
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <>
      <Hero />

      {/* Section One: Latest Items */}
      <section
        id="latest-items"
        className="container mx-auto px-4 py-13 md:py-20 lg:py-24"
      >
        <div className="flex items-end justify-between flex-wrap">
          <div>
            <h2 className="text-6xl max-sm:text-4xl max-md:text-5xl font-medium mb-7">
              Beyond The Edges <br /> of{" "}
              <span className="text-blue-500">Your Needs</span>
            </h2>
            <p className="pb-3">Find our latest items curated only for you.</p>
          </div>
          <div className="flex items-center gap-4 pb-3">
            <CircleArrowLeft
              onClick={scrollLeft}
              className="w-12 h-12 cursor-pointer dark:hover:bg-gray-800 rounded-full"
            />
            <CircleArrowRight
              onClick={scrollRight}
              className="w-12 h-12 cursor-pointer dark:hover:bg-gray-800 rounded-full"
            />
          </div>
        </div>

        <div className="product-slider">
          <div ref={sliderRef} className="slider-container">
            {products.slice(0, 10).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Section Two: Advert */}
      <section className="bg-gray-200 dark:bg-gray-900 py-13 md:py-20 lg:py-24 relative">
        <article className="container mx-auto px-4 flex max-md:flex-wrap-reverse items-center gap-10">
          <div>
            <h2 className="text-4xl max-sm:text-[29px] max-md:text-[33px] mb-5 font-medium">
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
                  <h3 className="font-medium text-black dark:text-white">
                    Quality craftsmanship
                  </h3>
                  <p className="text-sm w-3/4">
                    Our products are made with the finest materials.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CircleArrowRight className="w-4 h-4 text-blue-700 mt-1" />
                <div>
                  <h3 className="font-medium text-black dark:text-white">
                    Sustainable practices
                  </h3>
                  <p className="text-sm w-3/4">
                    We prioritize eco-friendly materials and processes.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CircleArrowRight className="w-4 h-4 text-blue-700 mt-1" />
                <div>
                  <h3 className="font-medium text-black dark:text-white">
                    Innovative designs
                  </h3>
                  <p className="text-sm w-3/4">
                    Our products feature unique designs that stand out.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <img
              src="https://res.cloudinary.com/dicqdr7wa/image/upload/f_auto,q_auto,dpr_auto,c_fill,g_auto,w_1200/v1752848701/slim-young-woman-posing-blue-wall_vrkb11.jpg"
              alt="Fashion"
              className="w-full h-[25rem] object-cover max-sm:h-80 max-md:h-90 rounded-lg shadow-lg"
            />
          </div>
        </article>
        <div className="absolute bottom-0 right-0 h-20 bg-gradient-to-t from-gray-100 dark:from-[#030712] via-transparent to-transparent w-[100%]"></div>
      </section>

      {/* Section Three: Collections */}
      <section
        id="collections"
        className="container mx-auto px-4 py-13 md:py-20 lg:py-24"
      >
        <h2 className="text-6xl max-sm:text-4xl max-md:text-5xl font-medium mb-12">
          <span className="text-blue-500">Explore</span> <br /> Our Collections
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

      {/* Section Four: Scroll stack */}
      <ScrollStack />

      {/* Section Five: Testimonials */}
      <section className="py-13 md:py-20 lg:py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-12">
            What Our Customers Say
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {/* Testimonial Card */}
            {[1, 2, 3].map((id) => (
              <div
                key={id}
                className="dark:bg-[#111827] rounded-2xl p-6 shadow-lg border border-gray-800"
              >
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                  "Absolutely love it! The quality is great and the service was
                  amazing. I’ll definitely be back for more."
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={`https://randomuser.me/api/portraits/men/${
                      id + 10
                    }.jpg`}
                    alt="Customer"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold">John Doe</h4>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Customer
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
