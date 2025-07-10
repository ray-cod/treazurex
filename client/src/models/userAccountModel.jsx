import { action, thunk, computed } from 'easy-peasy';
import api from '../config/axios';

const userAccountModel = {
  userFirstName: "",
  setUserFirstName: action((state, payload) => {
    state.userFirstName = payload;
  }),
  userLastName: "",
  setUserLastName: action((state, payload) => {
    state.userLastName = payload;
  }),
  userEmail: "",
  setUserEmail: action((state, payload) => {
    state.userEmail = payload;
  }),
};

export default userAccountModel;