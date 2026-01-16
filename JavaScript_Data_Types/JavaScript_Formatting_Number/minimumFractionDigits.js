var _amountValue = 500893949.972345678;

let formattedPriceMinIN = _amountValue.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2
});

let formattedPriceMinUS = _amountValue.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 5
});

console.log(formattedPriceMinIN);
console.log(formattedPriceMinUS);
