import { useStoreActions } from "easy-peasy";

const useApiStore = () => {
  const { getAllProducts } = useStoreActions((actions) => actions.api);

  return {
    getAllProducts,
  };
};

export default useApiStore;
