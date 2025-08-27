require('dotenv').config();
console.log(process.env);

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Monica' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Acerca de Monica' });
});

/* GET contacto */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contacto' });
});
 
/* API endpoint POST */
router.post('/api/save', function(req, res, next) {
  
  res.json({ status: 'ok', message: 'Datos recibidos correctamente' });
});

require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors()); 

app.get('/api/weather', async (req, res) => {
  try {
    const { lat, lon, units = 'metric', exclude, lang, callback } = req.query;

    if (!lat || !lon) {
      return res.status(400).json({ error: 'Faltan parámetros lat y lon' });
    }

    const url = 'https://api.openweathermap.org/data/3.0/onecall';
    const params = {
      lat,
      lon,
      units,     
      exclude,  
      lang,      
      appid: process.env.OPENWEATHER_API_KEY
    };

    const { data } = await axios.get(url, { params });

    
    if (callback) {
     
      return res.jsonp(data); 
    }

  
    res.json(data);
  } catch (err) {
    console.error(err?.response?.data || err.message);
    res.status(500).json({ error: 'No se pudo obtener el clima' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
});

module.exports = router;
