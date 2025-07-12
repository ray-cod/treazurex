import { action, thunk, computed } from "easy-peasy";
import api from "../config/axios";

const authModel = {
  firstName: "",
  setFirstName: action((state, payload) => {
    state.firstName = payload;
  }),
  lastName: "",
  setLastName: action((state, payload) => {
    state.lastName = payload;
  }),
  phone: "",
  setPhone: action((state, payload) => {
    state.phone = payload;
  }),
  email: "",
  setEmail: action((state, payload) => {
    state.email = payload;
  }),
  password: "",
  setPassword: action((state, payload) => {
    state.password = payload;
  }),
  gender: "male",
  setGender: action((state, payload) => {
    state.gender = payload;
  }),
  rememberMe: false,
  setRememberMe: action((state, payload) => {
    state.rememberMe = payload;
  }),
  accessToken: "",
  setAccessToken: action((state, payload) => {
    state.accessToken = payload;
  }),

  // registration function
  handleRegister: thunk(async (actions, e, helpers) => {
    e.preventDefault();
    const { firstName, lastName, email, password, phone, gender } =
      helpers.getState();

    try {
      const response = await api.post("/api/register", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phone: phone,
        gender: gender,
      });

      actions.setFirstName("");
      actions.setLastName("");
      actions.setEmail("");
      actions.setPassword("");
      actions.setPhone("");
      actions.setGender("male");
      alert("Registration Successful");
    } catch (error) {
      console.log("Error registering new : ", error.message);
      return error.response?.data || { message: error.message };
    }
  }),

  // login function
  handleLogin: thunk(async (actions, e, helpers) => {
    e.preventDefault();
    const { email, password, rememberMe } = helpers.getState();

    try {
      const response = await api.post("/api/login", {
        email: email,
        password: password,
      });

      actions.setAccessToken(response.data.accessToken);

      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
      }

      actions.setEmail("");
      actions.setPassword("");
    } catch (error) {
      console.log("Error logging in: ", error.message);
      return error.response?.data || { message: error.message};
    }
  }),

  // Handle Google login
  handleGoogleLogin: action(() => {
    window.location.href = "http://localhost:3500/api/auth/google";
  }),

  handleFacebookLogin: action(() => {
    window.location.href = "http://localhost:3500/api/auth/facebook";
  }),
};

export default authModel;
