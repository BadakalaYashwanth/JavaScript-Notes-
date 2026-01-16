// Main product dataset.
// Each object represents a product record in our system.
let products = [
  {
    id: 101,
    title: "Fjallraven, Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    category: "men's clothing",
    rating: { rate: 3.9, count: 120 }
  },
  {
    id: 102,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    category: "men's clothing",
    rating: { rate: 4.1, count: 259 }
  },
  {
    id: 103,
    title: "Mens Cotton Jacket",
    price: 55.99,
    category: "men's clothing",
    rating: { rate: 4.7, count: 500 }
  }
];

// Create a Map that will act as our data container.
// This allows us to organize multiple datasets using meaningful keys.
let productdetails = new Map();

// Store the products dataset inside the Map.
// Key = "Product-Details", Value = products array.
productdetails.set("Product-Details", products);

// Retrieve the stored dataset from the Map so we can work with it.
let result = productdetails.get("Product-Details");

// Read specific information from the dataset.
console.log("First Product ID:", result[0].id);
console.log("Second Product Name:", result[1].title);
console.log("Third Product Rating:", result[2].rating);
console.log("Second Product Price:", result[1].price);

// Verify that the dataset exists in the Map.
console.log("Has Product-Details:", productdetails.has("Product-Details"));

// Display how many datasets are currently stored in the Map.
console.log("Map Size:", productdetails.size);

// List all dataset keys stored in the Map.
for (let key of productdetails.keys()) {
    console.log("Key:", key);
}

// Display every dataset value stored in the Map.
for (let value of productdetails.values()) {
    console.log("Value:", value);
}

// Display each key with its corresponding dataset.
for (let [key, value] of productdetails.entries()) {
    console.log("Entry:", key, value);
}

// Remove the products dataset from the Map.
productdetails.delete("Product-Details");
console.log("Size after delete:", productdetails.size);

// Insert new temporary datasets into the Map.
productdetails.set("temp", [1, 2, 3]);
productdetails.set("demo", ["A", "B"]);

// Completely clear the Map and free all stored data.
productdetails.clear();
console.log("Final Map Size:", productdetails.size);
