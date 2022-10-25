// Constatnts and variables 

const API_KEY = ""

// Function

function getWeather() {

const city_name = $('#city').val()
const state_code = $('#state').val()
const country_code = $('#country').val()

const BASE_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${city_name},${state_code},${country_code}&limit=1&appid=${API_KEY}`

//make request
$.ajax(BASE_URL).then((location) => {
    const lat = location[0].lat
    const lon = location[0].lon

    const API_KEY = ""

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    $.ajax(url).then((weather) => {

        console.log(weather.main)
        const desc = weather.weather[0].main
        const humidity = weather.main.humidity
        const feels_like = weather.main.feels_like
        const temp = weather.main.temp

    // render the data
    const $main = $("main")
    $main.empty()

    $main.html(`
    <h1>${desc}</h1>
    <h1>${temp}</h1>
    `)

    })

})}
