//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'

console.log(`Start with ${language}, and 
\tend up with ${language.slice(0,1)}${language.slice(4,5)} 
\tby using 'slice'.`);

//2. Without using slice(), use method chaining to accomplish the same thing.

console.log(`Start with ${language}, and
\tend up with ${language.charAt(0).concat(language.charAt(4))}
\tby chaining 'charAt' and 'concat'.`);

//3. Use bracket notation and a template literal to print, 
//"The abbreviation for 'JavaScript' is 'JS'."

console.log(`The abbreviation for '${language}' is '${language.charAt(0).concat(language.charAt(4))}'`);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.

console.log(`Just for fun, chain 'charAt', 'concat' and 'toLowerCase'
and print the abbreviation '${language.charAt(0).concat(language.charAt(4))}'
here in lowercase: '${language.charAt(0).concat(language.charAt(4)).toLowerCase()}'`);

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';

console.log(`This variable is not written in title case: ${notTitleCase}. 
We can mess around with it, though...
Until we get this: ${notTitleCase.charAt(0).toUpperCase()}${notTitleCase.slice(1,6)}${notTitleCase.charAt(6).toUpperCase()}${notTitleCase.slice(7,11)}`);
