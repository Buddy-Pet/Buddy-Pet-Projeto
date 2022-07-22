var express = require('express');
const gatosController = require('../controllers/gatos');
var router = express.Router();



router.get('/', gatosController.gatos);

module.exports = router;