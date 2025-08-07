const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");


router.get("/product", apiController.getAllProducts);
router.get("/product/:id", apiController.getProductById);

// Test route
router.get("/test", (req, res) => {
  res.send("Hello API");
});

module.exports = router;