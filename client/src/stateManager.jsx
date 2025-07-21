import { createStore } from "easy-peasy";
import authModel from "./models/authModel";
import userAccountModel from "./models/userAccountModel";
import apiModel from "./models/apiModel";

const store = createStore({
  auth: authModel,
  user: userAccountModel,
  api: apiModel,
});

export default store;
