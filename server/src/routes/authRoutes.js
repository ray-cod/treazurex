const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authVerification = require("../middlewares/authVerification");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/refresh-token", authController.refreshToken);

// Example of protected route:
router.get("/check-page", authVerification, async (req, res) => {
  res.json({
    message: `Welcome to Treazurex`,
    user: req.user,
  });
});

module.exports = router;
