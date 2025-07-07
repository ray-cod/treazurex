import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";

const AuthHeader = () => {
  return (
    <header className="auth-header">
      <div id="logo">
        <MdShoppingBasket />
        <h2>Treazurex</h2>
      </div>
      <nav className="auth-navbar">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <button>Cancel</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AuthHeader;
