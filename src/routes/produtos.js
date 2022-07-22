const express = require('express');
const produtosController = require('../controller/produtosController');
const router = express.Router();

router.get('/', produtosController.index);

router.post('/', produtosController.store);

/*router.put('/:id', produtosController.produtos);

router.delete('/:id', produtosController.produtos);*/

module.exports = router;