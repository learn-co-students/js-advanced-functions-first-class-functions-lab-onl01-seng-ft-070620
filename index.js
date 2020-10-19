// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
    return [arr[0], arr[1]]
}

const returnLastTwoDrivers = function(arr) {
    const l = arr.length
    return [arr[l-2], arr[l-1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function(fare) {
        return fare * int
    }
}

const ans = createFareMultiplier

function fareDoubler(fare) {
    return ans(2)(fare)
}

function fareTripler(fare) {
    return ans(3)(fare)
}

function selectDifferentDrivers(arrayOfDrivers, f) {
    return f(arrayOfDrivers)
}