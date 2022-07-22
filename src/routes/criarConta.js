var express = require('express');
const criarcontaController = require('../controller/criarConta');
var router = express.Router();

router.get('/',criarcontaController.criarConta);

module.exports = router;