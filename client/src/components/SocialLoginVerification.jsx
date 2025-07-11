import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../hooks/useAuthStore";

const SocialLoginVerification = () => {
  const navigate = useNavigate();
  const { setAccessToken } = useAuthStore();
  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current) return;
    effectRan.current = true;

    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get("token");

    if (token) {
      setAccessToken(token);
      navigate("/");
    } else {
      navigate("/auth/login");
    }
  }, []);

  return <p>Logging you in with Google...</p>;
};

export default SocialLoginVerification;
