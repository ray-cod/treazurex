import ProfileNavItem from "./ProfileNavItem";

const UserProfileMenu = ({menuOption, setMenuOption}) => {
  return (
    <nav className="w-64 bg-gray-200 dark:bg-gray-900 rounded-xl p-4 shadow border-gray-800 space-y-4 max-md:hidden">
      <div className="space-y-2">
        <ProfileNavItem
          active={menuOption === "profile"}
          label="Profile Overview"
          onClick={() => setMenuOption("profile")}
        />
        <ProfileNavItem
          active={menuOption === "orders"}
          label="Orders"
          onClick={() => setMenuOption("orders")}
        />
        <ProfileNavItem
          active={menuOption === "wishlist"}
          label="Wishlist"
          onClick={() => setMenuOption("wishlist")}
        />
        <ProfileNavItem
          active={menuOption === "address"}
          label="Address Book"
          onClick={() => setMenuOption("address")}
        />
        <ProfileNavItem
          active={menuOption === "payment"}
          label="Payment Methods"
          onClick={() => setMenuOption("payment")}
        />
      </div>
      <button className="text-red-500 font-medium cursor-pointer hover:text-red-600">
        Logout
      </button>
    </nav>
  );
}

export default UserProfileMenu