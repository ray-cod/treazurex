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
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await userModel.findByEmail(
          profile.emails[0].value
        );

        if (existingUser) {
          return done(null, existingUser);
        }

        // Register new user from Google
        const newUser = await userModel.createUser({
          email: profile.emails[0].value,
          first_name: profile.name.givenName,
          last_name: profile.name.familyName,
          password: "",
          gender: profile.gender || "other",
          phone: "",
          is_verified: true,
        });

        return done(null, newUser);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);
