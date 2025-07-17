import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";

const AuthHeader = () => {
  return (
    <header className="auth-header">
      <section className="flex justify-between items-center mx-auto p-4 max-w-7xl">
        <div id="logo" className="flex text-3xl gap-3 items-center">
          <MdShoppingBasket />
          <h2 className="hidden sm:block">Treazurex</h2>
        </div>
        <button className="border border-[rgba(255,255,255,0.274)] rounded-lg p-1 px-2 cursor-pointer md:hidden">
          &#9776;
        </button>
        <nav className="auth-navbar hidden md:block">
          <ul className="flex gap-6 justify-between items-center">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/about">Contact</Link>
            </li>
            <li>
              <Link to="/about">help</Link>
            </li>
            <li>
              <Link to='/' className="border py-2 px-4 hover:bg-gray-50/15 rounded-lg cursor-pointer text-sm">
                Cancel
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default AuthHeader;
