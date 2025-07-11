const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const { registerSchema, loginSchema } = require("../validators/userValidator");
const { generateToken, generateRefreshToken, verifyRefreshToken } = require("../config/token");

const authController = {
  // Register a new user
  register: async (req, res) => {
    try {
      const { error, value } = registerSchema.validate(req.body, {
        abortEarly: false,
      });

      if (error) {
        return res.status(400).json({
          status: "fail",
          errors: error.details.map((e) => e.message),
        });
      }

      const existing = await userModel.findByEmail(value.email);
      if (existing) {
        return res.status(409).json({ message: "Email already in use." });
      }

      const hashedPassword = await bcrypt.hash(value.password, 10);

      const user = await userModel.createUser({
        ...value,
        password: hashedPassword,
      });

      return res
        .status(201)
        .json({ message: "User registered successfully", user });
    } catch (err) {
      console.error("Register error:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  // Login user
  login: async (req, res) => {
    try {
      const { error, value } = loginSchema.validate(req.body);

      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }

      const user = await userModel.findByEmail(value.email);
      if (!user) {
        return res.status(401).json({ message: "Invalid email" });
      }

      const match = await userModel.comparePassword(
        value.password,
        user.password
      );
      if (!match) {
        return res.status(401).json({ message: "Invalid password" });
      }

      // Create JWT Token
      const token = generateToken(user);
      const refreshToken = generateRefreshToken(user);

      // Set refresh token in HTTP-only cookie
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // true in production
        sameSite: "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      return res.status(200).json({
        message: "Login successful",
        accessToken: token,
        user: {
          id: user.id,
          email: user.email,
          firstName: user.first_name,
          lastName: user.last_name,
          role: user.role,
        },
      });
    } catch (err) {
      console.error("Login error:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  // Refresh token
  refreshToken: async (req, res) => {
    const { refreshToken } = req.cookies;

    if (!refreshToken)
      return res.status(401).json({ message: "No refresh token provided" });

    try {
      const decoded = verifyRefreshToken(refreshToken);
      const user = await userModel.findById(decoded.id);

      if (!user) return res.status(401).json({ message: "User not found" });

      const newAccessToken = generateToken(user);
      return res.json({ accessToken: newAccessToken });
    } catch (err) {
      return res
        .status(403)
        .json({ message: "Invalid or expired refresh token" });
    }
  },

  //Set Tokens with google
  googleLogin: async (req, res) => {
    // Set tokens
    const token = generateToken(req.user);
    const refreshToken = generateRefreshToken(req.user);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // Redirect or respond with access token
    res.redirect(`${process.env.CLIENT_URL}/social-login?token=${token}`);
  },

  // Set Token with facebook
  facebookLogin: (req, res) => {
    // Successful login: generate tokens and redirect or send token
    const token = generateToken(req.user);
    const refreshToken = generateRefreshToken(req.user);

    // Set refresh token cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // Redirect frontend with token (adjust URL and method as you want)
    res.redirect(`${process.env.CLIENT_URL}/social-login?token=${token}`);
  },
};

module.exports = authController;
