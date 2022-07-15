var express = require('express');
const cachorrosController = require('../controllers/cachorros');
var router = express.Router();



router.get('/', cachorrosController.cachorros);

module.exports = router;