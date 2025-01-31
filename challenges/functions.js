// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
 * Create a higher-order function named consume that can take 3 parameters.
 * The first two parameters can accept any argument
 * The last parameter accepts a callback 
 * In the body of the function return the callback with the two parameters that you created
 */


/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers-
 * Create a function named multiply that returns the product of two numbers 
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */
function consume(x, y, cb) {
    return cb(x, y);
}

const add = (x, y) => {
    console.log(x + y);
}
const multiply = (x, y) => {
    console.log(x * y);
}
const greeting = function(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
}


// console.log(consume(1, 2, add));
// console.log(consume(2, 3, multiply));
// console.log(consume('Dan', 'Popolipolis', greeting));


/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2, 2, add); // 4
consume(10, 16, multiply); // 160
consume("Mary", "Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

/*
Explanation: 
nested function is able to look outside into the immediately surrounding window.. but myFunction() would not be able to look inside the function into the inner scope (it can't look into the "{}" and can only access that info if it was to be returned and that info was brought out with another variable.) functional scope can access global, just not the other way around unless brought out with return.
*/


const external = "I'm outside the function";

function myFunction() {
    console.log(external);
    const internal = "Hello! I'm inside myFunction!";

    function nestedFunction() {
        console.log(internal);
    };
    nestedFunction();
}
myFunction();