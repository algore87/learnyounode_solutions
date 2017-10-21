/* write a program which is similar to "cat file | wc -l" which
   prints out the nr of lines in the file. */
var fs = require('fs');
console.log(fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1); // read file (path @ cl argument)

