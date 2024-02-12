function divide(numerator, denominator) {
    if (denominator === 0) {
       throw Error('You cannot divide by zero!');
    }
    return numerator/denominator;
 };

 console.log(divide(100, 50));
 console.log(divide(100, 20));
 console.log(divide(100, 0));