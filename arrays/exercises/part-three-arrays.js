//start

let cargoHold = [1138, 'space suits', 'parrot', 'instruction manual', 'meal packs', 'space tether', '20 meters'];

console.log(`The cargo hold contains ${cargoHold.indexOf('20 meters')+1} items.`);

console.log(`The cargo hold contains:
 ${cargoHold}.
 `);

//Use splice to make the following changes to the cargoHold array. 
//Be sure to print the array after each step to confirm your updates.

//1) Insert the string 'keys' at index 3 without replacing any other entries.

 cargoHold.splice(3, 0, 'keys');
 console.log(`The cargo hold contains ${cargoHold.indexOf('20 meters')+1} items.`);
 console.log(`The cargo hold contains:
 ${cargoHold}.
 `);

//2) Remove ‘instruction manual’ from the array. 
//(Hint: indexOf is helpful to avoid manually counting an index).

console.log(`The cargo hold contains 'instruction manual' in cargo bay #${cargoHold.indexOf('instruction manual')}.`);
console.log(` Removing 'instruction manual'...${cargoHold.splice(4,1)} removed. 

The cargo hold contains ${cargoHold.indexOf('20 meters')+1} items. 
The cargo hold contains:
 ${cargoHold}.
 `);

//3) Replace the elements at indexes 2 - 4 with the items ‘cat’, ‘fob’, and ‘string cheese’.

cargoHold.splice(2, 3, 'cat', 'fob', 'string cheese');
console.log(`The cargo hold contains ${cargoHold.indexOf('20 meters')+1} items.`);
console.log(`The cargo hold contains:
 ${cargoHold}.
`);
