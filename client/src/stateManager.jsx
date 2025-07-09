import { createStore } from 'easy-peasy';
import registerModel from './models/registerModel';

export default createStore({
  register: registerModel,
});
