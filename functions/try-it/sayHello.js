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