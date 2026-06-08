// add 2 numbers - declared
function add() {

    let c = 10 + 20;

    console.log(c);   // 30
}

// call function
add();


// find square of a number
function square() {

    let num = 5;

    console.log(num * num);   // 25
}

square();

// w.a.f to find area and perimeter of a circle
function circle() {

    let r = 7;

    let area = 3.14 * r * r;
    let perimeter = 2 * 3.14 * r;

    console.log("Area = " + area);
    console.log("Perimeter = " + perimeter);
}

circle();


// w.a.f to find Simple Interest
function simpleInterest() {

    let p = 1000;
    let t = 2;
    let r = 5;

    let si = (p * t * r) / 100;

    console.log("Simple Interest = " + si);
}

simpleInterest();






// find square of a number

// 1. without input and output
function square() {

    let num = 10;

    let res = num * num;

    console.log(res);   // 100
}

square();


// 2. with input and without output
function square1(num) {

    let res = num * num;

    console.log(res);   // 16
}

square1(4);


// 3. without input and with output
function square2() {

    let num = 6;

    return num * num;
}

console.log(square2()); // 36


// 4. with input and with output
function square3(num) {

    return num * num;
}

let res = square3(3);

console.log(`The square of the number is ${res}`);


// another example
function square4(num) {

    return num * num;
}

let num = 7;

let res1 = square4(num);

console.log(`The square of the ${num} is ${res1}`);


// assignment
// 4 types for finding area of a rectangle