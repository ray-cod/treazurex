import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";

const Header = ({ userData, isUserLoggedIn }) => {
  console.log("Header userData:", userData);
  console.log("Header isUserLoggedIn:", isUserLoggedIn);
  return (
    <header className="auth-header dark:text-gray-100 dark:bg-black">
      <section className="flex justify-between items-center mx-auto p-4 max-w-7xl">
        <div id="logo" className="flex text-3xl gap-3 items-center">
          <MdShoppingBasket />
          <h2 className="hidden sm:block">Treazurex</h2>
        </div>
        <nav className="auth-navbar hidden md:block">
          <ul className="flex gap-6 justify-between items-center">
            <li>
              <Link to="/about">Categories</Link>
            </li>
            <li>
              <Link to="/about">New</Link>
            </li>
            <li>
              <Link to="/about">Products</Link>
            </li>
            <li>
              <Link to="/about">Contacts</Link>
            </li>
          </ul>
        </nav>
        <section className="flex justify-end items-center gap-4">
          <div
            id="user-choices"
            className="flex gap-4 cursor-pointer items-center"
          >
            <IoSearch className="text-lg cursor-pointer" />
            <FaRegHeart className="text-lg cursor-pointer" />
            {isUserLoggedIn ? (
              <Link to={`/profile/${userData.userId}`}>
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
              <Link to="/auth/login">
                <FaRegUser className="text-lg cursor-pointer" />
              </Link>
            )}
            <LuShoppingCart className="text-lg cursor-pointer" />
          </div>
          <button className="border border-[rgba(255,255,255,0.274)] rounded-lg p-1 px-2 cursor-pointer md:hidden">
            &#9776;
          </button>
        </section>
      </section>
    </header>
  );
};

export default Header;
