const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");


router.get("/product", apiController.getAllProducts);

module.exports = router;