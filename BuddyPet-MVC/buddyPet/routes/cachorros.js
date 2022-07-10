var express = require('express');
var router = express.Router();



router.get('/cachorros', function(req, res, next) {
  res.render('cachorros');
});

module.exports = router;