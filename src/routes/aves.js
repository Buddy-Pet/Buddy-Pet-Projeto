var express = require('express');
const avesController = require('../controller/avesController');
var router = express.Router();


router.get('/',avesController.aves);

module.exports = router;