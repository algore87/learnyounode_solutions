/* print the sum of the argument values which you pass to the program */
var sum = 0;
process.argv.forEach(function(elem) {
    if(!isNaN(+elem)) {
        sum += +elem;
    }
});
process.stdout.write(sum.toString() + '\n');