const express = require('express');
const homeController = require('../controller/homeController');
const router = express.Router();

/* GET home page. */
router.get('/', homeController.home);

module.exports = router;
