var restful = require('node-restful');
var mongoose = require('mongoose');

// Schema
var Group = new mongoose.Schema({
    name: String,
    description: String,
    creatorId: String,
    members: Array,
    comments: Array
});

// Return model
module.exports = mongoose.model('Groups', Group);
