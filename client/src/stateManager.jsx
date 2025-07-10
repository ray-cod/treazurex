import { createStore } from 'easy-peasy';
import authModel from './models/authModel';
import userAccountModel from './models/userAccountModel';

export default createStore({
  auth: authModel,
  user: userAccountModel,
});
