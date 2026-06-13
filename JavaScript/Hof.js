const output = document.getElementById("output");

function print(message){
    output.innerHTML += message + "<br>";
}

/* ==========================
   Higher Order Function
========================== */

function order(callprepare, callserve){

    print("1. Order Food");

    callprepare();

    callserve();
}

/* Callback Functions */

function prepare(){

    print("2. Preparation Started");

}

function servecustomer(){

    print("3. Enjoy Your Food");

}

/* ==========================
   Callback Example
========================== */

function greet(name){

    print(`Hello, ${name}!`);

}

function processUser(name, callback){

    callback(name);

}

/* ==========================
   Button Events
========================== */

document
.getElementById("btnOrder")
.addEventListener("click", () => {

    output.innerHTML = "";

    order(prepare, servecustomer);

});

document
.getElementById("btnUser")
.addEventListener("click", () => {

    output.innerHTML = "";

    processUser("Alice", greet);

});