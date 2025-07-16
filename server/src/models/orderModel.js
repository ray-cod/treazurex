const pool = require("../config/db");

const orderModel = {
  // Create a new order
  createOrder: async ({ userId, totalAmount, status = "pending" }) => {
    const result = await pool.query(
      `
      INSERT INTO orders (user_id, total_amount, status)
      VALUES ($1, $2, $3)
      RETURNING *
      `,
      [userId, totalAmount, status]
    );
    return result.rows[0];
  },

  // Get all orders for a user
  getOrdersByUserId: async (userId) => {
    const result = await pool.query(
      `
      SELECT * FROM orders
      WHERE user_id = $1
      ORDER BY placed_at DESC
      `,
      [userId]
    );
    return result.rows;
  },

  // Get order by ID
  getOrderById: async (orderId) => {
    const result = await pool.query(
      `
      SELECT * FROM orders
      WHERE id = $1
      `,
      [orderId]
    );
    return result.rows[0];
  },

  // Update order status
  updateOrderStatus: async (orderId, status) => {
    const result = await pool.query(
      `
      UPDATE orders
      SET status = $1
      WHERE id = $2
      RETURNING *
      `,
      [status, orderId]
    );
    return result.rows[0];
  },

  // Delete order
  deleteOrder: async (orderId) => {
    const result = await pool.query(
      `
      DELETE FROM orders
      WHERE id = $1
      RETURNING *
      `,
      [orderId]
    );
    return result.rows[0];
  },
};

module.exports = orderModel;
