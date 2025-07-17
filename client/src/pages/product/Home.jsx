import Hero from "../../components/Hero";
import useAuthStore from "../../hooks/useAuthStore";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  const { isUserLoggedIn } = useAuthStore();

  return (
    <>
      {isUserLoggedIn ? (
        <>
          <Hero />
          <section className="container mx-auto px-4 py-10">
            <h2 className="text-4xl font-bold pt-11 pb-7">
              Beyond The Edges of Your Needs
            </h2>
            <p className="pb-3">Find our latest items curated only for you.</p>

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
        </>
      ) : (
        <p>You're not logged in.</p>
      )}
    </>
  );
};

export default Home;
