function reverse(str) {
  let lettersArray = str.split('');
  let reversedLettersArray = lettersArray.reverse();
  return reversedLettersArray.join('');
}

console.log(reverse("LaunchCode"));

let backwards = function(str) {
  let backwardsArray = str.split("").reverse().join("");
  return backwardsArray;
};

console.log(backwards("LaunchCode"));