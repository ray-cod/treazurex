const pool = require("../config/db");

const reviewModel = {
  // Create a new review
  createReview: async (userId, productId, rating, comment) => {
    const result = await pool.query(
      `
      INSERT INTO reviews (user_id, product_id, rating, comment)
      VALUES ($1, $2, $3, $4)
      RETURNING *
      `,
      [userId, productId, rating, comment]
    );
    return result.rows[0];
  },

  // Get all reviews for a specific product
  getReviewsByProductId: async (productId) => {
    const result = await pool.query(
      `
      SELECT r.*, u.username
      FROM reviews r
      LEFT JOIN users u ON r.user_id = u.id
      WHERE r.product_id = $1
      ORDER BY r.created_at DESC
      `,
      [productId]
    );
    return result.rows;
  },

  // Get a specific user's review for a product
  getUserReviewForProduct: async (userId, productId) => {
    const result = await pool.query(
      `
      SELECT * FROM reviews
      WHERE user_id = $1 AND product_id = $2
      `,
      [userId, productId]
    );
    return result.rows[0];
  },

  // Update a review
  updateReview: async (userId, productId, rating, comment) => {
    const result = await pool.query(
      `
      UPDATE reviews
      SET rating = $3,
          comment = $4,
          created_at = CURRENT_TIMESTAMP
      WHERE user_id = $1 AND product_id = $2
      RETURNING *
      `,
      [userId, productId, rating, comment]
    );
    return result.rows[0];
  },

  // Delete a review
  deleteReview: async (userId, productId) => {
    const result = await pool.query(
      `
      DELETE FROM reviews
      WHERE user_id = $1 AND product_id = $2
      RETURNING *
      `,
      [userId, productId]
    );
    return result.rows[0];
  },
};

module.exports = reviewModel;
