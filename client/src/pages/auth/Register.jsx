import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../hooks/useAuthStore";
import { useState } from "react";
import { validateSignin } from "../../config/inputValidation";

const Register = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phone,
    setPhone,
    email,
    setEmail,
    password,
    setPassword,
    setGender,
    handleRegister,
  } = useAuthStore();

  const [ errors, setErrors ] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false
  });

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    const errorResponse = await handleRegister(e);
    if (!validateSignin(errorResponse, setErrors)) return;
    navigate("/auth/login");
  };

  return (
    <section className="register">
      <form className="left-side" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          placeholder="Enter your first name"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        {errors.firstName && <p>Too short.</p>}

        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          placeholder="Enter your last name"
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        {errors.lastName && <p>Too short.</p>}

        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={phone}
          placeholder="Enter your phone number"
          onChange={(e) => setPhone(e.target.value)}
        />

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
        {errors.email && <p>Email already exists.</p>}

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
        {errors.password && <p>Include a capital letter and number.</p>}

        <div className="gender">
          <label htmlFor="male">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={(e) => e.target.checked && setGender(e.target.value)}
              defaultChecked
            />{" "}
            Male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={(e) => e.target.checked && setGender(e.target.value)}
            />{" "}
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
