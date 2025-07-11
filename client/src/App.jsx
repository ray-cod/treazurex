import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Shop from './pages/product/Shop';
import Home from './pages/product/Home';
import ProductDetail from './pages/product/ProductDetail';
import Cart from './pages/product/Cart';
import CheckOut from './pages/product/CheckOut';
import Authentication from './pages/auth/Authentication';
import Profile from './pages/product/Profile';
import About from "./pages/product/About";
import NotFound from './pages/product/NotFound';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from "./pages/auth/ForgotPassword";
import MainLayout from './layouts/MainLayout';
import useAuthStore from './hooks/useAuthStore';
import { useEffect } from 'react';
import api from './config/axios';
import GoogleLoginVerification from './components/GoogleLoginVerification';

function App() {
  const { setAccessToken } = useAuthStore();

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const response = await api.get("/api/refresh-token", {
          withCredentials: true,
        });
        setAccessToken(response.data.accessToken);
      } catch (err) {
        console.log("Unable to refresh access token:", err.message);
      }
    };

    fetchAccessToken();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product-detail/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route
          path="profile/:id"
          element={
            <Authentication>
              <Profile />
            </Authentication>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="auth" element={<Authentication />}>
        {/* Redirect /auth to /auth/login */}
        <Route index element={<Navigate to="login" replace />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>

      <Route path="/google-login" element={<GoogleLoginVerification />} />
    </Routes>
  );
}

export default App;
