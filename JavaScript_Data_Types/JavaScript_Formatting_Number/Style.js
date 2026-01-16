var _priceAmount = 100000000000;
var _percentageAmount = 0.74645;
var _weightUnit  = 56;

// Currency formatting
let _valueOfPriceIndia = _priceAmount.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR"
});

let _valueOfPriceUSA = _priceAmount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
});

// Percentage formatting
let _amountPercentage = _percentageAmount.toLocaleString("en-IN", {
    style: "percent"
});

// Unit formatting
let _weightUnited = _weightUnit.toLocaleString("en-IN", {
    style: "unit",
    unit: "kilogram"
});

// Output
console.log("Indian Currency:", _valueOfPriceIndia);
console.log("US Currency:", _valueOfPriceUSA);
console.log("Percentage:", _amountPercentage);
console.log("Weight:", _weightUnited);
