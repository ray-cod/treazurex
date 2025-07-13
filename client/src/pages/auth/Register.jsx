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
    <section className="register flex justify-between">
      <form
        className="left-side flex flex-col justify-start items-start w-[100%] max-md:items-center"
        onSubmit={handleSubmit}
      >
        <label htmlFor="firstName" className="mt-4 mb-1 w-3/4">
          First name
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          placeholder="Enter your first name"
          className="bg-[#1C2126] stroke-[#3B4554] p-1 px-2 rounded-lg w-3/4"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        {errors.firstName && (
          <p className="text-red-400 text-[14px]">Too short.</p>
        )}

        <label htmlFor="lastName" className="mt-4 mb-1 w-3/4">
          Last name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          placeholder="Enter your last name"
          className="bg-[#1C2126] stroke-[#3B4554] p-1 px-2 rounded-lg w-3/4"
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        {errors.lastName && (
          <p className="text-red-400 text-[14px]">Too short.</p>
        )}

        <label htmlFor="phone" className="mt-4 mb-1 w-3/4">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={phone}
          placeholder="Enter your phone number"
          className="bg-[#1C2126] stroke-[#3B4554] p-1 px-2 rounded-lg w-3/4"
          onChange={(e) => setPhone(e.target.value)}
        />

        <label htmlFor="email" className="mt-4 mb-1 w-3/4">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="Enter your email"
          className="bg-[#1C2126] stroke-[#3B4554] p-1 px-2 rounded-lg w-3/4"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && (
          <p className="text-red-400 text-[14px]">Email already exists.</p>
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
          className="bg-[#1C2126] stroke-[#3B4554] p-1 px-2 rounded-lg w-3/4"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errors.password && (
          <p className="text-red-400 text-[14px]">
            Include a capital letter and number.
          </p>
        )}

        <div className="gender mt-4 flex gap-6 w-3/4">
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

        <p className="mt-4 text-[14px] w-3/4">
          <span className="text-[#9CA8BA]">Already have an account?</span>{" "}
          <Link to="/auth/login">Login</Link>
        </p>
        <button
          type="submit"
          className="mt-4 bg-blue-700 w-3/4 rounded-lg p-1 hover:cursor-pointer active:bg-blue-800"
        >
          Register
        </button>
      </form>

      <div className="right-side hidden md:block w-[100%] border"></div>
    </section>
  );
};

export default Register;
