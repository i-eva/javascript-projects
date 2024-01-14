let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.

//console.log(typeof(num));
num = (String(num));

//console.log(typeof(num));
console.log(`The number ${num} is ${num.length} characters long`);
console.log(`The number ${num} is ${num.length} digits long`);

//Follow up: Print the number of digits in a DECIMAL value 
//(e.g. num = 123.45 has 5 digits but a length of 6).
let decimal = 1001.101;
decimal = (String(decimal));

let digits = decimal.replace('.', '');

console.log(`The number ${decimal} is ${decimal.length} characters long`);
console.log(`The number ${decimal} is ${digits.length} digits long`);

//Experiment! What if num could be EITHER an integer or a decimal?
//Add an if/else statement so your code can handle both cases.



