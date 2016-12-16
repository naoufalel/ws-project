var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var Group = require('../models/group');
var router = express.Router();

router.route('/users')
    .get(function(req, res) {
        Account.find(function(err, users) {
            if (err)
                res.send(err);

            res.json(users);
        });
    }).post(function(req, res) {

        // use our bear model to find the bear we want
        Account.update({ '_id': req.user._id }, {
            $set: {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                bio: req.body.bio
            }
        }, { w: 1 }, function(err, result) {
            if (err)
                res.send(err);

            Account.find(function(err, users) {
                if (err)
                    res.send(err)
                res.json(users);
            });
        })
    })
    .delete(function(req, res) {
        Account.remove({
            _id: req.user._id
        }, function(err, user) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });


router.route('/users/:user_id')
    .get(function(req, res) {
        Account.findById(req.params.user_id, function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    })
    .put(function(req, res) {

        // use our bear model to find the bear we want
        Account.findById(req.params.user_id, function(err, user) {

            if (err)
                res.send(err);

            user.name = req.body.name;  // update the bears info

            // save the bear
            user.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Account updated!' });
            });

        });
    }).delete(function(req, res) {
        Account.remove({
            _id: req.params.user_id
        }, function(err, user) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });




router.route('/groups')
    .get(function(req, res) {
        Group.find(function(err, groups) {
            if (err)
                res.send(err);

            res.json(groups);
        });
    }).post(function(req, res) {

        // create a todo, information comes from AJAX request from Angular
        var data = { user_id: req.user._id, username: req.user.username };
        Group.create({
            name: req.body.gname,
            description: req.body.gdescription,
            creatorId: req.user._id,
            members: data
        }, function(err, group) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Group.find(function(err, groups) {
                if (err)
                    res.send(err)
                res.json(groups);
            });
        });

    });

router.route('/groups/:group_id')
    .get(function(req, res) {
        Group.findById(req.params.group_id, function(err, group) {
            if (err)
                res.send(err);
            res.json(group);
        });
    })
    .put(function(req, res) {

        // use our bear model to find the bear we want
        Group.findById(req.params.group_id, function(err, group) {

            if (err)
                res.send(err);

            group.name = req.body.gname;  // update the bears info
            group.description = req.body.gdescription;
            group.comments =
                // save the bear
                group.save(function(err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'Group updated!' });
                });

        });
    }).delete(function(req, res) {
        Group.remove({
            _id: req.params.group_id
        }, function(err, user) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports = router;
