// makeDownwardStairs(height) function
// Use your makeLine function to do this.

function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++ ) {
        line += '#';
    }
    return line;
}

// Write a function makeDownwardStairs(height) that prints 
// the staircase pattern shown below, with the given height (5). 

function makeDownwardStairs(height) {
    let stairs = makeLine(1)
    for (let i = 2; i < height+1; i++ ) {
        stairs += "\n" + makeLine(i);
    }
    return stairs;
}

console.log(`The function makeDownwardStairs(5) produces
${makeDownwardStairs(5)}
`);

// #
// ##
// ###
// ####
// #####

// makeSpaceLine(numSpaces, numChars) function
// Write a function makeSpaceLine(numSpaces, numChars) that returns 
// a line with exactly the specified number of spaces (3), followed by 
// the specified number of hashes (5), followed again by numSpaces more spaces.

function makeSpace(numSpaces) {
    let spaces = "";
    for (let i = 0; i < numSpaces; i++ ) {
        spaces += " ";
    }
    return spaces;
}

function makeSpaceLine(numSpaces,numChars) {
    chars = makeLine(numChars);
    spaces = makeSpace(numSpaces);
    let spaceLine = spaces + chars + spaces;
    return spaceLine;
}

console.log(`The function makeSpaceLine(3,5) produces
${makeSpaceLine(3,5)}
`);

// ___#####___ (underscores represent spaces)

// Write a function makeIsoscelesTriangle(height) that returns 
// a triangle of the given height (5).

// Tip: Consider the top line of the triangle to be level 0, 
// the next to be line 1, and so on. Then line i is a space-line 
// with height - i - 1 spaces and 2 * i + 1 hashes.

function makeIsoscelesTriangle(height) {
    let layer = makeSpaceLine(height-1,1)
    for (let i = 1; i < height; i++ ) {
        layer += "\n" + makeSpaceLine((height-(i+1)),((2*i)+1));
    }
    return layer;
}

console.log(`The function makeIsoscelesTriangle(5) produces
${makeIsoscelesTriangle(5)}
`);
//     #
//    ###
//   #####
//  #######
// #########