const pool = require("../config/db");

const productCategoryModel = {
  // Link a product to a category
  addProductToCategory: async (productId, categoryId) => {
    const result = await pool.query(
      `
      INSERT INTO product_categories (product_id, category_id)
      VALUES ($1, $2)
      RETURNING *
      `,
      [productId, categoryId]
    );
    return result.rows[0];
  },

  // Remove a product from a category
  removeProductFromCategory: async (productId, categoryId) => {
    const result = await pool.query(
      `
      DELETE FROM product_categories
      WHERE product_id = $1 AND category_id = $2
      RETURNING *
      `,
      [productId, categoryId]
    );
    return result.rows[0];
  },

  // Get all categories for a given product
  getCategoriesForProduct: async (productId) => {
    const result = await pool.query(
      `
      SELECT c.*
      FROM categories c
      JOIN product_categories pc ON pc.category_id = c.id
      WHERE pc.product_id = $1
      `,
      [productId]
    );
    return result.rows;
  },

  // Get all products for a given category
  getProductsForCategory: async (categoryId) => {
    const result = await pool.query(
      `
      SELECT p.*
      FROM products p
      JOIN product_categories pc ON pc.product_id = p.id
      WHERE pc.category_id = $1
      `,
      [categoryId]
    );
    return result.rows;
  },
};

module.exports = productCategoryModel;
