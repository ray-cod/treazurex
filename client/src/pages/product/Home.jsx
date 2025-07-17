import { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import useAuthStore from "../../hooks/useAuthStore";
import useUserAccountStore from "../../hooks/useUserAccountStore";

const Home = () => {
  const { accessToken } = useAuthStore();
  const userData = useUserAccountStore();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    if (accessToken) {
      setIsUserLoggedIn(userData.fetchProtectedData(accessToken));
    }
  }, [accessToken]);

  return (
    <>
      {isUserLoggedIn ? (
        <>
          <Hero />
          <p>Welcome {userData.userFirstName}</p>
          {/* <AdvancedImage cldImg={img} /> */}
        </>
      ) : (
        <p>You're not logged in.</p>
      )}
    </>
  );
};

export default Home;
