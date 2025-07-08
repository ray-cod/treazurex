const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const { registerSchema, loginSchema } = require("../validators/userValidator");
const { generateToken } = require("../config/token");

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
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const match = await userModel.comparePassword(
        value.password,
        user.password
      );
      if (!match) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Create JWT Token
      const token = generateToken(user)

      return res.status(200).json({
        message: "Login successful",
        token,
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
};

module.exports = userController;
