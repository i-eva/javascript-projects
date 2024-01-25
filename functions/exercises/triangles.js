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