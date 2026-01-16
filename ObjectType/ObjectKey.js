var tv = {
    name: "Samsung TV",
    brand: "Samsung",
    model: "Crystal 4K",
    category: "Electronics",
    screenSize: "55 inch",
    resolution: "4K UHD",
    displayType: "LED",
    color: "Black",
    warranty: "2 Years",
    countryOfOrigin: "India",
    seller: "Samsung Official Store",
    price: 56000,
    qty: 1
};



Object.keys(tv).map(function (item){
    console.log(`${item}: ${tv[item]} \n`)
})

