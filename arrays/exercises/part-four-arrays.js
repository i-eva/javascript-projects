//start here

let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort 
//to determine which ones alter the original array.

console.log(`This is the array holdCabinet1:
${holdCabinet1}
`);

console.log(`This is the array holdCabinet2:
${holdCabinet2}
`);

//1) Print the result of using concat on the two arrays. 

console.log(`The arrays combined look like this:
${holdCabinet1.concat(holdCabinet2)}
`);

//Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.

console.log(`The original array, holdCabinet1, is unchanged:
${holdCabinet1}
`);

//2) Print a slice of two elements from each array. Does slice alter the original arrays?

console.log(`This is a slice from the array holdCabinet1:
${holdCabinet1.slice(3)}
`);

console.log(`The original array, holdCabinet1, is unchanged:
${holdCabinet1}
`);

console.log(`This is a slice from the array holdCabinet2:
${holdCabinet2.slice(2,4)}
`);

console.log(`The original array, holdCabinet2, is unchanged:
${holdCabinet2}
`);

//3) reverse the first array, and sort the second. 

console.log(`This is an attempt to reverse the array holdCabinet1:
${holdCabinet1.reverse()}
`);

console.log(`The original array, holdCabinet1, is changed:
${holdCabinet1}
`);

console.log(`The array holdCabinet2 has been sorted into a weird alpha-order:
${holdCabinet2.sort()}
`);

console.log(`The original array, holdCabinet2, is changed:
${holdCabinet2}
`);

//What is the difference between these two methods? 

console.log(`The reverse method can be applied again to restore the array holdCabinet1:
${holdCabinet1.reverse()}
...because reverse is an uncomplicated array that reverses the index positions.
`);

console.log(`The sort method won't change anything if it is applied again:
${holdCabinet2.sort()}
...because sort applies rules to the data stored at each index and reassigns their position. 
Applying sort a second time only reveals that all the work was correctly done the first time.
`);

//Do the methods alter the original arrays?

console.log(`The original array, holdCabinet1, has changed (reversed) twice, 
although it now appears unchanged:
${holdCabinet1}
`);

console.log(`The original array, holdCabinet2, has been changed (sorted):
${holdCabinet2}
`);
