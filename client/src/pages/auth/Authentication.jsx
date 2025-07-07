import { Outlet } from "react-router-dom";
import AuthHeader from "../../components/headers/AuthHeader";

const Authentication = () => {
  return (
    <>
      <AuthHeader />
      <main className="auth-main">
        <h1>Welcome to Treazurex</h1>
        <Outlet />
        <p>Or continue with</p>
        <div className="auth-socials">
          <button>Continue with Google</button>
          <button>Continue with Facebook</button>
        </div>
      </main>
    </>
  );
};

export default Authentication;
