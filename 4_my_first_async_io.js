/* write a program which is similar to "cat file | wc -l" which
   prints out the nr of lines in the file. */
var fs = require('fs');
fs.readFile(process.argv[2] , 'utf-8', function(err, data) {
    if (!err) console.log(data.split('\n').length - 1); // read file (path @ cl argument)
});


