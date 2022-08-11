var express = require('express');
const quemSomosController = require('../controller/quemSomosController');
var router = express.Router();

router.get('/',quemSomosController.quemsomos);

module.exports = router;