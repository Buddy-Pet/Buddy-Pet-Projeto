var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/cachorros', function(req, res, next) {
  res.render('cachorros', { title: 'Express' });
});

module.exports = router;