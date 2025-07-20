import { action, thunk } from 'easy-peasy';
import api from '../config/axios';

const userAccountModel = {
  userId: "",
  setUserId: action((state, payload) => {
    state.userId = payload;
  }),
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
  userPicture: "",
  setUserPicture: action((state, payload) => {
    state.userPicture = payload;
  }),

  // Fech protected data
  fetchProtectedData: thunk(async (actions, accessToken) => {
    try {
      const response = await api.get("/api/check-page", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.status === 200) {
        actions.setUserId(response.data.user.id);
        actions.setUserFirstName(response.data.user.firstName);
        actions.setUserLastName(response.data.user.lastName);
        actions.setUserEmail(response.data.user.email);
        actions.setUserPicture(response.data.user.profileImage || "");
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error fetching protected data:", error.message);
      return false;
    }
  }),
};

export default userAccountModel;