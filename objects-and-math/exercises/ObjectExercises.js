let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () {return Math.floor(Math.random()*11)}
};

// Based on the two object literals provided in the starter code, 
// create new object literals for three more animals

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () {return Math.floor(Math.random()*11)}
};

let doggie = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () {return Math.floor(Math.random()*11)}
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function () {return Math.floor(Math.random()*11)}
};

// After you have created the other object literals, add the astronautID property to each one.
// done

// Add a move method to each animal object. The move method will select 
// a random number of steps from 0 to 10 for the animal to take. The number can be 0 as well as 10.
// Added

// Create an array to hold the animal objects.

let crew = [superChimpOne, superChimpTwo, salamander, doggie, waterBear];

// Print out the relevant information about each animal.
// Define a crewReports function to accomplish this. 
// When passed one of the animal objects, the function returns a template literal 
// with the following string: '____ is a ____. 
// They are ____ years old and ____ kilograms. Their ID is ____.'
let animal = "";
function crewReports(animal) {
   let report = (`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`);
   return report;
};
console.log(crewReports(doggie));

// Start an animal race!

function animalRace(racers) {
   let results = [], distance, counter;
   for (let i = 0; i < racers.length; i++){
       distance = 0;
       counter = 0;
       while(distance < 20){
       distance += racers[i].move();
       counter++;
       }
       results.push(`${racers[i].name} took ${counter} turns to take 20 steps.
       `);
   }
   return results;
  };

  console.log(animalRace(crew))