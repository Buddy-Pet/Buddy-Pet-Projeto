var express = require('express');
const outrosController = require('../controller/outros');
var router = express.Router();

/* GET home page. */
router.get('/', outrosController.outros);

module.exports = router;