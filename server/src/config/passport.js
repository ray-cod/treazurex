const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const userModel = require("../models/userModel");
const { generateToken, generateRefreshToken } = require("./token");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const { email, given_name, family_name, email_verified } =
          profile._json;

        const existingUser = await userModel.findByEmail(email);

        if (existingUser) {
          return done(null, existingUser);
        }

        // Register new user from Google
        const newUser = await userModel.createUser({
          email,
          firstName: given_name || "Google",
          lastName: family_name || "User",
          password: "",
          gender: "other",
          phone: "",
          is_verified: email_verified,
        });

        return done(null, newUser);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);
