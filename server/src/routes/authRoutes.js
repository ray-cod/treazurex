const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authVerification = require("../middlewares/authVerification");
const passport = require('passport')

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/refresh-token", authController.refreshToken);


// Google OAuth login
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { session: false, failureRedirect: "/auth/login" }),
  authController.googleLogin
);


// Facebook login route (initiates OAuth)
router.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);


router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: "/auth/login",
    session: false,
  }),
  authController.facebookLogin,
);


// Example of protected route:
router.get("/check-page", authVerification, async (req, res) => {
  res.json({
    message: `Welcome to Treazurex`,
    user: req.user,
  });
});

module.exports = router;
