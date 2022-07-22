var express = require('express');
const politicasController = require('../controller/politicas');
var router = express.Router();

/* GET home page. */
router.get('/', politicasController.politicas);

module.exports = router;