const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const articleSchema = require('./articleModel').schema;

const querySchema = new Schema({
    query: String,
    articles: [articleSchema]
});

module.exports = mongoose.model('Queries', querySchema);