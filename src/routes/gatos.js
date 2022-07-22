var express = require('express');
const gatosController = require('../controller/gatos');
var router = express.Router();



router.get('/', gatosController.gatos);

module.exports = router;