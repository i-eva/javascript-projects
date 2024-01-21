/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, 
    //but only if the numbers are multiples of 3. 
    //(Your code should work even if you replace 50 or 20 with other numbers). */

console.log(`Exercise #1a result: 
output of a for loop that prints the numbers 0 - 20, 
one number per line.`);

for (let i = 0; i < 21; i++) {
  console.log(i)
}

console.log(`Exercise #1b result: 
output of a for loop that prints only the ODD values from 3 - 29, 
one number per line.`);

for (let i = 3; i < 30; i = i+2) {
  console.log(i)
}

console.log(`Exercise #1c result: 
output of a for loop that prints the EVEN numbers 12 to -14 in descending order, 
one number per line.`);

for (let i = 12; i > -15; i = i-2) {
  console.log(i)
}

console.log(`Exercise #1d result: output of a for loop that
prints the numbers 50 - 20 in descending order, 
but only if the numbers are multiples of 3. 
My code should work even if I replace 50 or 20 with other numbers.`);

//This code will not work...
//for (let i = 50; i%3 === 0 ; i = i--) {
//  console.log(i)
//  if (i < 20) {
    //break;
//  }
//}
//...because the loop condition condition will halt the loop
//when it evaluates to false (not an if/else condition)

for (let i = 50; i > 20 ; i--) {
  if (i%3 === 0) {
  console.log(i);
   }
}

console.log(`...
My code attempts don't work... when I write i = i--. 
I can write i = i-1 or i-- instead to get working code.`);

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].*/
console.log(`Exercise #2:
Initialize two variables to hold the string “LaunchCode” 
and the array [1, 5, ‘LC101’, ‘blue’, 42].`);

let str = "LaunchCode";
let arr = [1, 5, 'LC101', 'blue', 42];

/*Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 

console.log(`Exercise #2a: print each element of the array
[1, 5, ‘LC101’, ‘blue’, 42] to a new line.`);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

console.log(`Exercise #2b: print each character of the string
"LaunchCode" - in reverse order - to a new line.`);

for (let i = str.length; i > -1; i--) {
  console.log(str[i])
}

/*Exercise #3:Construct a for loop that sorts the array 
//[2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */
console.log(`Exercise #3a: 
Construct a for loop that sorts the array 
[2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
One array contains the even numbers, and the other holds the odds.
`)
  let oddArray = [];
  let evenArray = [];
  let fullArray = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];

  for (let i = 0; i < fullArray.length; i++) {
    if (fullArray[i]%2 === 0) {
      evenArray.push(fullArray[i]); 
    } else {
      oddArray.push(fullArray[i]);
       }
      }
    

console.log(`Exercise #3b: 
Print the arrays to confirm the results.
`)

console.log(` oddArray contains: ${oddArray}

evenArray contains: ${evenArray}`);
