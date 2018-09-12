var express = require('express');
var router = express.Router();
var session = require('express-session')

router.use(session({
  secret: 'learnNode',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

router.use(require('../middlewares/flash.js'))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ticket', { title: 'Welcome'});
});

router.post('/', function(req, res, next) {
  if(req.body.id === 'monmail@gmail.com') {
    console.log(req.body)
    req.flash('user', req.body.id)
    res.redirect('/ticket');
  }
});

module.exports = router;