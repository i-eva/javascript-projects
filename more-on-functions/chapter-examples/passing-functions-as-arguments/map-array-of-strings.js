// Example #1, named mapping function

let numsOne = [3.14, 42, 4811];

let timesTwo = function (n) {
    return n*2;
};

let doubledOne = numsOne.map(timesTwo);

console.log(numsOne);
console.log(doubledOne);


// Example #2, anon mapping function

let nums = [3.14, 42, 4811];

let doubled = nums.map(function (n) {
    return n*2;
});

console.log(doubled);

// TODO: Write a mapping function

let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];
let sliceInitial = function (name) {
    return name.slice(0,1);
};
// and pass it to .map()
let firstInitials = names.map(sliceInitial);

console.log(firstInitials);
