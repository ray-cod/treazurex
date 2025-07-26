import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../hooks/useAuthStore";
import { useState } from "react";
import { validateSignin } from "../../config/inputValidation";
import { MdShoppingBasket } from "react-icons/md";


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
          className="bg-[#1C2126] stroke-[#3B4554] py-2 px-4 rounded-lg w-3/4 text-sm"
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
          className="bg-[#1C2126] stroke-[#3B4554] py-2 px-4 rounded-lg w-3/4 text-sm"
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
          className="bg-[#1C2126] stroke-[#3B4554] py-2 px-4 rounded-lg w-3/4 text-sm"
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
          className="bg-[#1C2126] stroke-[#3B4554] py-2 px-4 rounded-lg w-3/4 text-sm"
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
          className="bg-[#1C2126] stroke-[#3B4554] py-2 px-4 rounded-lg w-3/4 text-sm"
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
          className="text-sm mt-4 bg-blue-500 w-3/4 rounded-lg p-2 hover:cursor-pointer active:bg-blue-700 hover:bg-blue-600"
        >
          Register
        </button>
      </form>

      <div className="hidden md:block w-full relative overflow-hidden mt-4">
        {/* Glass card */}
        <div className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col justify-center items-center text-center p-10 shadow-xl w-full h-full">
          <div className="border rounded-full p-5 mb-4 bg-linear-30 from-blue-600 to-transparent">
            <MdShoppingBasket className="text-6xl" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-2">
            Elevate Your Style
          </h3>
          <p className="text-gray-300 text-sm">
            Join the best shopping experience for curated fashion and lifestyle
            products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
