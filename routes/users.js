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
  // if(req.session.flash.user === undefined) {
    var query = url.parse(req.url,true).query
    var name = query.id === undefined ? 'anonyme' : query.id
    console.log(req.session)
    if(query.id == undefined) {
      res.render('users',{title: 'Node users',user: 'anonyme'});
    }else {
      res.render('users',{title: 'Node users',user: name});
    }
  // }else {
    // console.log('already connected !')
    // res.render('users',{title: 'Node users',user: req.session.flash.user});
  // }
  
});

/* GET user. */
router.post('/', function(req, res, next) {
  if(req.body.id === undefined || req.body.id === 'monmail@gmail.com') {
    /*res.render('users',{title: 'Node users',error: "Vous n'avez pas entré de message :(", user: ''})*/
    // req.flash('user', req.body.id)
    res.redirect('/users');
  } else {
    req.flash('error', "Vous n'avez pas entré de message :(")
    res.redirect('/users')
  }
  console.log(req.body)
});

module.exports = router;
