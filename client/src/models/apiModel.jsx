import { thunk } from "easy-peasy";
import api from "../config/axios";

const apiModel = {
  getAllProducts: thunk(async () => {
    try {
      const response = await api.get("/api/store/product");
      return response.data;
    } catch (error) {
      console.error("Failed to fetch products:", error);
      throw error;
    }
  }),
};

export default apiModel;
