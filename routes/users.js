var express = require('express');
var Account = require('../models/account');
var router = express.Router();

/* GET users listing. */
router.get('/me', function(req, res, next) {
    res.render('profile', { user: req.user });
});

router.get('/update', function(req, res, next) {
    res.render('settings', { user: req.user });
});

router.get('/:id', function(req, res) {
    res.render("other-profile", { user: res.user });
});

router.get("/", function(req, res) {
    res.render("all-users", { user: req.user });
});



module.exports = router;
