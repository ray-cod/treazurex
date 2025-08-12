import ProfileOverview from "./ProfileOverview";

const ProfileOptionsDisplay = ({ menuOption }) => {
  return (
    <>
      {menuOption === "profile" ? (
        <ProfileOverview />
      ) : menuOption === "orders" ? (
        <div>Orders</div>
      ) : menuOption === "wishlist" ? (
        <div>wishlist</div>
      ) : menuOption === "address" ? (
        <div>address</div>
      ) : menuOption === "payment" ? (
        <div>payment</div>
      ) : (
        <div>none</div>
      )}
    </>
  );
};

export default ProfileOptionsDisplay