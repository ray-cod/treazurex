import AddressList from "./AddressList";
import OrdersList from "./OrdersList";
import PaymentMethodsList from "./PaymentMethodsList";
import ProfileOverview from "./ProfileOverview";
import WishList from "./WishList";

const ProfileOptionsDisplay = ({ menuOption }) => {
  return (
    <>
      {menuOption === "profile" ? (
        <ProfileOverview />
      ) : menuOption === "orders" ? (
        <OrdersList />
      ) : menuOption === "wishlist" ? (
        <WishList />
      ) : menuOption === "address" ? (
        <AddressList />
      ) : menuOption === "payment" ? (
        <PaymentMethodsList />
      ) : (
        <div>none</div>
      )}
    </>
  );
};

export default ProfileOptionsDisplay