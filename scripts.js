var tomatoes = { name: "Tomatoes", price: 2.99 };
var cucumber = { name: "Cucumbers", price: 0.99 };
var onions = { name: "Onions", price: 0.79 };

var groceryStore = { name: "Michael's corner market", products: [tomatoes, cucumbers, onions] };

var iPhone = { name: "iPhone", price: 699 };
var android = { name: "Android", price: 499 };
var windowsPhone = { name: "Windows Phone", price: 399 };

var phoneStore = { name: "RadioShack", products: [iPhone, android, windowsPhone] };

var stores = [groceryStore, phoneStore];

stores.forEach(function(store){ 
  console.log(store.name + " sells:");
  store.products.forEach(function(products) {
    console.log(product.name);
  });
  console.log("\n");
});