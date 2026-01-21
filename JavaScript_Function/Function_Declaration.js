calculateFinalPrice(100);
calculateFinalPrice(250);

function calculateFinalPrice(price) {
  const taxRate = 0.18;
  const finalPrice = price + price * taxRate;
  console.log(finalPrice);
}
