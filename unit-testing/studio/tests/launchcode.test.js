// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function() {

  test("Testing property 1 - organization : nonprofit", function() {
    let result = (launchcode.organization);
    expect(result).toBe("nonprofit");
  });

  test("Testing property 2 - executiveDirector : Jeff", function() {
    let result = (launchcode.executiveDirector);
    expect(result).toBe("Jeff");
    });
  
  test("Testing property 3 - percentageCoolEmployees: 100", function() {
    let result = (launchcode.percentageCoolEmployees);
    expect(result).toBe(100);
    });

  test("Testing property 4 - programsOffered : [array]"), {
    let result = (launchcode.programsOffered);
    expect(result).toBe("[ 'Web Development', 'Data Analysis', 'Liftoff' ]");    
  }

  });

  