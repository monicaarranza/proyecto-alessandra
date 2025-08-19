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
 
/* API endpoint: datos en JSON */
router.get('/api/data', function(req, res, next) {
  res.json({
    message: 'Hola desde la API',
    app: 'Proyecto Vanguardia',
    author: 'Monica'
  });
});

/* API endpoint */
router.get('/api/user/:id', function(req, res, next) {
  const userId = req.params.id;
  res.json({ message: `Detalles del usuario con id ${userId}` });
});

/* API endpoint POST */
router.post('/api/save', function(req, res, next) {
  
  res.json({ status: 'ok', message: 'Datos recibidos correctamente' });
});

module.exports = router;
