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
  var Message = require('../models/message')
  Message.all(function (messages) {
    res.render('ticket', {messages: messages})
  })
});

router.post('/', function(req, res, next) {
  if(req.body.id === 'monmail@gmail.com') {
    req.flash('user', req.body.id)
    res.redirect('/ticket');
  }else {
    var Message = require('../models/message')
    Message.create(req.body.message, function() {
      req.flash('error', 'Votre identifiant ou mot de passe est érroné !')
      res.redirect('/ticket');
    })
  }
});

module.exports = router;