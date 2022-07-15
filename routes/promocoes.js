var express = require('express');
const promocoesController = require('../controllers/promocoes');
var router = express.Router();

router.get('/', promocoesController.promocoes);

module.exports = router;