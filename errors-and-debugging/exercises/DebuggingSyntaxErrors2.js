//This block of code hides two syntax errors.
// Run the code and find the mistakes. 
// Only ONE error will be flagged at a time. 
// Fix that ONE problem, and then re-run the code to check yer work. 
// Avoid trying to fix multiple issues at once.

//SyntaxError: Unexpected token '&'
//Removed '&' from between crewStatus &&& computerStatus

//SyntaxError: missing ) after argument list
//Removed ( from after console.log in console.log(("10, 9, 9, 7, 6, 5, 4, 3, 2, 1...")

let launchReady = false;
let crewStatus = true;
let computerStatus = 'green';

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

if (launchReady) {
   console.log("10, 9, 8, 7, 6, 5, 4, 3, 2, 1...");
   console.log("Fed parrot...");
   console.log("Ignition...");
   console.log("Liftoff!");
} else {
   console.log("Launch scrubbed.");
}

//Two syntax errors found and corrected. Ran code successfully.