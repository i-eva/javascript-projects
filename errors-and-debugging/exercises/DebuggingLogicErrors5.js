// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, 
// ONE way to fix the logic error is to use a different variable to store the fuel check result. 
// Refactor the code to do this. Verify that your change works by updating the console.log statements.

let launchReady = false;
let fuelLevel = 17000;
let fuelCheck = false
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   fuelCheck = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   fuelCheck = false;
}

console.log("launchReady = ", launchReady);

console.log("fuelCheck = ", fuelCheck)

if (crewStatus && computerStatus === 'green' && fuelCheck){
   console.log('Crew, computer, and fuel check cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew, computer, or fuel check not ready!');
   launchReady = false;
}

console.log("launchReady = ", launchReady);