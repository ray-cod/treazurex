import { NavLink, Outlet } from "react-router-dom";
import AuthHeader from "../../components/headers/AuthHeader";
import useAuthStore from "../../hooks/useAuthStore";

const Authentication = () => {
  const { handleGoogleLogin, handleFacebookLogin } = useAuthStore();

  return (
    <section className="auth-section bg-cover bg-right min-h-screen dark:text-white pb-20">
      <AuthHeader />
      <main className="auth-main flex flex-col items-center">
        <h1 className="text-3xl mb-4 mt-6 max-sm:text-2xl">
          Welcome to Treazurex
        </h1>
        <section className="w-full max-w-5xl px-4">
          <ul className="login-register-switch flex gap-6 pb-2 border-b border-[rgba(255,255,255,0.274)]">
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
        </section>
        <p className="mt-4 text-[14px] text-[#9CA8BA]">Or continue with</p>
        <div className="auth-socials flex flex-wrap justify-center items-center w-[100%] px-4">
          <button
            onClick={handleGoogleLogin}
            className="bg-[#292E38] py-2 px-4 rounded-lg mx-3 mt-4 hover:cursor-pointer active:bg-gray-800 max-sm:w-3/4 text-sm"
          >
            Continue with Google
          </button>
          <button
            onClick={handleFacebookLogin}
            className="bg-[#292E38] py-2 px-4 rounded-lg mx-3 mt-4 hover:cursor-pointer active:bg-gray-800 max-sm:w-3/4 text-sm"
          >
            Continue with Facebook
          </button>
        </div>
      </main>
    </section>
  );
};

export default Authentication;
