var express = require('express');
const produtosController = require('../controllers/produtos');
var router = express.Router();

router.get('/',produtosController.produtos);

module.exports = router;