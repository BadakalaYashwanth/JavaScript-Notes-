console.log("JavaScript provides various methods for presenting numbers.");

var _amountValue = 1000.00;

// toFixed returns a STRING, so we store them
let fixed2 = _amountValue.toFixed(2);
let fixed4 = _amountValue.toFixed(4);

console.log("Original:", _amountValue);
console.log("Fixed 2 decimals:", fixed2);
console.log("Fixed 4 decimals:", fixed4);


// checking types
console.log("Type of fixed2 =", typeof fixed2);
console.log("Type of fixed4 =", typeof fixed4);