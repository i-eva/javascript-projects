// Declare and assign the variables below

let nameOfSpaceShuttle = 'Determination';

let shuttleSpeedMph = 17500;

let distanceToMarsKm = 225000000;

let distanceToMoonKm = 384400;

const milesPerKilometer = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof nameOfSpaceShuttle);

console.log(typeof shuttleSpeedMph);

console.log(typeof distanceToMarsKm);

console.log(typeof distanceToMoonKm);

console.log(typeof milesPerKilometer);

// Calculate a space mission below

// Create and assign a miles to Mars variable. 
// Multiply the distance to Mars in kilometers by the miles per kilometer.

let milesToMars = distanceToMarsKm * milesPerKilometer;

// Create and assign a shuttle flight duration variable in hours.
// Divide the miles to Mars by the shuttle’s speed.

let hoursToMars = milesToMars / shuttleSpeedMph;

// Create and assign a shuttle flight duration variable in days. 
// Divide the hours it will take to reach Mars by 24.

let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below

// Print to the screen a sentence that says "_____ will take ___ days to reach Mars."
// Fill in the blanks with the shuttle name and the calculated time.

console.log(nameOfSpaceShuttle, "will take", daysToMars, "days to reach Mars.");

// Calculate a trip to the moon below

// Create and assign a miles to the moon variable. 
// Multiply the distance to the moon in kilometers by the miles per kilometer.

let milesToMoon = distanceToMoonKm * milesPerKilometer;

// Create and assign a shuttle flight duration variable in hours.
// Divide the miles to the moon by the shuttle’s speed.

let hoursToMoon = milesToMoon / shuttleSpeedMph;

// Create and assign a shuttle flight duration variable in days. 
// Divide the hours it will take to reach the moon by 24.

let daysToMoon = hoursToMoon / 24;

// Print the results of the trip to the moon below

// Print to the screen a sentence that says "_____ will take ___ days to reach the moon."
// Fill in the blanks with the shuttle name and the calculated time.

console.log(nameOfSpaceShuttle, "will take", daysToMoon, "days to reach the moon.");