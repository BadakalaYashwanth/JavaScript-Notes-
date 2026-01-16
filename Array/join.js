var cities = ["Delhi", "Hyd", "Mumbai", "Chennai", "Bangalore"];

console.log(`Type of cities      : ${typeof cities}`);

var result = cities.join("  ");   // double space separator

console.log(`Type after join()   : ${typeof result}`);
console.log(`Joined cities       : ${result}`);
