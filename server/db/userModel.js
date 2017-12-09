const mongoose = require('mongoose');
const articleSchema = require('./articleModel').schema;

const Schema = mongoose.Schema;

const userSchema = new Schema({
    github_id: String,
    articleCollection: [articleSchema]
});


module.exports = mongoose.model('User', userSchema);