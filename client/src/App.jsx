import { Routes, Route, Navigate } from "react-router-dom";

import Shop from "./pages/product/Shop";
import Home from "./pages/product/Home";
import ProductDetail from "./pages/product/ProductDetail";
import Cart from "./pages/product/Cart";
import CheckOut from "./pages/product/CheckOut";
import Authentication from "./pages/auth/Authentication";
import Profile from "./pages/product/Profile";
import About from "./pages/product/About";
import NotFound from "./pages/product/NotFound";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import MainLayout from "./layouts/MainLayout";
import useAuthStore from "./hooks/useAuthStore";
import { useEffect } from "react";
import api from "./config/axios";
import SocialLoginVerification from "./components/SocialLoginVerification";

function App() {
  const { setAccessToken } = useAuthStore();

  useEffect(() => {
    let isMounted = true;

    const fetchAccessToken = async () => {
      try {
        const response = await api.get("/api/refresh-token", {
          withCredentials: true,
        });

        if (isMounted) {
          setAccessToken(response.data.accessToken);
        }
      } catch (err) {
        if (err.name !== "CanceledError") {
          console.error("Unable to refresh access token:", err.message);
          if (isMounted) {
            setAccessToken(null);
          }
        }
      }
    };

    fetchAccessToken();

    return () => {
      isMounted = false;
    };
  }, []);


  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product-detail/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="profile/:id" element={<Profile />} />
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

      <Route path="/social-login" element={<SocialLoginVerification />} />
    </Routes>
  );
}

export default App;
