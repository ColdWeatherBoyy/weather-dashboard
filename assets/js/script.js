// DOM Dependencies
// for submit eventlistener
var submitBtn = document.querySelector(".submit-btn");

// for dayjs
let currentDate = dayjs()
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
dateField.textContent = currentDate.format("M/DD/YY");;

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
  console.log("YO")
  var locationValue = event.target.previousElementSibling.value;
  
  requestURL = "https://api.openweathermap.org/data/2.5/weather?q="+locationValue+"&appid=561f93b4cd27217b081260550dc09c48"
  fetch(requestURL)
    .then(function (response) {
      if (response.status !== 200) {
        alert("Not a valid location, please try again");
      } else {
        return response.json();
      }
    })
    .then(function (data) {
      console.log(data);
  });

});


// use event delegation to create an event listener on the UL that slides to the appropriate button and activates it
