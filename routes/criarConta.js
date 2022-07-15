var express = require('express');
const criarcontaController = require('../controllers/criarConta');
var router = express.Router();

router.get('/',criarcontaController.criarConta);

module.exports = router;