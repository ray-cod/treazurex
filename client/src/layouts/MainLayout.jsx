import { Outlet } from 'react-router-dom';
import { useEffect } from "react";
import useAuthStore from "../hooks/useAuthStore";
import useUserAccountStore from "../hooks/useUserAccountStore";
import Header from '../components/headers/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
  const { 
    accessToken, 
    isUserLoggedIn,
    setIsUserLoggedIn 
  } = useAuthStore();
  const userData = useUserAccountStore();

  useEffect(() => {
    if (!accessToken) return;

    const verifyUser = async () => {
      try {
        const result = await userData.fetchProtectedData(accessToken);
        setIsUserLoggedIn(!!result);
      } catch (error) {
        console.error("Error verifying user:", error);
        setIsUserLoggedIn(false);
      }
    };

    verifyUser();
  }, [accessToken]);


  return (
    <>
      <Header 
        userData={userData}
        isUserLoggedIn={isUserLoggedIn}
      />
      <main className="min-h-screen bg-gray-100 dark:bg-[#030712] text-black dark:text-gray-100">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout