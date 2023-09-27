const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const UserModel = mongoose.model('User', UserSchema); // 'User' is the name of the collection in MongoDB

module.exports = UserModel;
