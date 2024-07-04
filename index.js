// Code your solution in this file!
const returnFirstTwoDrivers = (names = ['Antonia', 'Nuru', 'Amari', 'Mo'] ) => [names[0], names[1]];
const returnLastTwoDrivers = (names = ['Antonia', 'Nuru', 'Amari', 'Mo'] ) => [names[2], names[3]];
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(integer){
    return function(fare){
       return integer * fare
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(names, selectedDriver) {
  return selectedDriver(names);
}