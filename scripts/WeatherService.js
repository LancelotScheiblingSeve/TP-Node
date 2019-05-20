const API_KEY = '01faa6f2f4e4c53200fdccf202bc3e0f';
const WeatherServise = {
    getWeatherCity(cityName){
        return fetch(`//api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${API_KEY}&units=metric&lang=fr`)
        .then(response => response.json());
    }
}