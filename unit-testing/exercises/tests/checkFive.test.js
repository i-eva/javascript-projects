const checkFive = require('../checkFive.js');

describe("checkFive", function(){

   test("Descriptive feedback...", function(){
      let output = checkFive(2);
      expect(output).toEqual("2 is less than 5.");
   });

});



// describe("checkFive", function(){

//    test("Returns 'The number is equal to 5' when user enters 5", function() => {
//     let num = 5;
//     expect(num === 5).toBe(true)
//    });

// });