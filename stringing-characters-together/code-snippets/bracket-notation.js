let jsCreator = "Brendan Eich";

console.log(jsCreator[-1]);
console.log(jsCreator[42]);

let phrase = "JavaScript rocks!";
console.log(phrase.length);
console.log(phrase.length - 8);
console.log(phrase[9]);
console.log(phrase[phrase.length - 8]);

let cityName = "Vienna";
console.log(cityName.length);

let stateName ="Virginia";
console.log(stateName.length);

let separator = ", ";
console.log(separator.length);

location = cityName + separator +  stateName;
console.log(location.length);

let word = 'JavaScript';
console.log(word.slice(4).toUpperCase())

let language = "JavaScript";
language.replace('J', 'Gu');
language.slice(0,5);
console.log(language);
console.log(language.slice(1,6));

let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);

let example = "The dog's favorite toy is a stuffed hedgehog, said Chris";
console.log(example.length);
let escapeExample = "\"The dog's favorite toy is a stuffed hedgehog,\" said Chris";
console.log(escapeExample.length);

console.log('Launch\nCode');