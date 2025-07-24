const productModel = require('../models/productModel');

const apiController = {
    // Products API requests
    // Get all active products
    getAllProducts: async (req, res) => {
        try {
            const products = await productModel.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            console.error("Error fetching products:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    },

    // Get a single product by ID
    getProductById: async (req, res) => {
        const productId = req.params.id;
        try {
            const product = await productModel.getProductById(productId);
            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }
            res.status(200).json(product);
        } catch (error) {
            console.error("Error fetching product:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}

module.exports = apiController;