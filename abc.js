console.log("test console log");


// Data types in js
// 7 primitives    ->  Number, String, BigInt, null, undefined, Symbol, 
// arryes and objects


// Variable declaration in js

var a = 3;      //var varibales can be declare multiple times and having globale scope

var a = 1;
console.log(a);

let b = 2;      //let varibale can be declare only once but can be updated multiple times and have block scope

b = 9;
console.log(b);

const c = 6;    //const variable value cannot be updated.

console.log(c);




// Objects in JS
const product = {
    productName : "TV",
    rating : 4,
    price : 300,
    offer : 40
};

console.log(product);


// Access object variables
// way 1
console.log("rating : " + product.rating);
// way 2
console.log("price : " + product["price"]);


// update object variable value
product.price = product.price + 1;
console.log("price : " + product.price);

product["price"] = product["price"] + 1;
console.log("price : " + product["price"]);

// Note : We can update const object variables but cannot update const variables itself (Memory address should not be change)

