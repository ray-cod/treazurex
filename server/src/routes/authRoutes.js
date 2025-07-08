const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authVerification = require("../middlewares/authVerification");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/refresh-token", authController.refreshToken);

// Example of protected route:
router.get("/profile", authVerification, async (req, res) => {
  res.json({ message: `Welcome, user #${req.user.id}` });
});

module.exports = router;
