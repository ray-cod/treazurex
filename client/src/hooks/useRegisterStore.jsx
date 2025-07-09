// hooks/useRegisterStore.js
import { useStoreActions, useStoreState } from "easy-peasy";

const useRegisterStore = () => {
    const {
      userFirstName,
      userLastName,
      userPhone,
      userEmail,
      userPassword,
      userGender,
    } = useStoreState((state) => state.register);

    const {
      setUserFirstName,
      setUserLastName,
      setUserPhone,
      setUserEmail,
      setUserPassword,
      setUserGender,
    } = useStoreActions((actions) => actions.register);
      

  return {
    userFirstName,
    setUserFirstName,
    userLastName,
    setUserLastName,
    userPhone,
    setUserPhone,
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    userGender,
    setUserGender,
  };
};

export default useRegisterStore;
