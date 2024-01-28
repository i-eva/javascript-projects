/* Suppose we want to log a message with a 5 second delay. 
Since five seconds is 5000 milliseconds 
(1 second = 1000 milliseconds), we can do so like this:
*/

function printMessage() {
    console.log("The future is less now than before!");
}

setTimeout(printMessage, 9000);

// As an anon func:

setTimeout(function () {
    console.log("The future is now!");
}, 5000);

