var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');



var Account = new Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    bio: String
    //memberOf : Array
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);
