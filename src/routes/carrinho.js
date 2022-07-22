var express = require('express');
const carrinhoController = require('../controllers/carrinho');
var router = express.Router();

/* GET home page. */
router.get('/', carrinhoController.carrinho);

module.exports = router;