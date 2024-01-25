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


console.log(makeDownwardStairs(5));

// #
// ##
// ###
// ####
// #####