// pry = require('pryjs')

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(integer) {
    return (fare) => fare * integer
}

const fareDoubler = (fare) => createFareMultiplier(2)(fare)
const fareTripler = (fare) => createFareMultiplier(3)(fare)

// const selectDifferentDrivers = function(drivers, afunction) {
//     return afunction(drivers)
// }
const selectDifferentDrivers = (drivers, afunction) => afunction(drivers)
