const express = require('express');
const hbs = require('hbs');

var app = express();

// app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/images/output/images'));

app.set('view engine', 'hbs');


app.get('/', (req, res)=> {
    res.render('home.hbs');
});

app.listen(3000, ()=> {
    console.log('running on port 3000');
});
