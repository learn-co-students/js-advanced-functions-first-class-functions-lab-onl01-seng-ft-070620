// declare a variable assigned to an anonymous function
// the anonymous function accepts an array amd returns its first two elements
const returnFirstTwoDrivers = function(arr) {
  return arr.slice(0, 2)
}

// same as above but returns the last two array elements
// using an arrow function instead of traditional syntax
const returnLastTwoDrivers = arr => {
  return arr.slice(-2)
}

// defining an array with the above functions as elements
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// function that takes a multiplier and returns an inner function
// the inner function takes a fare and returns that multiplied by the multiplier
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier
  }
}

// define a function that invokes createFareMultiplier()
// and returns a doubled fare
const fareDoubler = function(fare) {
  return createFareMultiplier(2)(fare)
}

// same as above, but tripled instead of doubled... and using an arrow function
const fareTripler = fare => {
  return createFareMultiplier(3)(fare)
}

// define a function that takes an array and a function
// returns the result of passing the given array into the given function 
function selectDifferentDrivers(arr, func) {
  return func(arr)
}
