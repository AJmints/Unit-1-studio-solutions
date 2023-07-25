/* Chapter 27 studio */
/* Chapter 27 studio */
/* Chapter 27 studio */

// Requirements - 1
window.addEventListener("load", function() {

    // Requirements - 2
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function(response) {

        const jsonPromise = response.json();
        
        jsonPromise.then( function(json) {

            const target = document.getElementById("container")

            // Requirements - 3
            for(let astronauts of json) {
                let newAstro = `<div class="astronaut">
                                    <div class="bio">
                                    <h3>${astronauts.firstName} ${astronauts.lastName}</h3>
                                    <ul>
                                        <li>Hours in space: ${astronauts.hoursInSpace}</li>
                                        <li>Active: ${astronauts.active}</li>
                                        <li>Skills: ${astronauts.skills}</li>
                                    </ul>
                                    </div>
                                    <img class="avatar" src="${astronauts.picture}">
                                </div>`

                target.innerHTML = target.innerHTML + newAstro
            }

            console.log(target.innerHTML)
            
        })  
    });

    /* async fetch example */
    /* async fetch example */
    /* async fetch example */

    async function getAstronautInformation() {

        let response = await fetch("https://handlers.education.launchcode.org/static/astronauts.json");
        
        let data = await response.json();

        console.log(data)
    }

    getAstronautInformation();

})