// Code your solution in this file.

function lowerCaseDrivers(driverArray){
  
  const lowerCaseArray = []
  
  for (const driver of driverArray){
    lowerCaseArray.push(driver.toLowerCase())
  }
  
  return lowerCaseArray;
}