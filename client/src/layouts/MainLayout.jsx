import { Outlet } from 'react-router-dom';
import { useEffect, useState } from "react";
import useAuthStore from "../hooks/useAuthStore";
import useUserAccountStore from "../hooks/useUserAccountStore";
import Header from '../components/headers/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
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
      <Header 
        userData={userData}
        isUserLoggedIn={isUserLoggedIn}
      />
      <main className="min-h-screen bg-gray-50 dark:bg-[#030712] text-gray-800 dark:text-gray-200">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout