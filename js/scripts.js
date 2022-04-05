// Business Logic ---------//

const movieOne = "star wars";
const movieTwo =  "the bunny one"
let price = 10;

function ticketPrice(price, movieSelection) {
  if (movieSelection === "star wars") {
    return price - 4;
  } else if (movieSelection === "the bunny one") {
    return price + 2;
  } else {
  return price; 
  } 
} 
const matinee = "noon"

function timeOfDay(price, timeSelection) {
  if (timeSelection === "noon") {
    return price - 2;
  } else {
    return price;
  }
};

function ageOfUser(price, age) {
  if (age <= 12) {
    return price - 2;
  } else if (age <= 59) {
    return price;
  } else if (age >= 60) {
    return price - 1;
  } else {
  return price;
  }
};







// User Interface Logic --------------
$(document). ready(function() {



});