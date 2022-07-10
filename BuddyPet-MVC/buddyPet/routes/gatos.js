var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/gatos', function(req, res, next) {
  res.render('gatos', { title: 'Express' });
});

module.exports = router;