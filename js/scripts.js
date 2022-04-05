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
//Business logic for tickets
function Tickets(price, age, timeOfDay, movieSelection) {
  this.price = price;
  this.age = age;
  this.timeOfDay = timeOfDay;
  this.movieSelection = movieSelection;  
};

// Tickets.prototype.ageOfUser(age){
//   if (this.age <= 12) {
//     return this.price - 2;
//   } else if (this.age <= 59) {
//     return this.price;
//   } else if (this.age >= 60) {
//     return this.price - 1;
//   } else {
//   return this.price;
//   }
// };




// User Interface Logic --------------
$(document). ready(function() {



});