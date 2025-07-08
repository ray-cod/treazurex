import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="register">
      <form className="left-side">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter your first name"
          required
        />

        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Enter your last name"
          required
        />

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

        <div className="gender">
          <label htmlFor="male">
            <input type="radio" name="gender" id="male" value="male" defaultChecked />{" "}
            Male
          </label>
          <label htmlFor="female">
            <input type="radio" name="gender" id="female" value="female" />{" "}
            Female
          </label>
        </div>

        <p>
          Already have an account? <Link to="/auth/login">Login</Link>
        </p>
        <button type="submit">Register</button>
      </form>

      <div className="right-side"></div>
    </section>
  );
};

export default Register;
