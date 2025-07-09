import { Link } from "react-router-dom";
import useRegisterStore from "../../hooks/useRegisterStore";
import api from "../../config/axios";

const Register = () => {
  const {
    userFirstName,
    setUserFirstName,
    userLastName,
    setUserLastName,
    userPhone,
    setUserPhone,
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    userGender,
    setUserGender,
  } = useRegisterStore();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/api/register", {
        firstName: userFirstName,
        lastName: userLastName,
        email: userEmail,
        password: userPassword,
        phone: userPhone,
        gender: userGender,
      });
      console.log(response.data);
    } catch (error) {
      console.log("Error registering new user: ", error.message);
    }
  };

  return (
    <section className="register">
      <form className="left-side" onSubmit={handleRegister}>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={userFirstName}
          placeholder="Enter your first name"
          onChange={(e) => setUserFirstName(e.target.value)}
          required
        />

        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={userLastName}
          placeholder="Enter your last name"
          onChange={(e) => setUserLastName(e.target.value)}
          required
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={userPhone}
          placeholder="Enter your phone number"
          onChange={(e) => setUserPhone(e.target.value)}
          required
        />

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

        <div className="gender">
          <label htmlFor="male">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={(e) =>
                e.target.checked && setUserGender(e.target.value)
              }
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
              onChange={(e) =>
                e.target.checked && setUserGender(e.target.value)
              }
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
