import { useStoreActions, useStoreState } from "easy-peasy";

const useUserAccountStore = () => {
    const {
        userId,
        userFirstName,
        userLastName,
        userEmail,
        userPicture,
    } = useStoreState((state) => state.user)

    const {
      setUserFirstName,
      setUserLastName,
      setUserEmail,
      setUserPicture,
      fetchProtectedData,
    } = useStoreActions((action) => action.user);

    return {
      userId,
      userFirstName,
      userLastName,
      userEmail,
      userPicture,
      setUserFirstName,
      setUserLastName,
      setUserEmail,
      setUserPicture,
      fetchProtectedData,
    };
}

export default useUserAccountStore;