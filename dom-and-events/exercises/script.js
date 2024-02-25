function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
     });
    missionAbort.addEventListener('mouseover', event => {
        button.target = {
            color: red};
     });
}

window.addEventListener("load", init);
