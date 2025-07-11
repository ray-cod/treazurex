import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";

const AuthHeader = () => {
  return (
    <header className="auth-header">
      <section className="flex justify-between items-center mx-auto p-4 max-w-7xl">
        <div id="logo" className="flex text-3xl gap-3">
          <MdShoppingBasket />
          <h2>Treazurex</h2>
        </div>
        <nav className="auth-navbar">
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
              <button className="border p-2 hover:bg-gray-50/15 rounded-lg cursor-pointer">
                Cancel
              </button>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default AuthHeader;
