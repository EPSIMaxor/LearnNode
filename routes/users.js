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
  var query = url.parse(req.url,true).query
  var name = query.id === undefined ? 'anonyme' : query.id
  console.log(req.session)
  if(query.id == undefined) {
    res.render('users',{title: 'Node users',user: 'anonyme'});
  }else {
    res.render('users',{title: 'Node users',user: name});
  }
  
});

/* GET user. */
router.post('/', function(req, res, next) {
  if(req.body.message === undefined || req.body.message === '') {
    /*res.render('users',{title: 'Node users',error: "Vous n'avez pas entré de message :(", user: ''})*/
    req.flash('error', "Vous n'avez pas entré de message :(")
    res.redirect('/users')
  } else {
    
  }
  console.log(req.body)
});

module.exports = router;
