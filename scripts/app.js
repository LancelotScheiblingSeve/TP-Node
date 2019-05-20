const formSearch = document.getElementById('formSearch');
const inputCityName = document.getElementById('ville');
const results = document.getElementById('results');

formSearch.addEventListener('submit', event => {
    event.preventDefault()
    // console.log('Formulaire validé')
    const city = inputCityName.value;
    WeatherServise.getWeatherCity(city).then(weather => {
        results.innerHTML = `<div class="card" style="width: 22rem;">
                                <div class="card-body">
                                    <h5 class="card-title">${weather.name}, ${weather.sys.country}</h5>
                                </div>
                            </div>`;
    });
});