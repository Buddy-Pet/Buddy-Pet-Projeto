var express = require('express');
const homeController = require('../controllers/home');
var router = express.Router();

/* GET home page. */
router.get('/', homeController.home);



module.exports = router;
