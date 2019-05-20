const formSearch = document.getElementById('formSearch');
const inputCityName = document.getElementById('ville');
const results = document.getElementById('results');

formSearch.addEventListener('submit', event => {
    event.preventDefault()
    // console.log('Formulaire validé')
    const city = inputCityName.value;
    WeatherServise.getWeatherCity(city).then(weather => {
        //results.innerHTML = `<div class="card" style="width: 22rem;">
        //                        <div class="card-body">
        //                           <h5 class="card-title">${weather.name}, ${weather.sys.country}</h5>
        //                        </div>
        //                    </div>`;
        results.innerHTML = `<div class="card" style="width: 22rem;">
                                ${weather.weather.map(w => (
                                    `<img src="http://openweathermap.org/img/w/${w.icon}.png" class="float-right">`
                                )).join('')}
                                
                                <div class="card-body">
                                    <h5 class="card-title">${weather.name}, ${weather.sys.country}</h5>
                                </div>
                            </div>`;
    });
});