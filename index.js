// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers=function(){
     return drivers.slice(0,2);
}
const returnLastTwoDrivers=function(){
    return drivers.slice(-2)
}
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
const createFareMultiplier=function(fareMultiplier){
        return function(num){
            return fareMultiplier *num;

        }

    }
    const fareDoubler=createFareMultiplier(2);
    const fareTripler=createFareMultiplier(3);

  function  selectDifferentDrivers(drivers,driversToReturn){
        return  driversToReturn(drivers);
    }
    

