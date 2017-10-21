var fs = require("fs");
var path = require("path");


module.exports = function (dirpath, fileext, callback) {
    fs.readdir(dirpath, 'utf-8', function (err, data) {
        if (err) return callback(err); // error callback

        data = data.filter(function(file) {
            return (path.extname(file) === '.' + fileext);
        });

        callback(null, data); // success callback
    });
};

