const mongoose = require('mongoose');
const SALT_WORK_FACTOR = 10;
const bcrypt = require("bcryptjs");

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));

const User = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
});

module.exports = mongoose.model('User', User);