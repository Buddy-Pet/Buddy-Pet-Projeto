const express = require('express');
const router = express.Router();
const tipoProdutoController = require('../controller/tipoProdutoController');

router.get('/', tipoProdutoController.list);

module.exports = router;