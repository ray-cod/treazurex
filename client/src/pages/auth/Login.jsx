import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../../hooks/useAuthStore';
import { useEffect, useState } from 'react';
import { validateLogin } from '../../config/inputValidation';

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    rememberMe,
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
    <section className="login">
      <form className="left-side" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <p style={{ color: "red" }}>Invalid email</p>}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errors.password && <p style={{ color: "red" }}>Invalid password</p>}

        <div className="remember-me">
          <p>Remember me</p>
          <label htmlFor="switch">
            <input
              type="checkbox"
              name="switch"
              id="switch"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
        </div>

        <Link to="/auth/forgot-password">Forgot Password?</Link>
        <button type="submit">Login</button>
      </form>

      <div className="right-side"></div>
    </section>
  );
}

export default Login