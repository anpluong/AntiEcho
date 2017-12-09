const mongoose = require('mongoose');
const articleSchema = require('./articleModel').schema;

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, index: true, unique: true, required: true, uniqueCaseInsensitive: true },
    fullName: String,
    favorites: [],
    slider: Number,
    sources: {}    
});


module.exports = mongoose.model('User', userSchema);