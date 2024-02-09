const checkFive = require('../checkFive.js');

describe("checkFive", function(){

   test("Returns num 'is less than 5' when user enters num < 5", function() {
      let outputLess = checkFive(2);
      expect(outputLess).toEqual("2 is less than 5.");
   });
   
   test("Returns num 'is equal to 5' when user enters 5", function() {
        let outputEqual = checkFive(5);
        expect(outputEqual).toBe("5 is equal to 5.")
   });

   test("Returns num 'is greater than 5' when user enters 5", function() {
        let outputGreat = checkFive(7);
        expect(outputGreat).toBe("7 is greater than 5.")
    });

});



// describe("checkFive", function(){



// });
 