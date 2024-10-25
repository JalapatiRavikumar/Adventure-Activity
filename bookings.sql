CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  activity_id INTEGER REFERENCES activities(id),
  booking_date DATE
);
