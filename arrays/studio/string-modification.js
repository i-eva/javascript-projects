const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let newStr1 = str.slice(0,3);
let newStr2 = str.slice(3);

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`We began with the string ${str}. 
We used two variables, newStr1 and newStr2 to take slices of the original string.
Finally, we added the two slices. ${(newStr2 + newStr1)}`)

//2) Modify your code to accept user input. Query the user to enter the number of 
//letters that will be relocated.

let numToMove = Number(input.question("How many numbers should be moved to the end of the string? "));
newStr = str.slice(numToMove) + str.slice(0,numToMove);

//3) Add validation to your code to deal with user inputs that are longer than the word. 
//In such cases, default to moving 3 characters. 
//Also, the template literal should note the error.

if(numToMove < str.length) {
    newStr = str.slice(numToMove).concat(str.slice(0,numToMove));
    console.log(`Your new word is: ${newStr}`);
} else {
    newStr = str.slice(3).concat(str.slice(0,3));
    console.log(`You selected too many letters. Three letters will be moved.
    Your new word: ${newStr});`);
}
