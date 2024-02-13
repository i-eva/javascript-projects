// Use terminal commands to see what happens when we call Astronaut 
// but do not pass in 3 arguments.

//The code returns "undefined" for the missing argument

// Next, set default values for 1 or more of the parameters in constructor.

// The defaults we set (this.age = 90, this.mass=100, solved the "undefined"
// output for this.mass, but overrode the input of 120 for age.)

class Astronaut {
   constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
}

let tortoise = new Astronaut('Speedy', 120);

console.log(tortoise.name, tortoise.age, tortoise.mass);

// What happens if we call Astronaut and pass in MORE than 3 arguments? TRY IT!

// First I restored the defaults this.age to age and this.mass to mass. 

let tortoise2 = new Astronaut('Flash', 190, 4651, "Plumber");

console.log(tortoise2.name, tortoise2.age, tortoise2.mass, tortoise2.role);

// The extra value, "Plumber," did not print. Instead the output was "undefined"
