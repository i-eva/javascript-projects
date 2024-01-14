//Let's explain what we're doing in the output as we go along
let num = 1001;
console.log(`What type of data is ${num} as defined right now?`);
console.log(`\t${num} is a ${typeof(num)}.`);

//Returns 'undefined'.
console.log(`If we try to use a string method like \"variableName.length\", 
the output will be undefined:`);
console.log(`\t${num.length}`)

//Use type conversion to print the length (number of digits) of an integer.
num = (String(num));
console.log("So we use string conversion to use the length method.")
console.log(`After string conversion, what type of data is ${num}?`);
console.log(`\t${num} is a ${typeof(num)}.`);

//Use the length method to evaluate the string
console.log(`Using the length method,
\tthe string ${num} is
\t${num.length} characters long
\t${num.length} digits long`);

//Follow up: Print the number of digits in a DECIMAL value 
//(e.g. num = 123.45 has 5 digits but a length of 6).
let decimal = 1001.101;
console.log(`Now let's try converting ${decimal} to a string,
and use the method replace to eliminate the decimal character
from our character count:`)

decimal = (String(decimal));

let digits = decimal.replace('.', '');

console.log(`\tThe string ${decimal} is 
\t${decimal.length} characters long
\t${digits.length} digits long`);

//Experiment! What if num could be EITHER an integer or a decimal?
//Add an if/else statement so your code can handle both cases.

console.log(`Using the replace method eliminated the need
to use if/else statements in my code to handle either a whole
or a decimal number as user input.`)



