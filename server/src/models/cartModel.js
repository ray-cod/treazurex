const pool = require("../config/db");

const cartModel = {
  // Create a cart for a user (only if one doesn't exist)
  createCartForUser: async (userId) => {
    const result = await pool.query(
      `
      INSERT INTO carts (user_id)
      VALUES ($1)
      ON CONFLICT (user_id) DO NOTHING
      RETURNING *
      `,
      [userId]
    );
    return result.rows[0]; // Will be undefined if cart already exists
  },

  // Get a cart by user ID
  getCartByUserId: async (userId) => {
    const result = await pool.query(
      `
      SELECT * FROM carts
      WHERE user_id = $1
      `,
      [userId]
    );
    return result.rows[0];
  },

  // Delete a cart
  deleteCartByUserId: async (userId) => {
    const result = await pool.query(
      `
      DELETE FROM carts
      WHERE user_id = $1
      RETURNING *
      `,
      [userId]
    );
    return result.rows[0];
  },

  // Update cart timestamp (used on modifications)
  updateTimestamp: async (userId) => {
    const result = await pool.query(
      `
      UPDATE carts
      SET updated_at = CURRENT_TIMESTAMP
      WHERE user_id = $1
      RETURNING *
      `,
      [userId]
    );
    return result.rows[0];
  },
};

module.exports = cartModel;
