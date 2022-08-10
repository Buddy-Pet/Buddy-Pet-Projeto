const express = require('express');
const produtosController = require('../controller/produtosController');
const router = express.Router();

/*** CREATE ONE PRODUCT ***/
router.get('/criar', produtosController.criarProdutos);

/*** EDIT ONE PRODUCT ***/
router.get('/editar/:id', produtosController.show);
router.put('/editar/:id', produtosController.update);

router.get('/detalhesProduto/:id', produtosController.show);

router.get('/', produtosController.index);

router.post('/', produtosController.store);

router.put('/:id', produtosController.update);

router.delete('/:id', produtosController.delete);

module.exports = router;