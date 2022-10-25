// Constatnts and variables 

const API_KEY = "3a54cc9a2fc1dbee7598daf681cddb50"
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?"

// Functions 

//q={city name}&appid={API key}

$.ajax(`http://api.openweathermap.org/geo/1.0/direct?q=New York,NY,US&limit=1&appid=3a54cc9a2fc1dbee7598daf681cddb50`).then((location) => {
    const lat = location[0].lat
    const lon = location[0].lon
    const API_KEY = "3a54cc9a2fc1dbee7598daf681cddb50"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    $.ajax(url).then((weather => {
        console.log(weather.main)
        const desc = weather.weather[0].main
        const humidity = weather.main.humidity
        const feels_like = weather.main.feels_like
        const temp = weather.main.temp

        
    }))
})
