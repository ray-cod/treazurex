const pool = require("../config/db");

const addressModel = {
  // Create a new address
  createAddress: async ({
    userId,
    fullName,
    streetAddress,
    city,
    state,
    postalCode,
    country,
    phone,
    addressType = "shipping",
  }) => {
    const result = await pool.query(
      `
      INSERT INTO addresses (
        user_id,
        full_name,
        street_address,
        city,
        state,
        postal_code,
        country,
        phone,
        address_type
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *
      `,
      [
        userId,
        fullName,
        streetAddress,
        city,
        state,
        postalCode,
        country,
        phone,
        addressType,
      ]
    );
    return result.rows[0];
  },

  // Get all addresses for a user
  getAddressesByUserId: async (userId) => {
    const result = await pool.query(
      `SELECT * FROM addresses WHERE user_id = $1 ORDER BY created_at DESC`,
      [userId]
    );
    return result.rows;
  },

  // Get a specific address
  getAddressById: async (id) => {
    const result = await pool.query(`SELECT * FROM addresses WHERE id = $1`, [
      id,
    ]);
    return result.rows[0];
  },

  // Update an address
  updateAddress: async (
    id,
    {
      fullName,
      streetAddress,
      city,
      state,
      postalCode,
      country,
      phone,
      addressType,
    }
  ) => {
    const result = await pool.query(
      `
      UPDATE addresses SET
        full_name = $1,
        street_address = $2,
        city = $3,
        state = $4,
        postal_code = $5,
        country = $6,
        phone = $7,
        address_type = $8
      WHERE id = $9
      RETURNING *
      `,
      [
        fullName,
        streetAddress,
        city,
        state,
        postalCode,
        country,
        phone,
        addressType,
        id,
      ]
    );
    return result.rows[0];
  },

  // Delete an address
  deleteAddress: async (id) => {
    const result = await pool.query(
      `DELETE FROM addresses WHERE id = $1 RETURNING *`,
      [id]
    );
    return result.rows[0];
  },
};

module.exports = addressModel;
