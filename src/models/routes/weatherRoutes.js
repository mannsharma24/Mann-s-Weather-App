const express = require('express');
const axios = require('axios');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/:city', auth, async (req, res) => {
  const city = req.params.city;
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching weather data' });
  }
});

module.exports = router;
