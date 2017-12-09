const mongoose = require('mongoose');
const articleSchema = require('./articleModel').schema;

const Schema = mongoose.Schema;

const userSchema = new Schema({
    facebook_id: String,
    artist: String,
    articleCollection: [articleSchema]    
});


module.exports = mongoose.model('User', userSchema);