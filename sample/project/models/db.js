const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/worddb', { useNewUrlParser: true }, (err, database) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
        var db = database;

 
          


    }
    else { console.log('Error in DB connection : ' + err) }
});



  


require('./word.model');




