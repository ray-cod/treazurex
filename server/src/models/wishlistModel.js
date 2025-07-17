const pool = require("../config/db");

const wishlistModel = {
  // Add a product to the wishlist
  addToWishlist: async ({ userId, productId }) => {
    const result = await pool.query(
      `
      INSERT INTO wishlists (user_id, product_id)
      VALUES ($1, $2)
      ON CONFLICT (user_id, product_id) DO NOTHING
      RETURNING *
      `,
      [userId, productId]
    );
    return result.rows[0];
  },

  // Get all wishlist items for a user
  getWishlistByUserId: async (userId) => {
    const result = await pool.query(
      `
      SELECT w.*, p.name AS product_name, p.price, p.image_url
      FROM wishlists w
      JOIN products p ON w.product_id = p.id
      WHERE w.user_id = $1
      ORDER BY w.added_at DESC
      `,
      [userId]
    );
    return result.rows;
  },

  // Remove a product from the wishlist
  removeFromWishlist: async ({ userId, productId }) => {
    const result = await pool.query(
      `
      DELETE FROM wishlists
      WHERE user_id = $1 AND product_id = $2
      RETURNING *
      `,
      [userId, productId]
    );
    return result.rows[0];
  },

  // Check if a product is already in the wishlist
  isInWishlist: async ({ userId, productId }) => {
    const result = await pool.query(
      `
      SELECT 1 FROM wishlists
      WHERE user_id = $1 AND product_id = $2
      `,
      [userId, productId]
    );
    return result.rowCount > 0;
  },
};

module.exports = wishlistModel;
