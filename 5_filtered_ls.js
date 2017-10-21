/* read all .txt files in a directory given as cl argument */
var fs = require("fs");
var path = require("path");

dirpath = process.argv[2];
fileext = '.' + process.argv[3];

fs.readdir(dirpath, 'utf-8', function (err, data) {
    if (err) return console.log(err);
    data.forEach(function (elem) {
        if(path.extname(elem) === fileext) {
            console.log(elem);
        }
    });
});

