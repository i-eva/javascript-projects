// Write a function makeLine(size) that returns a line with exactly size hashes.

function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++ ) {
        line += '#';
    }
    return line;
}

console.log(makeLine(5));

//console output should be:  #####

// My attempt gave an output "undefined."
// Notes on where i went wrong: 
// My line #3 was correct.
// My line #4 was incorrect.
// My line #5 was partially correct.
// My line #6 was way off.
// My curly brackets were correct but I forgot the return line.
// I attempted to set up an array instead of using a variable. 