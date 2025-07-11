import { NavLink, Outlet } from "react-router-dom";
import AuthHeader from "../../components/headers/AuthHeader";
import useAuthStore from "../../hooks/useAuthStore";

const Authentication = () => {
  const { handleGoogleLogin, handleFacebookLogin } = useAuthStore();

  return (
    <>
      <AuthHeader />
      <main className="auth-main">
        <h1>Welcome to Treazurex</h1>
        <ul className="login-register-switch">
          <li>
            <NavLink
              to="login"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="register"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Register
            </NavLink>
          </li>
        </ul>
        <Outlet />
        <p>Or continue with</p>
        <div className="auth-socials">
          <button onClick={handleGoogleLogin}>Continue with Google</button>
          <button onClick={handleFacebookLogin}>Continue with Facebook</button>
        </div>
      </main>
    </>
  );
};

export default Authentication;
