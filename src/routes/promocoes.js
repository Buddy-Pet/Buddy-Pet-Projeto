var express = require('express');
const promocoesController = require('../controller/promocoes');
var router = express.Router();

router.get('/', promocoesController.promocoes);

module.exports = router;