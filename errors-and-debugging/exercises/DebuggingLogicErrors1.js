// Run this sample code as-is and examine the output. 
//WARNING: Insufficient fuel!
//Crew & computer cleared.
//10, 9, 8, 7, 6, 5, 4, 3, 2, 1...
//Liftoff!
// Should the shuttle have launched? 

//No, there wasn't enough fuel

// Did it?

//yes, because after the program set launchReady to false, it reset it to true
//Basically, it either needed to abort checking other readiness factors, or create some && statements

// Do not worry about fixing the code yet, we will do that in the next series of exercises.

let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

if (launchReady) {
   console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
   console.log('Liftoff!');
} else {
   console.log('Launch scrubbed.');
}