const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const app = express();
const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'advenzone',
  password: 'your_password',
  port: 5432,
});

app.use(bodyParser.json());

// Get list of activities
app.get('/api/activities', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM activities');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Book an activity
app.post('/api/bookings', async (req, res) => {
  const { name, email, activityId, date } = req.body;
  try {
    await pool.query(
      'INSERT INTO bookings (name, email, activity_id, booking_date) VALUES ($1, $2, $3, $4)',
      [name, email, activityId, date]
    );
    res.status(200).send('Booking successful');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
