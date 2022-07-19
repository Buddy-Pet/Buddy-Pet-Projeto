var express = require('express');
const cachorrosController = require('../controllers/cachorros');
var router = express.Router();



router.get('/produto1', cachorrosController.cachorros);

module.exports = router;