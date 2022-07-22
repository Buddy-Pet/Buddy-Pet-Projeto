var express = require('express');
const carrinhoController = require('../controller/carrinhoController');
var router = express.Router();

/* GET home page. */
router.get('/', carrinhoController.carrinho);

module.exports = router;