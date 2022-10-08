const express = require('express');
const router = express.Router();
const produtoController = require('../controller/produtoCrontroller');

router.get('/', produtoController.list);

module.exports = router;