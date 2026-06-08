// function overloading - function with same but different params

function add() {
    console.log(10 + 10); // 0 params
}

function add(a) {
    console.log(a + 10); // 1 param
}

function add(a, b) {
    console.log(a + b); // 2 params
}

add();        // NaN
add(10);      // NaN
add(10, 20);  // 30


// Spread Operator / Rest Operator (ES6)

function add(...numbers) {

    let sum = 0;

    for (let num of numbers) {
        sum = sum + num; // same as sum += num
    }

    console.log(`The sum is ${sum}`);

    return sum;
}

console.log(add(10));          // 10
console.log(add(10, 30));      // 40
console.log(add(10, 30, 40));  // 80