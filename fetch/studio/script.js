window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            console.log(json);
            const firstName = document.getElementById("firstName");
            const lastName = document.getElementById("lastName");
            const hours = document.getElementById("hoursInSpace");


        });
    });
});
