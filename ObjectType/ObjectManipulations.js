var tv = {
    name: "Samsung TV",
    brand: "Samsung",
    model: "Crystal 4K",
    category: "Electronics",

    colors: ["Black"],
    price: 56000,
    qty: 1,
    stock: "Available",

    cities: ["Delhi", "Mumbai", "Hyderabad"],

    rating: {
        rate: 4.6,
        count: 180
    },
    
    total: function () {
        return this.qty * this.price;
    }
    
};

tv.cities.push("Visakhaptanam", "Bangolore")
tv.rating.rate = 4.9
console.log(tv)