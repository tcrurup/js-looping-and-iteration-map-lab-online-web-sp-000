// Code your solution in this file.

function lowerCaseDrivers(driverArray){
  
  lowerCasedArray = driverArray.map( function(driver){
    return driver.toLowerCase();
  })
  
  return lowerCasedArray;
}