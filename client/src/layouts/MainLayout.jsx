import { Outlet } from 'react-router-dom';
import Header from '../components/headers/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 dark:bg-[#030712] text-gray-800 dark:text-gray-200">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout