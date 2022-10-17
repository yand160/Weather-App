let weather = {
  "c87efc0b2a184897c433833636f55f56"
  fetchWeather: function (city){
    fetch().then(response) => response.json())
    .then((data) => this.displayWeather (data));
  }
};
displayWeather: function(data) {
const { name } = data;
const { icon, description } = data.weather[0];
const { temp, humidity } = data.main;
const { speed } = data.wind;
console.log(name,icon,description,temp,humidity,speed);
document.querySelector(".city").innerText = "Weather in" + name;
document.querySelector(".icon").src = "icon";
document.querySelector(".description").innerText =  description;
document.querySelector(".temp").innerText = temp + "°C";
document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
document.querySelector(".weather").classList.remove("loading");

document.body.style.backgroundImage = "url( + city + )
}

search: function() {
this.searchWeather(document.querySelector(".search-bar").value);
}

document.querySelector(".search button").addEventListener("click", function () {
weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event){
if(event.keyup == "Enter") {
   weather.search(); 
}
})

weather.fetchWeather("New York");


