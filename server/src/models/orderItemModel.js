const pool = require("../config/db");

const orderItemModel = {
  // Add an item to an order
  createOrderItem: async ({ orderId, productId, quantity, unitPrice }) => {
    const result = await pool.query(
      `
      INSERT INTO order_items (order_id, product_id, quantity, unit_price)
      VALUES ($1, $2, $3, $4)
      RETURNING *
      `,
      [orderId, productId, quantity, unitPrice]
    );
    return result.rows[0];
  },

  // Get all items for a given order
  getOrderItemsByOrderId: async (orderId) => {
    const result = await pool.query(
      `
      SELECT oi.*, p.name AS product_name
      FROM order_items oi
      JOIN products p ON oi.product_id = p.id
      WHERE oi.order_id = $1
      `,
      [orderId]
    );
    return result.rows;
  },

  // Update an order item's quantity or price
  updateOrderItem: async (id, { quantity, unitPrice }) => {
    const result = await pool.query(
      `
      UPDATE order_items
      SET quantity = $1, unit_price = $2
      WHERE id = $3
      RETURNING *
      `,
      [quantity, unitPrice, id]
    );
    return result.rows[0];
  },

  // Delete an item from an order
  deleteOrderItem: async (id) => {
    const result = await pool.query(
      `
      DELETE FROM order_items
      WHERE id = $1
      RETURNING *
      `,
      [id]
    );
    return result.rows[0];
  },
};

module.exports = orderItemModel;
