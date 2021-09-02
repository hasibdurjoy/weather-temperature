const apiKey = `cae19b77c7c0bbb9c1e95a25929d5ebe`;

const showCurrentWeather = () => {
    const city = document.getElementById('city-name-input');
    const cityName = city.value;
    city.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

const setText = (id, cityNameText) => {
    document.getElementById(`${id}`).innerText = `${cityNameText}`;
}
const displayTemperature = temperature => {
    setText('city-name', temperature.name);
    setText('temparature', temperature.main.temp);
    setText('weather-mode', temperature.weather[0].main);

    const iconUrl = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const icon = document.getElementById('weather-icon');
    icon.setAttribute('src', iconUrl);
}
