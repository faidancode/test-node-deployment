var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Test Node Deployment by faidancode v-2' });
});

module.exports = router;
