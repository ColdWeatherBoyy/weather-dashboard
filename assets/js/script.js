// DOM Dependencies
// for submit eventlistener
var submitBtn = document.querySelector(".submit-btn");


// for dayjs
var currentDate = dayjs()
var formatDate = dayjs().format("M/DD/YY")
var dateField = document.querySelector("#current-date");
var forecastDatesArr = document.querySelectorAll(".forecast-date");

// var recentSearches = document.querySelectorAll(".recentSearches");
// var recentSearchesList = document.querySelector('.recent-searches')


// Data


// function to grab values from lcoalstorage to print on page
// for (let i = 0; i < localStorageArr.length; i++) {
//   var searchLi = document.createElement("li");
//   var searchBtn = document.createElement("button");
  
//   searchBtn.textContent = localStorage.getItem(i);

//   recentSearchesList.appendChild(searchLi);
//   searchLi.appendChild(searchBtn);
  // Need to make sure styling is right and also ensure this pulls from local Storage correctly.
// }

//  Function

  //dayJS
dateField.textContent = formatDate;

for (let i = 0; i < forecastDatesArr.length; i++) {
  forecastDatesArr[i].textContent = currentDate.add(i+1, 'day').format("M/DD/YY");
}

  // API function grab

    // prints to main box
    // prints five day forecast
    // embedded functions for
      // saving to local storage
      // printing to recent searches



// User Interactions
// event listener for submit btn with complex function
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("YO");
  var locationValue = event.target.previousElementSibling.value;
  
  
  todayWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q="+locationValue+"&appid=561f93b4cd27217b081260550dc09c48&units=imperial"
  forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q="+locationValue+"&appid=561f93b4cd27217b081260550dc09c48&units=imperial"

  fetch(todayWeatherURL)
    .then(function (response) {
      // this is designed to check whether the request can be completed to validate location entered by user. It is understand that this will also activate if the API is down.
      if (response.status !== 200) {
        return Promise.reject(new Error("Not a valid location, please try again"));
      } else {
        return response.json();
      }
    })
    .then(getAndPrintCurrentWeather, alert)
    .then(function () {
      return fetch(forecastURL)
    })
    .then(function (response) {
      return response.json();
    })
    .then(getAndPrintForecastWeather);
    // getAndPrintForecastWeather
  });

// function that gets current weather and prints it
function getAndPrintCurrentWeather(data) {
  var locationTitle = data.name;
  var currentTemp = data.main.temp;
  var currentHumidity = data.main.humidity;
  var currentWind = data.wind.speed;
  var weatherIcon = data.weather[0].icon;
  var currentTitle = document.querySelector(".current-title");
  var currentTempSpan = document.querySelector("#current-temp");
  var currentWindSpan = document.querySelector("#current-wind");
  var currentHumiditySpan = document.querySelector("#current-humidity");

  var weatherImage = document.createElement("img");


  currentTitle.textContent = `${locationTitle}'s Weather, ${formatDate}`;
  currentTempSpan.textContent = `${currentTemp} °F`;
  currentWindSpan.textContent = `${currentWind} MPH`;
  currentHumiditySpan.textContent = `${currentHumidity}%`;

  weatherImage.setAttribute("src", `http://openweathermap.org/img/wn/${weatherIcon}.png`);

  currentTitle.appendChild(weatherImage); 
}

function getAndPrintForecastWeather(data) {
  console.log(data.list);
  for (i = 0; i < 5; i++) {
    let z = 4+(i*8);
    console.log(data.list[z]);
    console.log(z);
    var forecastTemp = data.list[z].main.temp;
    var forecastWind = data.list[z].wind.speed;
    var forecastHumidity = data.list[z].main.humidity;
    var forecastIcon = data.list[z].weather[0].icon;

    var forecastTempsArr = document.querySelectorAll(".forecast-temp");
    var forecastWindsArr = document.querySelectorAll(".forecast-wind");
    var forecastHumidityArr = document.querySelectorAll(".forecast-humidity");
    var forecastIconsArr = document.querySelectorAll(".forecast-icon");

    var forecastImage = document.createElement("img");

    forecastImage.setAttribute("src", `http://openweathermap.org/img/wn/${forecastIcon}.png`)
    
    forecastTempsArr[i].textContent = `${forecastTemp} °F`;
    forecastWindsArr[i].textContent = `${forecastWind} °F`;
    forecastHumidityArr[i].textContent = `${forecastHumidity} °F`;
    forecastIconsArr[i].appendChild(forecastImage);
  }
}

// use event delegation to create an event listener on the UL that slides to the appropriate button and activates it
