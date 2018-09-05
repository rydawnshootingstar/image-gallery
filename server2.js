const express = require('express');
const Gallery = require('express-photo-gallery');

var {wipe} = require('./deleter');
var {handleSearch} = require('./downloader');

var app = express();

var options = {
    title: 'My boys'
};


app.use('/photos', Gallery('images/output/images', options));

app.get('/photos/add/:search', (req, res)=>{
    var search = req.params.search;
    handleSearch(search);
    res.redirect('http://localhost:3000/photos');
});

app.get('/photos/delete', (req,res)=> {
    console.log('say goodbye');
    wipe();
    console.log('goodbye');
res.redirect('http://localhost:3000/photos');
});

app.listen(3000, ()=> {
    console.log('running on port 3000');
});