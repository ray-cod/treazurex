import { useStoreActions, useStoreState } from "easy-peasy";

const useAuthStore = () => {
    const {
      firstName,
      lastName,
      phone,
      email,
      password,
      gender,
      rememberMe,
      accessToken,
    } = useStoreState((state) => state.auth);

    const {
      setFirstName,
      setLastName,
      setPhone,
      setEmail,
      setPassword,
      setGender,
      setRememberMe,
      setAccessToken,
      handleRegister,
      handleLogin,
    } = useStoreActions((actions) => actions.auth);
      

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phone,
    setPhone,
    email,
    setEmail,
    password,
    setPassword,
    gender,
    setGender,
    rememberMe,
    setRememberMe,
    accessToken,
    setAccessToken,
    handleRegister,
    handleLogin,
  };
};

export default useAuthStore;
