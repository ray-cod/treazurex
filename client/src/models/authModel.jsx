import { action, thunk, computed } from 'easy-peasy';
import api from '../config/axios';

const authModel = {
  userFirstName: "",
  setUserFirstName: action((state, payload) => {
    state.userFirstName = payload;
  }),
  userLastName: "",
  setUserLastName: action((state, payload) => {
    state.userLastName = payload;
  }),
  userPhone: "",
  setUserPhone: action((state, payload) => {
    state.userPhone = payload;
  }),
  userEmail: "",
  setUserEmail: action((state, payload) => {
    state.userEmail = payload;
  }),
  userPassword: "",
  setUserPassword: action((state, payload) => {
    state.userPassword = payload;
  }),
  userGender: "male",
  setUserGender: action((state, payload) => {
    state.userGender = payload;
  }),
  rememberMe: false,
  setRememberMe: action((state, payload) => {
    state.rememberMe = payload;
  }),
  accessToken: '',
  setAccessToken: action((state, payload) => {
    state.accessToken = payload;
  }),

  // registration function
  handleRegister: thunk(async (actions, e, helpers) => {
    e.preventDefault();
    const {
      userFirstName,
      userLastName,
      userEmail,
      userPassword,
      userPhone,
      userGender,
    } = helpers.getState();

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

      actions.setUserFirstName("");
      actions.setUserLastName("");
      actions.setUserEmail("");
      actions.setUserPassword("");
      actions.setUserPhone("");
      actions.setUserGender("male");
      alert("Registration Successful")
    } catch (error) {
      console.log("Error registering new user: ", error.message);
    }
  }),

  // login function
  handleLogin: thunk(async (actions, e, helpers) => {
    e.preventDefault();
    const {
      userEmail,
      userPassword,
      rememberMe,
    } = helpers.getState();

    try {
      const response = await api.post("/api/login", {
        email: userEmail,
        password: userPassword,
      });
      console.log(response.data);
      actions.setAccessToken(response.data.accessToken);

      if (rememberMe) {
        localStorage.setItem("rememberedEmail", userEmail);
      }

      actions.setUserEmail("");
      actions.setUserPassword("");
    } catch (error) {
      console.log("Error logging in: ", error.message);
    }
  }),
};

export default authModel;