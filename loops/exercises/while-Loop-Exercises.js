const input = require('readline-sync');

//Define three variables for the LaunchCode shuttle - one for the starting fuel level, 
//another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let fuelStart
let astroNum
let shutAlt

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. 
  //Validate that the user enters a positive, integer value 
  //greater than 5000 but less than 30000. */

fuelStart = input.question("Enter the starting fuel level: ");
fuelStart = Number(fuelStart);

while (fuelStart <= 0 && fuelStart > 5000 && fuelStart < 30000) {
   fuelStart = input.question('Invalid input. Please enter the starting fuel level:');
   fuelStart = Number(fuelStart);
}

//b. Use a second loop to query the user for the number of astronauts 
//(up to a maximum of 7). Validate the entry.
  
  
  
  
//c. Use a final loop to monitor the fuel status and 
//the altitude of the shuttle. Each iteration, 
//decrease the fuel level by 100 units for each astronaut aboard. 
//Also, increase the altitude by 50 kilometers.



/*Exercise #5: Output the result with the phrase, 
//“The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, 
//add “Orbit achieved!” Otherwise add, 
//“Failed to reach orbit.”*/
