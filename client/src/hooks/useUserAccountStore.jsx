import { useStoreActions, useStoreState } from "easy-peasy";

const useUserAccountStore = () => {
    const {
        userFirstName,
        userLastName,
        userEmail,
    } = useStoreState((state) => state.user)

    const {
        setUserFirstName,
        setUserLastName,
        setUserEmail,
    } = useStoreActions((action) => action.user)

    return {
        userFirstName,
        userLastName,
        userEmail,
        setUserFirstName,
        setUserLastName,
        setUserEmail,
    }
}

export default useUserAccountStore;