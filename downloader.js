const {ImageDownloader} = require('google-image-downloader');
const imageIndex = require('./images/output/index');
const fs = require('fs');


const downloader = new ImageDownloader(__dirname + '/images');

var handleSearch = function (searchTerm){
    if (imageIndex[searchTerm]) {
        return console.log('already have it');
    }
    downloader.downloadImages(searchTerm,1);

};

module.exports = {handleSearch};

// if(imageIndex[userTerm]){
//     console.log(imageIndex[userTerm][0].file);
// }





//
// var result = downloader.downloadImages(search,1).then((results)=>{
//     if(JSON.parse(imageIndex).contains(search)){
//         console.log('already got it')
//     }
//     //results[0].filename = search;
//     //console.log('here it is: ', results[0].filename);
// });

// console.log(imageIndex[0].filename);
//
// console.log(result);



//     .then((result)=>{
//     console.log(result);
// },(error) => {
//     console.log(error);
// });
