-- Таблица для хранения заказов
CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  order_number VARCHAR(50) UNIQUE NOT NULL,
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL,
  user_phone VARCHAR(50),
  total_amount INTEGER NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  order_comment TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица для хранения позиций заказа
CREATE TABLE IF NOT EXISTS order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id),
  item_name VARCHAR(255) NOT NULL,
  item_price INTEGER NOT NULL,
  quantity INTEGER DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица для хранения платежей
CREATE TABLE IF NOT EXISTS payments (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id),
  robokassa_inv_id VARCHAR(100),
  payment_method VARCHAR(50),
  amount INTEGER NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Индексы для быстрого поиска
CREATE INDEX IF NOT EXISTS idx_orders_order_number ON orders(order_number);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_payments_order_id ON payments(order_id);
CREATE INDEX IF NOT EXISTS idx_payments_robokassa_inv_id ON payments(robokassa_inv_id);