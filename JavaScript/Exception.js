console.log("Program Started");

try {
    let a = 10/b; // Exception will be thrown here because 'b' is not defined
    console.log(a);

} catch (error) {
    console.error("An error occurred:", error.message);
}
finally {
    console.log("Program Ended");
}

//Throw

let age = 22;

try {
    if (age < 18) {
        throw new Error("Age must be at least 18 to vote.");
    }
}
catch (e) {
    console.error(e.message);
}
finally {
    console.log("Thank you for using our voting system.");
}
