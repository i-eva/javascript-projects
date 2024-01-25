// Write a function makeDiamond(height) that returns 
// a diamond where the triangle formed by the top 
// portion has the given height.

// Tip: Consider what happens if you create 
// a triangle and reverse it using our reverse function.

function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++ ) {
        line += '#';
    }
    return line;
}

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

function makeIsoscelesTriangleUp(height) {
    let up = height
    let layer = makeSpaceLine(up-1,1)
    for (let i = 1; i < up; i++ ) {
        layer += "\n" + makeSpaceLine((up-(i+1)),((2*i)+1));
    }
    return layer;
}
function makeIsoscelesTriangleDown(height) {
    let down = height
    let layer = "\n" + makeSpaceLine(0,(2*down)-1)
    for (let i = down - 1; i > 0; i-- ) {
    layer += "\n" + makeSpaceLine(down-i,((2*i)-1));
    }
    return layer;
}
function makeDiamond(height) {
    let trianglesUpDown = makeIsoscelesTriangleUp(height) + makeIsoscelesTriangleDown(height);
    return trianglesUpDown;
    }

console.log(`The function makeDiamond(5) produces
${makeDiamond(5)}
`);

//     #
//    ###
//   #####
//  #######
// #########
// #########
//  #######
//   #####
//    ###
//     #