CREATE TABLE IF NOT EXISTS simple_orders (
    id SERIAL PRIMARY KEY,
    order_id VARCHAR(50) UNIQUE NOT NULL,
    customer_name VARCHAR(255) NOT NULL,
    customer_telegram VARCHAR(255) NOT NULL,
    customer_email VARCHAR(255),
    service_name VARCHAR(500) NOT NULL,
    amount VARCHAR(50) NOT NULL,
    comment TEXT,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP
);

CREATE INDEX idx_simple_orders_status ON simple_orders(status);
CREATE INDEX idx_simple_orders_created_at ON simple_orders(created_at DESC);