const form = document.querySelector("#form");
const input = document.querySelector("#input");
const div = document.querySelector(".container")

const cities = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(
    `https://api.weatherapi.com/v1/current.json?key=c69ca77ab75a4398bdc165810260301&q=${input.value}&aqi=no`
  )
    .then((res) => res.json())
    .then((res) => {
        console.log(input.value);
        console.log(res);
      cities.unshift(res);
      renderCities();
      // input.value = "";
    })
    .catch((err) => {
        console.log(err);
        
    });
});

function renderCities() {
  div.innerHTML = "";

  for (let i = 0; i < cities.length; i++) {
    div.innerHTML += `
      <div class="city">
        <div class="left">
          <h2>${cities[i].location.name}, ${cities[i].location.country}</h2>
          <p class="condition">${cities[i].current.condition.text}</p>
          <p class="temp">${cities[i].current.temp_c}°C</p>
          <p class="temp">${cities[i].current.last_updated}</p>
        </div>

        <div class="right">
          <img src="https:${cities[i].current.condition.icon}" alt="weather-icon">
        </div>
      </div>
    `;
  }
}

