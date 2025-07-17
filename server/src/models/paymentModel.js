const pool = require("../config/db");

const paymentModel = {
  // Create a new payment record
  createPayment: async ({
    orderId,
    amount,
    paymentMethod,
    status = "pending",
    transactionId,
  }) => {
    const result = await pool.query(
      `
      INSERT INTO payments (
        order_id,
        amount,
        payment_method,
        status,
        transaction_id
      )
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
      `,
      [orderId, amount, paymentMethod, status, transactionId]
    );
    return result.rows[0];
  },

  // Get payment by ID
  getPaymentById: async (id) => {
    const result = await pool.query(`SELECT * FROM payments WHERE id = $1`, [
      id,
    ]);
    return result.rows[0];
  },

  // Get payments by order ID
  getPaymentsByOrderId: async (orderId) => {
    const result = await pool.query(
      `SELECT * FROM payments WHERE order_id = $1`,
      [orderId]
    );
    return result.rows;
  },

  // Update payment status
  updatePaymentStatus: async (id, newStatus) => {
    const result = await pool.query(
      `
      UPDATE payments
      SET status = $1
      WHERE id = $2
      RETURNING *
      `,
      [newStatus, id]
    );
    return result.rows[0];
  },

  // Find by transaction ID
  getPaymentByTransactionId: async (transactionId) => {
    const result = await pool.query(
      `SELECT * FROM payments WHERE transaction_id = $1`,
      [transactionId]
    );
    return result.rows[0];
  },
};

module.exports = paymentModel;
