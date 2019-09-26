// Code your solution in this file.

function lowerCaseDrivers(driverArray){
  
  const lowerCasedArray = driverArray.map(function(driver){
    return driver.toLowerCase();
  });
  
  return lowerCasedArray;
}

function nameToAttributes(driverArray){
  
  const driverObjectsArray = driverArray.map(function(driver){
    
    splitName = driver.split(" ");
    driverObject = {
      firstName: splitName[0],
      lastName: splitName[1]
    };
    
    return driverObject;
  });
}