const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
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
        const { email, given_name, family_name, picture, email_verified } =
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
          profileImage: picture || null,
          is_verified: email_verified,
        });

        return done(null, newUser);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);


// Facebook OAuth strategy
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: "/api/auth/facebook/callback",
      profileFields: ["id", "emails", "name", "gender"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Facebook email handling
        const email = profile.emails && profile.emails[0] ? profile.emails[0].value : null;

        if (!email) {
          return done(new Error("Facebook account has no email associated"), null);
        }

        // Find existing user by email
        const existingUser = await userModel.findByEmail(email);

        if (existingUser) {
          return done(null, existingUser);
        }

        // Register new user from Facebook profile
        const newUser = await userModel.createUser({
          email: email,
          firstName: profile.name.givenName || "Facebook",
          lastName: profile.name.familyName || "User",
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

