var express = require('express');
var router = express.Router();

var requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
};

router.use(requestTime);

/* GET home page. */
router.get('/', function(req, res, next) {
  var responseText = req.requestTime;
  res.render('index', { title: 'Learn Node',time: responseText });
});

module.exports = router;
