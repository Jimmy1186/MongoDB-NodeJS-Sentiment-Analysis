const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const word = mongoose.model('word');


router.get('/', (req, res) => {
    res.render("word/addOrEdit", {
        viewTitile: "Insert Word"
    });
});
router.get('/rank', (req, res) => {

    word.find((err, docs) => {
        if (!err) {
            res.render("word/rank", {
           
            });
        }
        else {
            console.log('error in rank:' + err);
        }
    });
});




router.get('/list', (req, res) => {

    word.find((err, docs) => {
        if (!err) {
            res.render("word/list", {
                list: docs
            });
        }
        else {
            console.log('error in list:' + err);
        }
    });
});


router.post('/', (req, res) => {
    insertRecord(req, res);
});

function insertRecord(req, res) {
    var Word = new word();
    Word.news_title = req.body.news_title;
    Word.article = req.body.article;
    Word.score = req.body.score;
    Word.comparative = req.body.comparative;
    Word.wordlistP = req.body.wordlistP;
    Word.save((err, doc) => {
        if (!err){
            res.redirect('word')
            
        }
        else {
            console.log('Error during insertion :' + err);
        }
    });
}
router.get('/:id', (req, res) => {
    word.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("word/addOrEdit", {
                viewTitile: "Edit Word",
                word: doc
            });
        }
    });
});



router.get('/delete/:id', (req, res) => {
    word.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('../list');
            console.log('ok');
        }
        else {
            console.log('error in delete');
        }
    });
});


module.exports = router;