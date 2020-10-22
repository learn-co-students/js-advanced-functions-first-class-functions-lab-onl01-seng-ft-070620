const returnFirstTwoDrivers = function(drivers) {
  const firstTwoDrivers = drivers.slice(0, 2)
  return firstTwoDrivers
}

const returnLastTwoDrivers = function(drivers) {
  const lastTwoDrivers = drivers.slice(Math.max(drivers.length - 2, 0))
  return lastTwoDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
  return function(fare) { return fare * int }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, func) {
  return func(arrayOfDrivers)
}