var express = require('express');
const quemsomosController = require('../controller/quemsomos');
var router = express.Router();

/* GET home page. */
router.get('/',quemsomosController.quemsomos);

module.exports = router;