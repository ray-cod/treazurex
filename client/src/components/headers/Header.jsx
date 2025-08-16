import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import MainMobileNav from "./MainMobileNav";

const Header = ({ userData, isUserLoggedIn }) => {
  const [mobileMenu, setMobileMenu] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const categories = [
    { name: "Men", path: "/shop/men" },
    { name: "Women", path: "/shop/women" },
    { name: "Accessories", path: "/shop/accessories" },
    { name: "Shoes", path: "/shop/shoes" },
  ];

  return (
    <header className="auth-header dark:text-gray-100 dark:bg-black relative">
      <section
        id="navbar"
        className="flex justify-between items-center mx-auto p-4 max-w-7xl"
      >
        {/* Logo */}
        <Link
          to="/"
          id="logo"
          className="flex text-3xl gap-3 items-center"
          onClick={() => setMobileMenu("")}
        >
          <MdShoppingBasket />
          <h2 className="hidden sm:block font-bold tracking-wide">Treazurex</h2>
        </Link>

        {/* Desktop Nav */}
        <nav id="main-navbar" className="hidden md:block">
          <ul className="flex gap-6 justify-between items-center font-medium relative">
            {/* Categories Dropdown */}
            <li className="relative">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex items-center gap-1 hover:text-blue-500 transition"
              >
                Categories <ChevronDown size={16} />
              </button>
              {isCategoryOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-neutral-900 shadow-lg rounded-xl py-2 z-20">
                  {categories.map((cat) => (
                    <li key={cat.name}>
                      <Link
                        to={cat.path}
                        className="block px-4 py-2 hover:bg-blue-500 hover:text-white rounded-lg transition"
                        onClick={() => setIsCategoryOpen(false)}
                      >
                        {cat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link to="/shop" className="hover:text-blue-500 transition">
                Products
              </Link>
            </li>
            <li>
              <Link to={`/about`} className="hover:text-blue-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500 transition">
                Contacts
              </Link>
            </li>
          </ul>
        </nav>

        {/* User / Cart Icons */}
        <section className="flex justify-end items-center gap-4">
          <div
            id="user-options"
            className="flex gap-4 cursor-pointer items-center"
          >
            <IoSearch className="text-lg cursor-pointer" />
            <FaRegHeart className="text-lg cursor-pointer" />
            {isUserLoggedIn ? (
              <Link
                to={`/profile/${userData.userId}`}
                onClick={() => setMobileMenu("")}
              >
                <img
                  src={
                    userData.userPicture ||
                    "https://res.cloudinary.com/dicqdr7wa/image/upload/v1753030277/user-2517433_1280_pqzokk.png"
                  }
                  alt="User Profile"
                  className="w-8 h-8 rounded-full"
                  aria-label="User Profile"
                />
              </Link>
            ) : (
              <Link to="/auth/login" onClick={() => setMobileMenu("")}>
                <FaRegUser className="text-lg cursor-pointer" />
              </Link>
            )}
            <LuShoppingCart className="text-lg cursor-pointer" />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`${
              !mobileMenu ? "md:hidden" : "hidden"
            } border border-black dark:border-[rgba(255,255,255,0.274)] rounded-lg w-[34px] h-[34px] cursor-pointer md:hidden`}
            onClick={() => setMobileMenu("active")}
          >
            &#9776;
          </button>
          <button
            className={`${
              mobileMenu ? "md:hidden" : "hidden"
            } border border-black dark:border-[rgba(255,255,255,0.274)] rounded-lg w-[34px] h-[34px] cursor-pointer md:hidden`}
            onClick={() => setMobileMenu("")}
          >
            &#10005;
          </button>
        </section>
      </section>

      {/* Mobile Navbar */}
      <MainMobileNav 
        userData={userData}
        categories={categories}
        isUserLoggedIn={isUserLoggedIn}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
        isCategoryOpen={isCategoryOpen}
        setIsCategoryOpen={setIsCategoryOpen}
      />
    </header>
  );
};

export default Header;
