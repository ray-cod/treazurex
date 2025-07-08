import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className="login">
      <form className="left-side">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          required
        />

        <div className="remember-me">
          <p>Remember me</p>
          <label htmlFor="switch">
            <input type="checkbox" name="switch" id="switch" />
            <span className="slider round"></span>
          </label>
        </div>

        <Link to="forgot-password">Forgot Password?</Link>
        <button type="submit">Login</button>
      </form>

      <div className="right-side"></div>
    </section>
  );
}

export default Login