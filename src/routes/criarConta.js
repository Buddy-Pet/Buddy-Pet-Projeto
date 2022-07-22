var express = require('express');
const criarcontaController = require('../controller/criarContaController');
var router = express.Router();

router.get('/',criarcontaController.criarConta);

module.exports = router;