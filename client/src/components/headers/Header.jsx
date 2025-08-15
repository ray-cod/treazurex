import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";

const Header = ({ userData, isUserLoggedIn }) => {
  const [mobileMenu, setMobileMenu] = useState("");

  return (
    <header className="auth-header dark:text-gray-100 dark:bg-black">
      <section
        id="navbar"
        className="flex justify-between items-center mx-auto p-4 max-w-7xl"
      >
        <Link
          to="/"
          id="logo"
          className="flex text-3xl gap-3 items-center"
          onClick={() => setMobileMenu("")}
        >
          <MdShoppingBasket />
          <h2 className="hidden sm:block font-bold tracking-wide">Treazurex</h2>
        </Link>
        <nav id="main-navbar" className="hidden md:block">
          <ul className="flex gap-6 justify-between items-center font-medium">
            <li>
              <Link to="/shop">Categories</Link>
            </li>
            <li>
              <Link to="/shop">Products</Link>
            </li>
            <li>
              <Link to={`/profile/${userData.userId}`}>Profile</Link>
            </li>
            <li>
              <Link to="/about">Contacts</Link>
            </li>
          </ul>
        </nav>
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
      <div
        id="mobile-navbar"
        className={`${
          mobileMenu ? "md:hidden" : "hidden"
        } bg-white dark:bg-black w-full py-10 px-6 absolute z-11`}
      >
        <div id="user" className="pl-4">
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
                className="w-15 h-15 rounded-full"
              />
              <h2 className="font-semibold pt-4">{`${userData.userFirstName} ${userData.userLastName}`}</h2>
              <p className="text-gray-500">Customer</p>
            </Link>
          ) : (
            <Link to="/auth/login">
              <FaRegUser className="text-lg" />
            </Link>
          )}
        </div>

        <nav className="py-6">
          <ul className="flex flex-col text-lg gap-4">
            <Link to="/shop" onClick={() => setMobileMenu("")}>
              <li className="w-full py-2 px-4 hover:bg-blue-500 rounded-lg">
                Categories
              </li>
            </Link>
            <Link to="/shop" onClick={() => setMobileMenu("")}>
              <li className="w-full py-2 px-4 hover:bg-blue-500 rounded-lg">
                Products
              </li>
            </Link>
            <Link
              to={`/profile/${userData.userId}`}
              onClick={() => setMobileMenu("")}
            >
              <li className="w-full py-2 px-4 hover:bg-blue-500 rounded-lg">
                Profile
              </li>
            </Link>
            <Link to="/about" onClick={() => setMobileMenu("")}>
              <li className="w-full py-2 px-4 hover:bg-blue-500 rounded-lg">
                Contacts
              </li>
            </Link>
          </ul>
        </nav>

        <button
          className="mt-10 font-semibold px-4 py-2 w-full bg-blue-500 hover:cursor-pointer hover:bg-blue-600 active:bg-blue-700 rounded-lg text-white"
          onClick={() => setMobileMenu("")}
        >
          Log Out
        </button>
      </div>
    </header>
  );
};

export default Header;
