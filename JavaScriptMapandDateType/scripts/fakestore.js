

function LoadProducts(){

    document.querySelector("section").innerHTML = "";

    fetch(`https://fakestoreapi.com/products`)

    .then(function(response){

        return response.json();

    })

    .then(function(products){

        products.map(function(product){

              

              var div = document.createElement("div");

              div.className = "card m-2 p-2";

              div.style.width = "200px";

              div.innerHTML = `

                  <img class="card-img-top" src=${product.image} height="120">

                  <div class="card-header overflow-auto" style="height:120px">

                     ${product.title}

                  </div>

                  <div class="card-body>

                     <dl>

                       <dt> Price </dt>

                       <dd> ${product.price} </dd>

                       <dt> Rating </dt>

                       <dd> ${product.rating.rate} <span class="bi bi-star-fill text-success"></span> </dd>

                     </dl>

                  </div>

                  <div class="card-footer">

                    <button onclick="AddClick(${product.id})" class="btn btn-warning bi bi-cart4 w-100"> Add to Cart </button>

                  </div>

              `;

              document.querySelector("section").appendChild(div);



        })

    })

}





function bodyload(){

    LoadProducts();

    GetCartCount();

}



function FilterProducts(categoryName){

     document.querySelector("section").innerHTML = "";

    fetch(`https://fakestoreapi.com/products`)

    .then(function(response){

        return response.json();

    })

    .then(function(products){



        var query = products.filter(function(product){

             return product.category === categoryName;

        })



        query.map(function(product){

              

              var div = document.createElement("div");

              div.className = "card m-2 p-2";

              div.style.width = "200px";

              div.innerHTML = `

                  <img class="card-img-top" src=${product.image} height="120">

                  <div class="card-header overflow-auto" style="height:120px">

                     ${product.title}

                  </div>

                  <div class="card-body>

                     <dl>

                       <dt> Price </dt>

                       <dd> ${product.price} </dd>

                       <dt> Rating </dt>

                       <dd> ${product.rating.rate} <span class="bi bi-star-fill text-success"></span> </dd>

                     </dl>

                  </div>

                  <div class="card-footer">

                    <button  class="btn btn-warning bi bi-cart4 w-100"> Add to Cart </button>

                  </div>

              `;

              document.querySelector("section").appendChild(div);



        })

    })

}



function SearchClick(){

    var categoryname = document.getElementById("txtSearch").value;

    FilterProducts(categoryname);

}



function NavItemClick(categoryName){

    if(categoryName==="home"){

        LoadProducts();

    } else {

        FilterProducts(categoryName);

    }

}



var cartItems = [];

var cartItemsCount = 0;



function GetCartCount(){

    cartItemsCount = cartItems.length;

    document.getElementById("lblCount").innerHTML = cartItemsCount;

}



function AddClick(id){

    fetch(`https://fakestoreapi.com/products/${id}`)

    .then(function(response){

        return response.json();

    })

    .then(function(product){

         cartItems.push(product);

         alert(`${product.title}\nAdded to Cart`);

         GetCartCount();

    })

}



function ShowCartClick(){

    document.querySelector("tbody").innerHTML = "";

    cartItems.map(function(item){

         var tr = document.createElement("tr");

         var tdTitle = document.createElement("td");

         var tdImage = document.createElement("td");

         var tdPrice = document.createElement("td");



         tdTitle.textContent = item.title;

         tdImage.innerHTML = `<img src=${item.image} width="50" height="50">`;

         tdPrice.textContent = item.price;



         tr.appendChild(tdTitle);

         tr.appendChild(tdImage);

         tr.appendChild(tdPrice);



         document.querySelector("tbody").appendChild(tr);

    })

}
