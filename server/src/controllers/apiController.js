import { getAllProducts } from "../models/productModel";


const apiController = {
    // Products API requests
    // Get all active products
    getAllProducts: async (req, res) => {
        try {
            const products = await getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            console.error("Error fetching products:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    },
}

module.export = apiController;