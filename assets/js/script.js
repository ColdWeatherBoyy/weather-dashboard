// DOM Dependencies
var submitBtn = document.querySelector(".submit-btn");
// var recentSearches = document.querySelectorAll(".recentSearches");
var recentSearchesList = document.querySelector('.recent-searches')
// var localStorageArr = []; //create an array to pull all localStorage values and print to LIs. 
// This may be the wrong way. Might make more sense to assign values 0-9 to local storage to pull more naturally

// Data


// function to grab values from lcoalstorage to print on page
for (i = 0; i < localStorageArr.length; i++) {
  var searchLi = document.createElement("li");
  var searchBtn = document.createElement("button");
  
  searchBtn.textContent = localStorage.getItem(i);

  recentSearchesList.appendChild(searchLi);
  searchLi.appendChild(searchBtn);
  // Need to make sure styling is right and also ensure this pulls from local Storage correctly.
}

//  Function
  // API function grab
    // prints to main box
    // prints five day forecast
    // embedded functions for
      // saving to local storage
      // printing to recent searches



// User Interactions
// event listener for submit btn with complex function


// use event delegation to create an event listener on the UL that slides to the appropriate button and activates it
