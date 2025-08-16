import { ChevronDown } from 'lucide-react';
import { FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MainMobileNav = ({
  userData,
  categories,
  isUserLoggedIn,
  mobileMenu,
  setMobileMenu,
  isCategoryOpen,
  setIsCategoryOpen,
}) => {
  return (
    <div
      id="mobile-navbar"
      className={`${
        mobileMenu ? "md:hidden" : "hidden"
      } bg-white dark:bg-black w-full py-10 px-6 absolute z-20`}
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

      {/* Mobile Nav with Dropdown */}
      <nav className="py-6">
        <ul className="flex flex-col text-lg gap-4">
          {/* Categories Dropdown (mobile) */}
          <li>
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="w-full flex justify-between items-center py-2 px-4 hover:bg-blue-500 rounded-lg"
            >
              Categories <ChevronDown size={18} />
            </button>
            {isCategoryOpen && (
              <ul className="pl-6 mt-2 flex flex-col gap-2">
                {categories.map((cat) => (
                  <li key={cat.name}>
                    <Link
                      to={cat.path}
                      onClick={() => {
                        setIsCategoryOpen(false);
                        setMobileMenu("");
                      }}
                      className="block py-2 px-3 hover:bg-blue-500 hover:text-white rounded-lg transition"
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <Link to="/shop" onClick={() => setMobileMenu("")}>
            <li className="w-full py-2 px-4 hover:bg-blue-500 rounded-lg">
              Products
            </li>
          </Link>
          <Link to={`/about`} onClick={() => setMobileMenu("")}>
            <li className="w-full py-2 px-4 hover:bg-blue-500 rounded-lg">
              About
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
  );
};

export default MainMobileNav