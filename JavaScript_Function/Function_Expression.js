const calculateFinalPrice = function (price) {
  const taxRate = 0.18;
  return price + price * taxRate;
};

console.log(calculateFinalPrice(20));
console.log(calculateFinalPrice(50));
