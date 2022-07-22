var express = require('express');
const cachorrosController = require('../controller/cachorrosController');
var router = express.Router();



router.get('/', cachorrosController.cachorros);

module.exports = router;