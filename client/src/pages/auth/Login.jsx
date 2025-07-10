import { Link } from 'react-router-dom';
import useAuthStore from '../../hooks/useAuthStore';

const Login = () => {
  const {
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    rememberMe,
    setRememberMe,
    handleLogin,
  } = useAuthStore();

  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    if (rememberedEmail) {
      setUserEmail(rememberedEmail);
      setRememberMe(true);
    }
  }, []);  

  return (
    <section className="login">
      <form className="left-side" onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={userEmail}
          placeholder="Enter your email"
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={userPassword}
          placeholder="Enter your password"
          onChange={(e) => setUserPassword(e.target.value)}
          required
        />

        <div className="remember-me">
          <p>Remember me</p>
          <label htmlFor="switch">
            <input 
              type="checkbox" 
              name="switch" 
              id="switch" 
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.value)}
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