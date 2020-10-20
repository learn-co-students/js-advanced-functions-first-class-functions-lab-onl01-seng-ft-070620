const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {    
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(number) {
    return function(value) {
       return number * value
    }
}
// invoked via createFareMultiplier(number)(value)

const fareDoubler = createFareMultiplier(2)
// const fareDoubler = function(number) {
//     return createFareMultiplier(number) * 2
// } 

const fareTripler = createFareMultiplier(3)
// const fareTripler = function(number) {
//     return createFareMultiplier(number) * 3
// } 

const selectDifferentDrivers = function(drivers, selectingDrivers) {
    return selectingDrivers(drivers)
}