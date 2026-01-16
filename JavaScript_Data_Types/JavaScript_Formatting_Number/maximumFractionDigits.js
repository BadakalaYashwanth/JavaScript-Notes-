var _amountValue = 500893949.975446789658;

let formattedprice = _amountValue.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2
});

let formattedpriceusa = _amountValue.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 3
});

console.log(formattedprice);
console.log(formattedpriceusa);
