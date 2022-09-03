const express = require('express');
const router = express.Router();
const categoriasController = require('../controller/categoriasController');

router.get('/', categoriasController.list);
//router.get('/detail/:id', categoriasController.detail);

module.exports = router;