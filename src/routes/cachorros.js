var express = require('express');
const cachorrosController = require('../controller/cachorros');
var router = express.Router();



router.get('/', cachorrosController.cachorros);

module.exports = router;