require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const wordcontroller = require('./controllers/wordcontroller');






var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));


app.get('/style.css', (req, res) => {
    res.sendFile('/style.css', { root: __dirname })
})
app.get('/mainjs/board.js', (req, res) => {
    res.sendFile('/mainjs/board.js', { root: __dirname })
})
app.get('/mainjs/hide_mychart.js', (req, res) => {
    res.sendFile('/mainjs/hide_mychart.js', { root: __dirname })
})
app.get('/mainjs/sketch.js', (req, res) => {
    res.sendFile('/mainjs/sketch.js', { root: __dirname })
})
app.get('/mainjs/afinn111.json', (req, res) => {
    res.sendFile('/mainjs/afinn111.json', { root: __dirname })
})
app.get('/mainjs/p5.min.js', (req, res) => {
    res.sendFile('/mainjs/p5.min.js', { root: __dirname })
})


app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');




app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});




app.use('/word', wordcontroller);

