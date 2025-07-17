const pool = require("../config/db");

const cartItemModel = {
  // Add or update item in cart
  addOrUpdateItem: async (cartId, productId, quantity) => {
    const result = await pool.query(
      `
      INSERT INTO cart_items (cart_id, product_id, quantity)
      VALUES ($1, $2, $3)
      ON CONFLICT (cart_id, product_id)
      DO UPDATE SET quantity = EXCLUDED.quantity, added_at = CURRENT_TIMESTAMP
      RETURNING *
      `,
      [cartId, productId, quantity]
    );
    return result.rows[0];
  },

  // Get all items in a cart
  getItemsByCartId: async (cartId) => {
    const result = await pool.query(
      `
      SELECT ci.*, p.name, p.price, p.image_url
      FROM cart_items ci
      JOIN products p ON ci.product_id = p.id
      WHERE ci.cart_id = $1
      `,
      [cartId]
    );
    return result.rows;
  },

  // Update quantity of an item
  updateItemQuantity: async (cartId, productId, quantity) => {
    const result = await pool.query(
      `
      UPDATE cart_items
      SET quantity = $3, added_at = CURRENT_TIMESTAMP
      WHERE cart_id = $1 AND product_id = $2
      RETURNING *
      `,
      [cartId, productId, quantity]
    );
    return result.rows[0];
  },

  // Remove an item from the cart
  removeItem: async (cartId, productId) => {
    const result = await pool.query(
      `
      DELETE FROM cart_items
      WHERE cart_id = $1 AND product_id = $2
      RETURNING *
      `,
      [cartId, productId]
    );
    return result.rows[0];
  },

  // Clear all items in a cart
  clearCart: async (cartId) => {
    const result = await pool.query(
      `
      DELETE FROM cart_items
      WHERE cart_id = $1
      RETURNING *
      `,
      [cartId]
    );
    return result.rows;
  },
};

module.exports = cartItemModel;
