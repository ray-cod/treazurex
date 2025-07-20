const pool = require("../config/db");
const bcrypt = require("bcrypt");

const userModel = {
  // Create a new user (password must already be hashed before calling this)
  createUser: async ({
    firstName,
    lastName,
    email,
    password,
    phone,
    gender,
    profileImage = null,
    is_verified = false,
  }) => {
    const result = await pool.query(
      `
      INSERT INTO users 
      (first_name, last_name, email, password, phone, gender, profile_image, is_verified)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING id, first_name, last_name, email, role, is_verified, created_at
      `,
      [
        firstName,
        lastName,
        email,
        password,
        phone,
        gender,
        profileImage,
        is_verified,
      ]
    );
    return result.rows[0];
  },

  // Get user by email
  findByEmail: async (email) => {
    const result = await pool.query(`SELECT * FROM users WHERE email = $1`, [
      email,
    ]);
    return result.rows[0];
  },

  // Get user by ID
  findById: async (id) => {
    const result = await pool.query(
      `SELECT id, first_name, last_name, email, role, phone, gender, profile_image, is_verified, created_at 
       FROM users WHERE id = $1`,
      [id]
    );
    return result.rows[0];
  },

  // Compare password with hashed version
  comparePassword: async (inputPassword, hashedPassword) => {
    return await bcrypt.compare(inputPassword, hashedPassword);
  },

  // Update user details
  updateUser: async (id, updates) => {
    const fields = [];
    const values = [];
    let index = 1;

    for (const key in updates) {
      fields.push(`${key} = $${index}`);
      values.push(updates[key]);
      index++;
    }

    values.push(id); // Last param is user id

    const result = await pool.query(
      `UPDATE users SET ${fields.join(
        ", "
      )}, updated_at = CURRENT_TIMESTAMP WHERE id = $${index} RETURNING *`,
      values
    );
    return result.rows[0];
  },

  // Delete user by ID
  deleteUser: async (id) => {
    const result = await pool.query(
      `DELETE FROM users WHERE id = $1 RETURNING *`,
      [id]
    );
    return result.rows[0];
  },
};

module.exports = userModel;
