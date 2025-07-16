const { Pool } = require("pg");
require('dotenv').config()

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Create tables if they do not exist
const createUsersTableQuery = `
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  password TEXT NOT NULL,
  phone VARCHAR(20),
  gender VARCHAR(10) CHECK (gender IN ('male', 'female', 'other')),
  role VARCHAR(20) DEFAULT 'customer',
  is_verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

const createProductsTableQuery = `CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price NUMERIC(10, 2) NOT NULL,
  stock_quantity INTEGER NOT NULL DEFAULT 0,
  image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

const createProductsCategoriesTableQuery = `CREATE TABLE IF NOT EXISTS product_categories (
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (product_id, category_id)
);
`;

const createCategoriesTableQuery = `CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

const createOrdersTableQuery = `CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'shipped', 'delivered', 'cancelled')),
  total_amount NUMERIC(10, 2) NOT NULL,
  placed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

const createOrderItemsTableQuery = `CREATE TABLE IF NOT EXISTS order_items (
  id SERIAL PRIMARY KEY,
  order_id INT REFERENCES orders(id) ON DELETE CASCADE,
  product_id INT REFERENCES products(id) ON DELETE CASCADE,
  quantity INT NOT NULL CHECK (quantity > 0),
  unit_price NUMERIC(10, 2) NOT NULL
);
`;

const createPaymentsTableQuery = `CREATE TABLE IF NOT EXISTS payments (
  id SERIAL PRIMARY KEY,
  order_id INT REFERENCES orders(id) ON DELETE CASCADE,
  amount NUMERIC(10, 2) NOT NULL,
  payment_method VARCHAR(50) CHECK (payment_method IN ('credit_card', 'paypal', 'bank_transfer')),
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed')),
  transaction_id VARCHAR(100) UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

const createAddressesTableQuery = `CREATE TABLE IF NOT EXISTS addresses (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  full_name VARCHAR(150) NOT NULL,
  street_address TEXT NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100),
  postal_code VARCHAR(20),
  country VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  address_type VARCHAR(20) DEFAULT 'shipping' CHECK (address_type IN ('shipping', 'billing')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

const createCartTableQuery = `CREATE TABLE IF NOT EXISTS carts (
  id SERIAL PRIMARY KEY,
  user_id INT UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

const createCartItemsTableQuery = `CREATE TABLE IF NOT EXISTS cart_items (
  id SERIAL PRIMARY KEY,
  cart_id INT REFERENCES carts(id) ON DELETE CASCADE,
  product_id INT REFERENCES products(id) ON DELETE CASCADE,
  quantity INT NOT NULL CHECK (quantity > 0),
  added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (cart_id, product_id)
);
`;

const createReviewsTableQuery = `CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE SET NULL,
  product_id INT REFERENCES products(id) ON DELETE CASCADE,
  rating INT CHECK (rating BETWEEN 1 AND 5) NOT NULL,
  comment TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

const createWishlistTableQuery = `CREATE TABLE IF NOT EXISTS wishlists (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  product_id INT REFERENCES products(id) ON DELETE CASCADE,
  added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (user_id, product_id)
);
`;


// Execute table creation queries
(async () => {
  try {
    await pool.query(createUsersTableQuery);
    console.log("'users' table created successfully.");
  } catch (err) {
    console.error("Error creating 'users' table:", err.message);
  }
})();

(async () => {
  try {
    await pool.query(createProductsTableQuery);
    console.log("'products' table created successfully.");
  } catch (err) {
    console.error("Error creating 'products' table:", err.message);
  }
})();

(async () => {
  try {
    await pool.query(createProductsCategoriesTableQuery);
    console.log("'product_categories' table created successfully.");
  } catch (err) {
    console.error("Error creating 'product_categories' table:", err.message);
  }
})();

(async () => {
  try {
    await pool.query(createCategoriesTableQuery);
    console.log("'categories' table created successfully.");
  } catch (err) {
    console.error("Error creating 'categories' table:", err.message);
  }
})();

(async () => {
  try {
    await pool.query(createOrdersTableQuery);
    console.log("'orders' table created successfully.");
  } catch (err) {
    console.error("Error creating 'orders' table:", err.message);
  }
})();

(async () => {
  try {
    await pool.query(createOrderItemsTableQuery);
    console.log("'order_items' table created successfully.");
  } catch (err) {
    console.error("Error creating 'order_items' table:", err.message);
  }
})();

(async () => {
  try {
    await pool.query(createPaymentsTableQuery);
    console.log("'payments' table created successfully.");
  } catch (err) {
    console.error("Error creating 'payments' table:", err.message);
  }
})();

(async () => {
  try {
    await pool.query(createAddressesTableQuery);
    console.log("'addresses' table created successfully.");
  } catch (err) {
    console.error("Error creating 'addresses' table:", err.message);
  }
})();

(async () => {
  try {
    await pool.query(createCartTableQuery);
    console.log("'carts' table created successfully.");
  } catch (err) {
    console.error("Error creating 'carts' table:", err.message);
  }
})();

(async () => {
  try {
    await pool.query(createCartItemsTableQuery);
    console.log("'cart_items' table created successfully.");
  } catch (err) {
    console.error("Error creating 'cart_items' table:", err.message);
  }
})();

(async () => {
  try {
    await pool.query(createReviewsTableQuery);
    console.log("'reviews' table created successfully.");
  } catch (err) {
    console.error("Error creating 'reviews' table:", err.message);
  }
})();

(async () => {
  try {
    await pool.query(createWishlistTableQuery);
    console.log("'wishlists' table created successfully.");
  } catch (err) {
    console.error("Error creating 'wishlists' table:", err.message);
  }
})();

module.exports = pool;
