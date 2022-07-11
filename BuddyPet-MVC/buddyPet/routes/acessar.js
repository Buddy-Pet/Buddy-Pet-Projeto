var express = require('express');
const acessarController = require('../controllers/acessar');
var router = express.Router();


router.get('/', acessarController.acessar);

module.exports = router;