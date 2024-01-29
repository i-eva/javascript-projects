//Create an anonymous function and set it equal to a variable.

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/

const input = require('readline-sync');

function getValidInput(prompt, isValid) {

    // Prompt the user, using the prompt string that was passed
    let userInput = input.question(prompt);

    // Call the boolean function isValid to check the input
    while (!isValid(userInput)) {
    console.log("ARRR!");
    userInput = input.question(prompt);
    }

    return userInput;
}

// A boolean function for validating input
let isNumber = function(n) {
    return Number(n);
};

// A math function for tripling valid input
let tripleValue = function(n) {
    return 3*n;
};

console.log(getValidInput('Enter an even number: ', tripleValue));

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];
