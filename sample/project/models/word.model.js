const mongoose = require('mongoose');

var wordSchema = new mongoose.Schema({
    news_title: {
        type: String,
        required: 'OMG'
    },
    article: {
        type: String,
        required: 'OMG'
    },
    score: {
        type:String
    },
    comparative: {
        type:String
    },
    wordlistP: {
        type:String
    }
});




mongoose.model('word', wordSchema);