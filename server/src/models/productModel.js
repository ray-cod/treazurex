const pool = require("../config/db");

const productModel = {
  // Create a new product
  createProduct: async ({
    name,
    description,
    price,
    stock,
    image_url,
    is_active = true,
  }) => {
    const result = await pool.query(
      `
      INSERT INTO products
      (name, description, price, stock, image_url, is_active)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
      `,
      [name, description, price, stock, image_url, is_active]
    );
    return result.rows[0];
  },

  // Get a product by ID
  getProductById: async (id) => {
    const result = await pool.query(`SELECT * FROM products WHERE id = $1`, [
      id,
    ]);
    return result.rows[0];
  },

  // Get all active products
  getAllProducts: async () => {
    const result = await pool.query(
      `SELECT * FROM products WHERE is_active = true ORDER BY created_at DESC`
    );
    return result.rows;
  },

  // Update a product by ID
  updateProduct: async (id, updates) => {
    const fields = [];
    const values = [];
    let index = 1;

    for (const key in updates) {
      fields.push(`${key} = $${index}`);
      values.push(updates[key]);
      index++;
    }

    values.push(id);

    const result = await pool.query(
      `UPDATE products SET ${fields.join(
        ", "
      )}, updated_at = CURRENT_TIMESTAMP WHERE id = $${index} RETURNING *`,
      values
    );
    return result.rows[0];
  },

  // Soft delete a product (deactivate)
  deactivateProduct: async (id) => {
    const result = await pool.query(
      `UPDATE products SET is_active = false, updated_at = CURRENT_TIMESTAMP WHERE id = $1 RETURNING *`,
      [id]
    );
    return result.rows[0];
  },

  // Hard delete a product
  deleteProduct: async (id) => {
    const result = await pool.query(
      `DELETE FROM products WHERE id = $1 RETURNING *`,
      [id]
    );
    return result.rows[0];
  },
};

module.exports = productModel;
