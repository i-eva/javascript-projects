// Question: What is printed when this program  (lines 2-4) runs?
function sayHello() {
   console.log("Hello, World!");
}
// Answer: my guess is nothing, because the function is never called
// Nothing appered, so we'll try again and add a call line:

sayHello();

// This time, console.log was able to do it's thing

// Question: What does the following code output?
function plusTwo(num) {
   return num + 2;
}

let a = 2;

for (let i=0; i < 4; i++) {
   a = plusTwo(a);
}

console.log(a);

//Answer: My guess is a in this for loop reaches 8
//Alas I began with the value 2 instead of 4. The correct answer is 10.
// a should become 4 after round 0, then 6, then 8 on round 2, not three

// Question: what does the following function return?
// Answer: undefined (because the function is not returned)
// Answer: once I added a return (line 42)

// Question: what does function repeater output?
// Answer: BobBob

function repeater(str) {
   let repeated = str + str;
   console.log(repeated);
 
}

repeater('Bob');

let ret = repeater();
console.log(ret);

// I get both NaN and undefined

// Question: what does the following code output?
// Answer: my guess is "false"

let num = 42;

function isEven (num) { 
    return num % 2 === 0; 
}

console.log(isEven(43));

// I was correct! How about that

// What is the output of the following code?

let message = "Hello, World!";

function printMessage() {
    console.log(message);
}

printMessage();
message = "Goodbye";
printMessage();

// The output is whatever is last defined, so in this case,
// we get both Hello, World! and Goodbye