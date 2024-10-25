CREATE TABLE activities (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  location VARCHAR(100),
  price DECIMAL(10, 2)
);

INSERT INTO activities (name, location, price) VALUES
('Trekking', 'Mountain View', 120.00),
('Rafting', 'River Rapids', 150.00),
('Skydiving', 'Sky Valley', 300.00);
