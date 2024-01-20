// Experiment with this loop by modifying each of the following: the variable initialization, 
// the boolean condition, and the update expression.

console.log(`This is the textbook example of a for loop. 
   The variable is initialized as 0.
   The boolean condition is less than 51.
   The update expression is i++`);
for (let i = 0; i < 51; i++) {
   console.log(i);
 }
 console.log(`Modifying the variable initialization from 
 0 to 46 produces a different result.`);
 for (let i = 46; i < 51; i++) {
  console.log(i);
}
console.log(`Modifying the boolean condition to 
1 < 61 produces a different result.`);
for (let i = 46; i < 61; i++) {
 console.log(i);
}
console.log(`Modifying the boolean condition to
24 < i and modifying the update expression from 
i++ to i-- produces a different result.`);
for (let i = 46; 24 < i; i--) {
 console.log(i);
}