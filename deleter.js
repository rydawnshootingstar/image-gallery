const fs = require('fs');
const path = require('path');

var dirName = __dirname + '/images/output/images/';
var indexName = __dirname + '/images/output/index.json';

console.log(dirName);

var wipe = function() {
    fs.readdir(dirName, (err, files) => {
        if (err) throw err;
        for (const file of files) {
            fs.unlink(path.join(dirName, file), err => {
                if (err) throw err;
            });
        }
});
fs.writeFileSync(indexName, '{}');
};

module.exports = {wipe};