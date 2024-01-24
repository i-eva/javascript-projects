// Test the function with a few cases, such as str = "notlob" , "racecar"
let str = "bolton";

function reverse(str) {
   return str.split("").reverse().join("");
}
console.log(reverse(str));

function isPalindrome(str) {
   return reverse(str) === str;
}
console.log(isPalindrome(str));
