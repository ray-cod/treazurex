import Hero from "../../components/Hero";
import useAuthStore from "../../hooks/useAuthStore";
import ProductCard from "../../components/ProductCard";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import CollectionCard from "../../components/CollectionCard";

const Home = () => {
  const { isUserLoggedIn } = useAuthStore();

  return (
    <>
      {isUserLoggedIn ? (
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
                <p className="pb-3">
                  Find our latest items curated only for you.
                </p>
              </div>
              <div className="flex items-center gap-4 pb-3">
                <CircleArrowLeft className="w-12 h-12 cursor-pointer dark:hover:bg-gray-800 rounded-full" />
                <CircleArrowRight className="w-12 h-12 cursor-pointer dark:hover:bg-gray-800 rounded-full" />
              </div>
            </div>

            <div className="product-slider">
              <div className="slider-container">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
          </section>

          {/* Section Two */}
          <section className="bg-gray-100 dark:bg-gray-800 py-10 pb-20 relative">
            <article className="container mx-auto px-4 flex max-md:flex-wrap-reverse items-center gap-10">
              <div className="">
                <h2 className="text-4xl max-sm:text-[29px] max-md:text-[33px] pb-5 font-bold">
                  Your journey to the perfect product starts here.
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Fashion expresses identity and creativity. It blends trends
                  with personal style, making statements through what we wear
                  each day.
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
          <section className="container mx-auto px-4 py-10">
            <h2 className="text-6xl max-sm:text-5xl max-md:text-[54px] font-bold pb-7">
              <span className="text-blue-700">Explore</span> <br /> Our
              Collection
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 container mx-auto">
              <CollectionCard />
              <CollectionCard />
              <CollectionCard />
            </div>
          </section>
        </>
      ) : (
        <p>You're not logged in.</p>
      )}
    </>
  );
};

export default Home;
