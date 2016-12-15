var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var Group = require('../models/group');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('groups', { user: req.user });
});


router.get('/create-group', function(req, res) {
    res.render('create-group', { user: req.user });
});

router.get('/:id', function(req, res) {
    res.render('group-view', { user: req.user });
});

router.get('/update/:id', function(req, res) {
    res.render('update-group', { user: req.user });
});
router.get('/comment/:id', function(req, res) {
    res.render('comment-group', { user: req.user });
});


module.exports = router;