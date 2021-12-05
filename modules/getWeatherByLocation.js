import {API_KEY} from "/modules/links.js"

export async function getWeatherByLocation(userInput){

    const getWeatherData = await getData(userInput)

    createWeatherDiv(getWeatherData, userInput)
 
     }


function createWeatherDiv(weatherData, userInput) {

        main.innerHTML = "";
        const weather = document.createElement("div");
        weather.classList.add("weather"); 
    
        weather.innerHTML = `
    
        <div class="weatherDiv">
            <small> ${userInput} , ${weatherData.sys.country}  </small>
            <h1 style="color:rgb(218, 114, 18)"> ${celsiusConverter(weatherData.main.temp) } °C 
            <img src="https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png" alt="" /></h1> 
            <small>   ${weatherData.weather[0].description} </small>
        </div>
    
        `;
    
        main.appendChild(weather);
    }


function celsiusConverter(temperature){
        return parseInt(temperature-273.15.toFixed(2));
    }  
    
async function getData(userInput){

    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${API_KEY}`;

    const resp = await fetch(API_URL, {origin: "cors"});
    const respData = await resp.json();

    return respData
}    