function reverse(str) {
  let lettersArray = str.split('');
  let reversedLettersArray = lettersArray.reverse();
  return reversedLettersArray.join('');
}

console.log(reverse("LaunchCode"));

let backwards = function(str) {
  let backwardsArray = str.split("").reverse().join("");
  return backwardsArray;
};

console.log(backwards("LaunchCode"));

let f1 = function(str) {
  return str + str;
};

let f2 = f1;

console.log(f1("abcd"));
console.log(f2("abcd"));
//console.log(function("abcd")); <- failed

// Complete the following code snippet so that 
// it logs an error message if userInput is negative.

let logger = function(errorMsg) {
  console.log("ERROR: " + errorMsg);
};

if (userInput < 0) {
  ____________("Invalid input");
}