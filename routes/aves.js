var express = require('express');
const avesController = require('../controllers/aves');
var router = express.Router();


router.get('/',avesController.aves);

module.exports = router;