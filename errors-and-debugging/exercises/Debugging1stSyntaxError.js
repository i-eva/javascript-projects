//Run this code first and examine the error message.

// Error message: SyntaxError: Unexpected token '{'

//Fix the syntax error then run the code again to check your work.

// Added closing parentheses before {

let launchReady = false;
let fuelLevel = 17000;

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

// result: syntax error corrected