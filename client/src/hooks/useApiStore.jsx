import { useStoreActions } from "easy-peasy";

const useApiStore = () => {
  const { getAllProducts, getProductById } = useStoreActions(
    (actions) => actions.api
  );

  return {
    getAllProducts,
    getProductById,
  };
};

export default useApiStore;
