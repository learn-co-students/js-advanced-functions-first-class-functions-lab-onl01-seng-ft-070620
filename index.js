const returnFirstTwoDrivers = (arr) => {
    let firstTwo = []
    for (let i = 0; i < 2; i++) {
        firstTwo.push(arr[i])
    }
    return firstTwo
}

const returnLastTwoDrivers = (arr) => {
    let lastTwo = []
    for (let i = arr.length-2; i < arr.length; i++) {
        lastTwo.push(arr[i])
    }
    return lastTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return (fare) => {
        return fare*multiplier
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, fxn) {
    return fxn(arrayOfDrivers)
}