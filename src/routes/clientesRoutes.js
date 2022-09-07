const express = require('express');
const router = express.Router();
const clientesController = require('../controller/clientesController');

router.get('/', clientesController.list);

module.exports = router;