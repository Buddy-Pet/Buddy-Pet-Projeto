const express = require('express');
const router = express.Router();
const categoriasController = require('../controller/categoriasController');

router.get('/categorias', categoriasController.list);
router.get('/categorias/detail/:id', categoriasController.detail);

module.exports = router;