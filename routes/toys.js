var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('toys', { title: 'Search Results for Class toys' });
});

module.exports = router;