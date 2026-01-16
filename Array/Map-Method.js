var products = [
  { name: "Laptop", category: "Electronics", price: 45000, gst: 18, rating: 4.3, inStock: true,  brand: "Lenovo" },
  { name: "Mobile", category: "Electronics", price: 15000, gst: 12, rating: 4.7, inStock: false, brand: "Samsung" },
  { name: "Shoes", category: "Fashion",     price: 2000,  gst: 5,  rating: 4.1, inStock: true,  brand: "Nike" },
  { name: "Watch", category: "Accessories", price: 5000,  gst: 12, rating: 3.9, inStock: true,  brand: "Fossil" },
  { name: "Tablet", category: "Electronics", price: 22000, gst: 5, rating: 4.5, inStock: true,  brand: "Apple" },
  { name: "Headphones", category: "Electronics", price: 2000, gst: 18, rating: 4.2, inStock: false, brand: "Sony" }
];

console.log(typeof products)

// STEP 1: FILTER → Keep only Electronics AND only in stock
var filter = products.filter(function(item) {
    return item.category === "Electronics" && item.inStock === true
})

// STEP 2: MAP → Calculate GST amount & final price and return a clean object
var transformed = filter.map(function(item){
    var gstAmount = (item.price * item.gst) / 100
    var Netprice = (item.price + gstAmount)
    return {
    Product: item.name,
    Brand: item.brand,
    Available_stock: item.inStock,
    Product_Gst : item.gst,
    GSTAMOUNT : gstAmount,
    FinalPrice : Netprice,
    Product_Rating : item.rating
    }
})

// STEP 3: SORT → Highest price first (descending order)
var SORT = transformed.sort(function(a, b){

    /*
      HOW sort() WORKS INTERNALLY:

      - JavaScript compares TWO items at a time:
            a = current item
            b = next item

      - The RETURN VALUE decides their order:

            If (b - a) > 0   →  b comes BEFORE a
            If (b - a) < 0   →  a comes BEFORE b
            If (b - a) == 0  →  keep order same

      WHY b.FinalPrice - a.FinalPrice?

      → To sort from HIGH → LOW (descending):
            Bigger numbers should move UP
            Smaller numbers should move DOWN

      Example:
            a.FinalPrice = 20000
            b.FinalPrice = 50000

            return b - a
            = 50000 - 20000
            = 30000 (positive)

      A POSITIVE RESULT means:
            → put b ABOVE a
            → So 50000 goes BEFORE 20000
            → This creates descending order
    */

    return b.FinalPrice - a.FinalPrice;  
});


// FINAL OUTPUT
console.log("FILTERED PRODUCTS (Electronics + In Stock):");
console.log(filter);

console.log("TRANSFORMED PRODUCTS (After GST Calculation):");
console.log(transformed);

console.log("SORTED BY FINAL PRICE (High → Low):");
console.log(SORT);