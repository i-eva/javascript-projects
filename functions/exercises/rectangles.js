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
    let square = row;
    for (let i = 0; i < size-1; i++ ) {
        square += "\n" + row;
    }
    return square;
}


console.log(`The function makeSquare(5) produces
${makeSquare(5)}
`);

//  Console output should be:
    // #####
    // #####
    // #####
    // #####
    // ##### 
// After getting help with program logic I was able to make this work

//Write a function makeRectangle(width, height) that returns a rectangle 
//with the given width (5) and height (3). Use your makeLine function to do this.

function makeRectangle(width,height) {
    width = makeLine(width);
    let rectangle = width;
    for (let i = 0; i < height-1; i++ ) {
        rectangle += "\n" + width;
    }
    return rectangle;
}

console.log(`The function makeRectangle(5,3) produces
${makeRectangle(5,3)}
`);

// expected output:
// #####
// #####
// #####

// Now, go back and rewrite makeSquare to use makeRectangle.

function newMakeSquare(size) {
    let width = size
    let height = size
    return makeRectangle(width,height)
    }

console.log(`The function newMakeSquare(5) produces
${newMakeSquare(5)}
`);