//Part Two Section One

let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";

// First, print out the dna strand in it's current state.

console.log(`There are errors in this string: 
\t${dna}`);

//1) Use the .trim() method to remove the leading and trailing whitespace, then print the result.

dnaFix = dna.trim();
console.log(`First, let's trim away the leading and trailing white spaces:
\t${dnaFix}`);

//2) Change all of the letters in the dna string to UPPERCASE, then print the result.

dnaFix = dnaFix.toUpperCase();
console.log(`Next, let's capitalize all letters:
\t${dnaFix}`);

//3) Note that after applying the methods above, the original, flawed string is still stored in dna. 
//To fix this, we need to reassign the changes to back to dna.
//Apply these fixes to your code so that console.log(dna) prints 
//the DNA strand in UPPERCASE with no whitespace.

console.log(`Let's compare the original string with the repaired string:`);

console.log(`\tOriginal: ${dna}`);
console.log(`\tRepaired: ${dnaFix}`);

console.log(`\nLookin' good!\nOK time to update our original variable with the repairs.`)
dna = dnaFix

//Part Two Section Two

let dnaTwo = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";

//1) Replace the gene "GCT" with "AGG", and then print the altered strand.

console.log(`\nRight. Next steps. \nReplace GCT with AGG and check if CAT is found:`);
console.log(`\t${dnaTwo.replace("GCT", "AGG")}`);

//2) Look for the gene "CAT" with ``indexOf()``. 
//If found print, "CAT gene found", 
//otherwise print, "CAT gene NOT found".

if (dna.indexOf('CAT')){
    console.log(`\tCAT gene found.`);
    } else {
    console.log(`\tCAT gene NOT found.`);
    }

//3) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.

console.log(`Use slice method to print the 5th gene: \n\t${dnaTwo.slice(16,19)}`);

//4) Use a template literal to print, "The DNA strand is ___ characters long."

console.log(`Count length:\n\tThe DNA strand is ${dnaTwo.length} characters long.`);

//5) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.

dnaTwo = dnaTwo.toLowerCase()
console.log(`Now print '${dnaTwo.slice(4,7)}o ${dnaTwo.slice(40,43)}'`);
