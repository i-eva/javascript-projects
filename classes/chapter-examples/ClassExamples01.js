//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass, role){
     this.name = name;
     this.age = age;
     this.mass = mass;
     this.role = role;
   }
}

let fox = new Astronaut('Fox', 7, 12, "chef");

console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';

console.log(fox);
console.log(fox.age, fox.color);

//Try modifying or adding properties below.

fox.role = "Ninja Master";
fox.dream = "Retire to Maui";

console.log(fox);
console.log(fox.role, fox.dream);
