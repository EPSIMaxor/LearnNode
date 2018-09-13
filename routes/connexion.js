var express = require('express');
var router = express.Router();
var url = require('url')
var session = require('express-session')

router.use(session({
  secret: 'learnNode',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

router.use(require('../middlewares/flash.js'))

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(req.flash.error)
    var query = url.parse(req.url,true).query
    var name = query.id === undefined ? 'anonyme' : query.id
    if(query.id == undefined) {
      res.render('connexion');
    }else {
      res.render('connexion');
    }
  // }else {
    // console.log('already connected !')
    // res.render('users',{title: 'Node users',user: req.session.flash.user});
  // }
  
});

/* GET user. */
router.post('/', function(req, res, next) {
  if(req.body.id === 'monmail@gmail.com') {
    req.flash('user', req.body.id)
    res.redirect('/ticket');
  } else {
    req.flash('error', req.body.id)
    res.redirect('/ticket')
  }
  console.log(req.body)
});

module.exports = router;
