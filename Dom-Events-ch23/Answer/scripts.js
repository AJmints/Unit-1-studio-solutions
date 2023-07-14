/* The Requirements, question 1 */
/* The Requirements, question 1 */
/* The Requirements, question 1 */

window.addEventListener("load", function() {

let flightStatus = document.getElementById("flightStatus")
let flightDisplay = document.getElementById("flightDisplay")
let shuttleBackground = document.getElementById("shuttleBackground")
let rocket = document.getElementById("rocket")
let up = document.getElementById("up")
let down = document.getElementById("down")
let right = document.getElementById("right")
let left = document.getElementById("left")
let spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
let takeoff = document.getElementById("takeoff")
let landing = document.getElementById("landing")
let missionAbort = document.getElementById("missionAbort")

/* The Requirements, question 2 */
/* The Requirements, question 2 */
/* The Requirements, question 2 */

takeoff.addEventListener("click", function(event){

    if (window.confirm("You sure you wanna take off?")) {
       shuttleBackground.style.background="blue";
       spaceShuttleHeight.innerHTML = "10000"
       flightStatus.innerHTML = "shuttle in flight"
    } else {
        window.alert("Flight was cancelled.")
    }
    
});

/* The Requirements, question 3 */
/* The Requirements, question 3 */
/* The Requirements, question 3 */

landing.addEventListener("click", function(event) {
    window.alert("The shuttle is landing. Landing gear engaged.")
    flightStatus.innerHTML = "The shuttle has landed"
    shuttleBackground.style.background = "green";
    spaceShuttleHeight.innerHTML = "0"
})

/* The Requirements, question 4 */
/* The Requirements, question 4 */
/* The Requirements, question 4 */

missionAbort.addEventListener("click", function(event) {
    if (window.confirm("Confirm that you want to abort the mission")) {
        flightStatus.innerHTML = "Mission Aborted"
        shuttleBackground.style.background = "green";
        spaceShuttleHeight.innerHTML = "0"
    } else {
        window.alert("Resuming mission")
    }
})

/* The Requirements, question 5 */
/* The Requirements, question 5 */
/* The Requirements, question 5 */

let xAxis = "245";
let yAxis = "0"
rocket.style.top = `${xAxis}px`;
rocket.style.left = `${yAxis}px`

up.addEventListener("click", function() {
    xAxis = Number(xAxis) - 10
    rocket.style.top = `${xAxis}px`
    spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000
})
down.addEventListener("click", function() {
    xAxis = Number(xAxis) + 10
    rocket.style.top = `${xAxis}px`
    spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000
})
left.addEventListener("click", function() { 
    yAxis = Number(yAxis) - 10
    rocket.style.left = `${yAxis}px`
})
right.addEventListener("click", function() {
    yAxis = Number(yAxis) + 10
    rocket.style.left = `${yAxis}px`
})
})


