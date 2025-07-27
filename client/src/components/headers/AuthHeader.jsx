import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";
import { useState } from "react";

const AuthHeader = () => {
  const [mobileMenu, setMobileMenu] = useState("");

  return (
    <header className="auth-header">
      <section
        className={`${
          mobileMenu ? "bg-[#030712]" : ""
        } flex justify-between items-center mx-auto p-4 max-w-7xl`}
      >
        <div id="logo" className="flex text-3xl gap-3 items-center">
          <Link to="/">
            <MdShoppingBasket />
          </Link>
          <h2 className="hidden sm:block">Treazurex</h2>
        </div>
        <button
          className={`${
            !mobileMenu ? "md:hidden" : "hidden"
          } border border-[rgba(255,255,255,0.274)] rounded-lg w-[34px] h-[34px] cursor-pointer md:hidden`}
          onClick={() => setMobileMenu("active")}
        >
          &#9776;
        </button>
        <button
          className={`${
            mobileMenu ? "md:hidden" : "hidden"
          } border border-[rgba(255,255,255,0.274)] rounded-lg w-[34px] h-[34px] cursor-pointer md:hidden`}
          onClick={() => setMobileMenu("")}
        >
          &#10005;
        </button>
        <nav className="auth-navbar hidden md:block">
          <ul className="flex gap-6 justify-between items-center">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/about">Contacts</Link>
            </li>
            <li>
              <Link to="/about">help</Link>
            </li>
            <li>
              <Link
                to="/"
                className="border py-2 px-4 hover:bg-gray-50/15 rounded-lg cursor-pointer text-sm"
              >
                Cancel
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      {/* Mobile Navbar */}
      <div
        id="mobile-navbar"
        className={`${
          mobileMenu ? "md:hidden" : "hidden"
        } bg-[#030712] w-full py-10 px-6 absolute z-11`}
      >
        <nav className="pb-6">
          <ul className="flex flex-col text-lg gap-4">
            <li className="w-full py-2 px-4 hover:bg-blue-500 rounded-lg">
              <Link to="/about" onClick={() => setMobileMenu("")}>
                About
              </Link>
            </li>
            <li className="w-full py-2 px-4 hover:bg-blue-500 rounded-lg">
              <Link to="/about" onClick={() => setMobileMenu("")}>
                Help
              </Link>
            </li>
            <li className="w-full py-2 px-4 hover:bg-blue-500 rounded-lg">
              <Link to="/about" onClick={() => setMobileMenu("")}>
                Contacts
              </Link>
            </li>
          </ul>
        </nav>

        <Link to="/">
          <button
            className="mt-10 font-semibold px-4 py-2 w-full bg-blue-500 hover:cursor-pointer hover:bg-blue-600 active:bg-blue-700 rounded-lg"
            onClick={() => setMobileMenu("")}
          >Cancel</button>
        </Link>
      </div>
    </header>
  );
};

export default AuthHeader;
