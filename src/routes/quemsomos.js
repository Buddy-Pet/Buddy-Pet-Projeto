var express = require('express');
const quemSomosController = require('../controller/quemSomosController');
var router = express.Router();

/* GET home page. */
router.get('/',quemSomosController.quemsomos);

module.exports = router;