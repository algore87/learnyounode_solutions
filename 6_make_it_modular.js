/* read all .txt files in a directory given as cl argument */
var filterls = require("./6_make_it_modular_lib")

dirpath = process.argv[2];
fileext = process.argv[3];

filterls(dirpath, fileext, function (err, data) {
   if (err) return console.error(err);
   data.forEach(function (elem) {
      console.log(elem);
   });
});



