// Write a function makeLine(size) that returns a line with exactly size hashes.

function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++ ) {
        line += '#';
    }
    return line;
}

console.log(`The function makeLine(5) produces
${makeLine(5)}
`);

//  console output should be:  #####
//  After checking the answer in the textbook I got the desired result.

// Write a function called makeSquare(size) that returns a size by size string of hashes. 
// The function should NOT print each row of the square. 
// Instead, it must return a single string that contains the entire shape.
// Tips
//  Call your makeLine function to create each row of the square.
//  The newline character, \n, will be helpful to you.
//  Do NOT include a newline character at the end of your string.

function makeSquare(size) {
    let row = makeLine(size);
    let square = row
    for (let i = 0; i < size-1; i++ ) {
        square += "\n" + row;
    }
    return square;
}


console.log(`The function makeSquare(5) produces
${makeSquare(5)}
`)

//  Console output should be:
    // #####
    // #####
    // #####
    // #####
    // ##### 
