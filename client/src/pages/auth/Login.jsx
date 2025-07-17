import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../../hooks/useAuthStore';
import { useEffect, useState } from 'react';
import { validateLogin } from '../../config/inputValidation';
import { Switch } from 'antd';

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    // rememberMe,
    setRememberMe,
    handleLogin,
  } = useAuthStore();

  const[ errors, setErrors ] = useState({
    email: false,
    password: false,
  });

  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setRememberMe(true);
    }
  }, []);  

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    const errorResponse = await handleLogin(e);
    if(!validateLogin(errorResponse, setErrors)) return;
    navigate("/");
  };

  return (
    <section className="login flex justify-between">
      <form
        className="left-side flex flex-col justify-start items-start w-[100%] max-md:items-center"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email" className="mt-4 mb-1 w-3/4">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="Enter your email"
          className="bg-[#1C2126] stroke-[#3B4554] py-2 px-4 rounded-lg w-3/4 text-sm"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && (
          <p className="text-red-400 text-[14px]">Invalid email...</p>
        )}

        <label htmlFor="password" className="mt-4 mb-1 w-3/4">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          placeholder="Enter your password"
          className="bg-[#1C2126] stroke-[#3B4554] py-2 px-4 rounded-lg w-3/4 text-sm"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errors.password && (
          <p className="text-red-400 text-[14px]">Invalid password...</p>
        )}

        <div className="remember-me mt-4 flex justify-between w-3/4">
          <p>Remember me</p>
          <Switch onChange={(e) => setRememberMe(e.target.value)} />
        </div>

        <Link
          to="/auth/forgot-password"
          className="mt-4 text-[#9CA8BA] text-[14px] w-3/4"
        >
          Forgot Password?
        </Link>
        <button
          type="submit"
          className="text-sm mt-4 bg-blue-700 w-3/4 rounded-lg p-2 hover:cursor-pointer active:bg-blue-800"
        >
          Login
        </button>
      </form>

      <div className="right-side hidden md:block w-[100%] border"></div>
    </section>
  );
}

export default Login