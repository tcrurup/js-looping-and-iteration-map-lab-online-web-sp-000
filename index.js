// Code your solution in this file.

function lowerCaseDrivers(driverArray){
  
  const lowerCasedArray = driverArray.map( function(driver){
    return driver.toLowerCase();
  });
  
  return lowerCasedArray;
}