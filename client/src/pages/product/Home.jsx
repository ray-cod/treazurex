import { useEffect, useState } from "react";
import useAuthStore from "../../hooks/useAuthStore";
import useUserAccountStore from "../../hooks/useUserAccountStore";
import api from "../../config/axios";
import Hero from "../../components/Hero";

const Home = () => {
  const { accessToken } = useAuthStore();
  const { userFirstName, setUserFirstName } = useUserAccountStore();
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        setIsLoading(true);
        const response = await api.get("/api/check-page", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.status === 200) {
          setUserFirstName(response.data.user.firstName);
          setIsValid(true);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching protected data:", error.message);
      }
    };

    if (accessToken) fetchProtectedData();
  }, [accessToken]);

  return (
    <>
      {accessToken && isValid ? (
        isLoading ? (
          <p>Loading your data...</p>
        ) : (
          <>
            <Hero />
            <p>Welcome {userFirstName}</p>
            {/* <AdvancedImage cldImg={img} /> */}
          </>
        )
      ) : (
        <p>You're not logged in.</p>
      )}
    </>
  );
};

export default Home;
