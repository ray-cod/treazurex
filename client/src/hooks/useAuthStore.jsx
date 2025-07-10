import { useStoreActions, useStoreState } from "easy-peasy";

const useAuthStore = () => {
    const {
      userFirstName,
      userLastName,
      userPhone,
      userEmail,
      userPassword,
      userGender,
      rememberMe,
      setRememberMe,
    } = useStoreState((state) => state.auth);

    const {
      setUserFirstName,
      setUserLastName,
      setUserPhone,
      setUserEmail,
      setUserPassword,
      setUserGender,
      handleRegister,
      handleLogin,
    } = useStoreActions((actions) => actions.auth);
      

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
    rememberMe,
    setRememberMe,
    handleRegister,
    handleLogin,
  };
};

export default useAuthStore;
