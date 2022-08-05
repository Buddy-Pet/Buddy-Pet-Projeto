const express = require('express');
const produtosController = require('../controller/produtosController');
const router = express.Router();

router.get('/criar', produtosController.criarProdutos);

router.get('/:id', produtosController.show);

router.get('/', produtosController.index);

router.post('/', produtosController.store);

router.put('/:id', produtosController.update);

router.delete('/:id', produtosController.delete);

module.exports = router;