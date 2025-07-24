const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");


router.get("/product", apiController.getAllProducts);
router.get("/product/:id", apiController.getProductById);

module.exports = router;