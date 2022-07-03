let weather = {
        fetchWeather: function() {
            fetch("https://api.open-meteo.com/v1/forecast?latitude= longitude= &hourly=temperature_2m,relativehumidity_2m,cloudcover_mid,windspeed_120m" + lat + lng)
                .then((response) => {
                    if (!response.ok) {
                        alert("No weather found.");
                        throw new Error("No weather found.");
                    }
                    return response.json();
                })
                .then((data) => this.displayWeather(data));
        },
        displayWeather: function(data) {
            const { name } = data;
            //const {icon, description} = data.weather[0];
            const { temp, humidity } = data.main;
            const { speed } = data.wind;
            /*document.querySelector(".city").innerText = "Weather in " + name;
            document.querySelector(".icon").src =
                "https://openweathermap.org/img/wn/" + icon + ".png";
            document.querySelector(".description").innerText = description;*/
            document.querySelector(".temp").innerText = temp + "°C";
            document.querySelector("humidity").innerText = "Humidity: " + humidity + "%";
            document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";

        }
    }
    // Get lat and lng values from input fields
var lat = document.getElementById('lat').value;
var lng = document.getElementById('lng').value;

// Validate user input as numbers
lat = (!isNumber(lat) ? 0 : lat);
lng = (!isNumber(lng) ? 0 : lng);

// Validate user input as valid lat/lng values
lat = latRange(lat);
lng = lngRange(lng);

// Replace input values
document.getElementById('lat').value = lat;
document.getElementById('lng').value = lng;

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function latRange(n) {
    return Math.min(Math.max(parseInt(n), -maxLat), maxLat);
}

function lngRange(n) {
    return Math.min(Math.max(parseInt(n), -180), 180);
}

//functions for lat and lng
function lat__input() {
    this.fetchWeather(document.querySelector(".lat".value));
}

function lng_input() {
    this.fetchWeather(document.querySelector(".lng".value));
}
//search button function
document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});