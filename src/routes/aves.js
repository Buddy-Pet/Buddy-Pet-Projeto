var express = require('express');
const avesController = require('../controller/aves');
var router = express.Router();


router.get('/',avesController.aves);

module.exports = router;