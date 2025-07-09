import { action, thunk, computed } from 'easy-peasy';
import api from '../config/axios';

const registerModel = {
  userFirstName: '',
  setUserFirstName: action((state, payload) => {
    state.userFirstName = payload;
  }),
  userLastName: '',
  setUserLastName: action((state, payload) => {
    state.userLastName = payload;
  }),
  userPhone: '',
  setUserPhone: action((state, payload) => {
    state.userPhone = payload;
  }),
  userEmail: '',
  setUserEmail: action((state, payload) => {
    state.userEmail = payload;
  }),
  userPassword: '',
  setUserPassword: action((state, payload) => {
    state.userPassword = payload;
  }),
  userGender: 'male',
  setUserGender: action((state, payload) => {
    state.userGender = payload;
  }),
};

export default registerModel;