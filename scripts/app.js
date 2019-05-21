const formSearch = document.getElementById('formSearch');
const inputCityName = document.getElementById('ville');
const results = document.getElementById('results');

formSearch.addEventListener('submit', event => {
    event.preventDefault()
    // console.log('Formulaire validé')
    const city = inputCityName.value;
    WeatherServise.getWeatherCity(city).then(weather => {
        console.log(weather);
        //results.innerHTML = `<div class="card" style="width: 22rem;">
        //                        <div class="card-body">
        //                           <h5 class="card-title">${weather.name}, ${weather.sys.country}</h5>
        //                        </div>
        //                    </div>`;
        // results.innerHTML = `<div class="card" style="width: 22rem;">
        //         <div class="card-body">
        //             ${weather.weather.map(w => (
        //                 `<img src="http://openweathermap.org/img/w/${w.icon}.png" class="float-right">`
        //             )).join('')}
        //             <h5 class="card-title">${weather.name}, ${weather.sys.country}</h5>
        //             <p class="card-title">${weather.main.temp}°C,</p>
        //             <p class="card-title">Max : ${weather.main.temp_max}°C,</p>
        //             <p class="card-title">Min : ${weather.main.temp_min}°C</p>
        //         </div>
        // </div>`;
        results.innerHTML = `<div class="card" style="width: 22rem;">
                        <div class="card-body">
                            ${weather.weather.map(w => (
                                `<img src="http://openweathermap.org/img/w/${w.icon}.png" alt="${w.description}" class="float-right">`
                            )).join('')}
                            <h5 class="card-title">${weather.name}, ${weather.sys.country}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">
                                ${weather.weather.map(w => (
                                    `<strong>${w.description}</strong>`
                                )).join(', ')}
                                <br>
                            </h6>
                            <p class="card-text">Temperature : ${weather.main.temp}°C</p>
                            <a href="#" class="card-link" id="previsions" data-city-id="${weather.id}">Afficher les prévisions</a>
                        </div>
                    </div>`;
    });
});

results.addEventListener('click', event => {
    if(!event.target || !event.target.matches('#previsions')) return;
    alert()
})