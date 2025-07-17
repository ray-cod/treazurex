import { useStoreActions, useStoreState } from "easy-peasy";

const useUserAccountStore = () => {
    const {
        userId,
        userFirstName,
        userLastName,
        userEmail,
    } = useStoreState((state) => state.user)

    const {
      setUserFirstName,
      setUserLastName,
      setUserEmail,
      fetchProtectedData,
    } = useStoreActions((action) => action.user);

    return {
      userId,
      userFirstName,
      userLastName,
      userEmail,
      setUserFirstName,
      setUserLastName,
      setUserEmail,
      fetchProtectedData,
    };
}

export default useUserAccountStore;