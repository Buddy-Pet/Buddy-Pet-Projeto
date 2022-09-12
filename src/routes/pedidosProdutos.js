const express = require('express');
const pedidosProdutosController = require('../controller/pedidosProdutosController');
const router = express.Router();


router.get('/', pedidosProdutosController.list);

module.exports = router;