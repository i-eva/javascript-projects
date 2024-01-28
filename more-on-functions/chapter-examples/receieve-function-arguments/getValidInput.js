const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"

// A boolean function for validating input
let sliceFirstLetter = function(a) {
  return a.slice(0,1) === "a";
};

console.log(getValidInput('Enter a word beginning with lowercase "a": ', sliceFirstLetter));


// TODO 2: write a validator 
// that ensures input is a vowel

// I thought I could do this one now... 
// ...after trying for about an hour I learned
// I can't do this one yet. 
// I have to move on to get through the chapter, the quiz, and
// the exercises.


// Be sure to test your code!
