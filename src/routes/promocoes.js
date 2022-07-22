var express = require('express');
const promocoesController = require('../controller/promocoesController');
var router = express.Router();

router.get('/', promocoesController.promocoes);

module.exports = router;