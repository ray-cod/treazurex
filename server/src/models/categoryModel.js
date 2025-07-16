const pool = require("../config/db");

const categoryModel = {
  // Create a new category
  createCategory: async ({ name, description }) => {
    const result = await pool.query(
      `
      INSERT INTO categories (name, description)
      VALUES ($1, $2)
      RETURNING *
      `,
      [name, description]
    );
    return result.rows[0];
  },

  // Get a category by ID
  getCategoryById: async (id) => {
    const result = await pool.query(`SELECT * FROM categories WHERE id = $1`, [
      id,
    ]);
    return result.rows[0];
  },

  // Get all categories
  getAllCategories: async () => {
    const result = await pool.query(
      `SELECT * FROM categories ORDER BY name ASC`
    );
    return result.rows;
  },

  // Update a category
  updateCategory: async (id, updates) => {
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
      `UPDATE categories SET ${fields.join(
        ", "
      )}, updated_at = CURRENT_TIMESTAMP WHERE id = $${index} RETURNING *`,
      values
    );
    return result.rows[0];
  },

  // Delete a category
  deleteCategory: async (id) => {
    const result = await pool.query(
      `DELETE FROM categories WHERE id = $1 RETURNING *`,
      [id]
    );
    return result.rows[0];
  },
};

module.exports = categoryModel;
