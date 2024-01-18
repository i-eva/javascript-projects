let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().

console.log(`${str}

The purpose of the parameter " " is to split a string 
into separate array items at each place where there is an
empty space between characters:

${str.split(" ")}
`);

//2) Use the join method on the array to identify the purpose of the parameter inside the ().

console.log(`${arr}

The purpose of the parameter " " is to create a string and 
insert a space at each place where there was once a comma between array items:

${arr.join(" ")}

`);

//3) Do split or join change the original string/array?

console.log(`The original string:
 ${str} 
 ...remains unchanged.
`);
console.log(`The original array: ${arr} 
...remains unchanged.
`);

//4) We can take a comma-separated string and convert it into a modifiable array. 
//Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";

//Used console.log to check conversion and alpabetization

//console.log(cargoHold.split(",").sort());

let cargoHoldUpdate = cargoHold.split(",").sort().join(",");

console.log(cargoHoldUpdate);

//ta DA!


