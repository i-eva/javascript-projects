// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, 
// ONE way to fix the logic error is to use a different variable to store the fuel check result. 
// Refactor the code to do this. Verify that your change works by updating the console.log statements.

let launchReady = false;
let fuelLevel = 21000;
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

//Almost done, so wipe the sweat off your brow! 
//Add a final if/else block to print a countdown and “Liftoff!” if all the checks pass, 
//or print “Launch scrubbed” if any check fails.

if (launchReady) {
   console.log("10, 9, 8, 7, 6, 5, 4, 3, 2, 1...Liftoff!");
} else {
   console.log("Launch scrubbed!");
}