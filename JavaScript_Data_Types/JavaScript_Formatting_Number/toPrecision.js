console.log("JavaScript provides various methods for presenting numbers.");

var _amountValue = 1000.00;

let precision_value1 = _amountValue.toPrecision(2);
let precision_value2 = _amountValue.toPrecision(4);

// New: formatting using toLocaleString()
let localValue = _amountValue.toLocaleString("en-IN");
let usValue = _amountValue.toLocaleString("en-US");

console.log("Original:", _amountValue);
console.log("Precision (2 digits):", precision_value1);
console.log("Precision (4 digits):", precision_value2);

console.log("Indian Format:", localValue);
console.log("US Format:", usValue);

// checking types
console.log("Type of precision_value1 =", typeof precision_value1);
console.log("Type of precision_value2 =", typeof precision_value2);
