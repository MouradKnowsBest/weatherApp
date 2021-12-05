import {getWeatherByLocation} from "./modules/getWeatherByLocation.js"


function main () {

    const form = document.getElementById("form");

    form.addEventListener("submit", (event) => {

        event.preventDefault();
    
        const userInput = search.value;

        console.log(userInput)
    
        if(userInput) {
            getWeatherByLocation(userInput)
        }
    })
    
}

main ()