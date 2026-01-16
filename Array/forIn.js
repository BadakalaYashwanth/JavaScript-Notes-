var cart = [
  { name: "Laptop", price: 45000, qty: 1, gst: 18, discount: 10 },
  { name: "Mouse", price: 800, qty: 2, gst: 12, discount: 0 },
  { name: "Keyboard", price: 1200, qty: 1, gst: 12, discount: 5 },
  { name: "Monitor", price: 9000, qty: 1, gst: 18, discount: 8 }
];

var grandTotal = 0;

console.log("Bill Details");
console.log("-----------");

// Using for..in → i = index number (as string)
for (var i in cart) {

    var item = cart[i]; // MUST DO THIS to get actual object

    var baseAmount = item.price * item.qty;

    var discountAmount = (baseAmount * item.discount) / 100;

    var priceAfterDiscount = baseAmount - discountAmount;

    var gstAmount = (priceAfterDiscount * item.gst) / 100;

    var finalAmount = priceAfterDiscount + gstAmount;

    grandTotal += finalAmount;

    console.log(`
Item: ${item.name}
Quantity: ${item.qty}
Base Amount: ₹${baseAmount}
Discount (${item.discount}%): -₹${discountAmount}
GST (${item.gst}%): +₹${gstAmount}
Final Price: ₹${finalAmount}
----------------------------
`);
}

console.log(`GRAND TOTAL: ₹${grandTotal}`);
