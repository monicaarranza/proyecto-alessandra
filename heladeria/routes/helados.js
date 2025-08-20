var router = require('express').Router();

var heladoCtrl = require('../controllers/helado');

router.get('/main', heladoCtrl.getMain);

router.get('/about', heladoCtrl.getAbout);  

router.get('/contact', heladoCtrl.getContact);

module.exports = router;
