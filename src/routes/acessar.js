var express = require('express');
const acessarController = require('../controller/acessar');
var router = express.Router();


router.get('/', acessarController.acessar);

module.exports = router;