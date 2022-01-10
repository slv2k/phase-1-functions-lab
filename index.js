// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    // returns the number of blocks given a value
    //return someValue - 42;
    if (someValue > 42) {
        return someValue - 42;
    } else {
        return (someValue - 42) * -1;
    }
}

function distanceFromHqInFeet(someValue) {
    if (distanceFromHqInBlocks(someValue) > 0) {
        return distanceFromHqInBlocks(someValue) * 264;
    } else {
        return distanceFromHqInBlocks(someValue) * -264;
    }
    
}

function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        return (destination - start) * 264;
    } else {
        return (destination - start) * -264;
    }
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
