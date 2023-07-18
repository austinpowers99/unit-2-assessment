var express = require('express');
var router = express.Router();
const groceriesData = require('../data/groceries');
const groceriesCtrl = require('../controllers/groceries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Unit 2 Assessment', groceries: groceriesData });
});

router.get('/groceries', groceriesCtrl.index);
router.post('/groceries', groceriesCtrl.create);

module.exports = router;
