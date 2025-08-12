import { useState } from "react";
import useUserAccountStore from "../../hooks/useUserAccountStore";
import { Mail, MapPin, Menu, SquarePen } from "lucide-react";
import RelatedProduct from "../../components/RelatedProduct";
import ProfileOptionsDisplay from "../../components/ProfileOptionsDisplay";
import UserProfileMenu from "../../components/UserProfileMenu";

const Profile = () => {
  const userData = useUserAccountStore();
  const [isEmailVisible, setIsEmailVisible] = useState(false);
  const [menuOption, setMenuOption] = useState("profile");

  return (
    <section className="min-h-screen md:container mx-auto px-4 py-10">
      {/* Profile Header */}
      <div className="bg-gray-200 dark:bg-gray-900 p-8 rounded-xl shadow border-gray-800 flex justify-between items-start max-md:flex-col gap-4">
        <div className="flex gap-4 items-center max-md:flex-col max-md:items-start">
          <img
            src={
              userData.userPicture ||
              "https://res.cloudinary.com/dicqdr7wa/image/upload/v1753030277/user-2517433_1280_pqzokk.png"
            }
            alt="User Profile"
            className="w-25 h-25 rounded-full"
          />
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold">
              {userData.userFirstName}{" "}
              <span className="text-yellow-500">{userData.userLastName}</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              User ID: {userData.userId}
            </p>

            <div className="flex gap-4 flex-wrap text-sm">
              <div
                id="email"
                className="text-gray-600 dark:text-gray-400 flex gap-2 items-center"
              >
                <Mail className="w-4 h-4" />
                <p
                  className="underline cursor-pointer"
                  onClick={() => setIsEmailVisible(!isEmailVisible)}
                >
                  {isEmailVisible ? userData.userEmail : "Show email"}
                </p>
              </div>

              <div
                id="address"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
              >
                <MapPin className="w-4 h-4" />
                <address>No Address</address>
              </div>
            </div>
            <ul className="flex gap-5 items-center">
              <li className="flex flex-col items-center">
                <span className="font-semibold">7</span>
                <span className="text-xs">Orders</span>
              </li>
              <li className="flex flex-col items-center">
                <span className="font-semibold">11</span>
                <span className="text-xs">Wishlist</span>
              </li>
              <li className="flex flex-col items-center">
                <span className="font-semibold">2</span>
                <span className="text-xs">Addresses</span>
              </li>
            </ul>
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-800 text-white px-4 py-2 rounded-lg inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium cursor-pointer">
          <SquarePen className="w-4 h-4" />
          Edit Profile
        </button>
      </div>

      <div className="flex py-6 gap-6">
        {/* Sidebar */}
        <UserProfileMenu
          menuOption={menuOption}
          setMenuOption={setMenuOption}
        />

        {/* Main Content */}
        <section className="flex-1 space-y-6">
          {/* Mobile menu */}
          <div className="flex justify-between p-2 border border-gray-500 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-900 cursor-pointer md:hidden">
            <h3>Menu</h3>
            <Menu />
          </div>

          {/* Profile Options Display */}
          <ProfileOptionsDisplay menuOption={menuOption} />
        </section>
      </div>

      {/* Recently Viewed */}
      <div className="bg-gray-200 dark:bg-gray-900 p-6 rounded-xl shadow border-gray-800">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Recently Viewed</h3>
          <button className="text-sm text-gray-600 dark:text-gray-400 underline">
            View All
          </button>
        </div>

        <div className="product-slider">
          <div className="slider-container">
            <RelatedProduct />
            <RelatedProduct />
            <RelatedProduct />
            <RelatedProduct />
            <RelatedProduct />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
