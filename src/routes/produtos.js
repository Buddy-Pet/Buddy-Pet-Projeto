const express = require('express');
const produtosController = require('../controller/produtos');
const router = express.Router();

router.get('/', produtosController.produtos);

router.post('/', produtosController.produtos);

router.put('/:id', produtosController.produtos);

router.delete('/:id', produtosController.produtos);

module.exports = router;