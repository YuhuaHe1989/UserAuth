'use strict';

var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.post('/',function(req, res) {
  User.findById(req.body._id, function(err, updateUser){
    res.status(err ? err : 200).send(err || updateUser);
  });
  
});

router.get('/', function(req, res) {
  //console.log(req.body);
  res.render('profile');
});

router.get('/edit', function(req, res) {
  res.render('profileEdit');
});

router.put('/', function(req, res) {
  User.findByIdAndUpdate(req.body._id,req.body,function(err,user){
    res.status(err ? 400 : 200).send(err || user);
  });
});

module.exports = router;
