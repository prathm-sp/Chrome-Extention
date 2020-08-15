 var button = document.getElementById('btn');
 button.addEventListener('click',getWeather);
 function getWeather() {
    let city = document.getElementById('input').value;
    fetch("https://api.weatherstack.com/current?access_key=d549b9978d5291024eb42dbd5e8a2870&query=" + city)
        .then(response => response.json())
        .then(data => displayWeather(data))
}
function displayWeather(data) {
    document.getElementById('input').value = data.location.name + "," + data.location.region + "," + data.location.country;
    document.getElementById('temp').innerHTML = data.current.temperature + "°" + "C";
    document.getElementById('p1').innerHTML = "wind speed: " + data.current.wind_speed + "kmph";
    document.getElementById('p2').innerHTML = "precip: " + data.current.precip + "mm";
    document.getElementById('p3').innerHTML = "pressure: " + data.current.pressure + "mb";
}