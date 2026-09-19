```javascript
// WDD 131 - JavaScript Variables and Constants
// Variables and Constants Ponder

// ------------------------------------
// Constants and Variables
// ------------------------------------

// PI is a constant, so its value should not be changed.
const PI = 3.14;

// radius is a variable, so its value can be changed.
let radius = 3;

console.log("PI:", PI);
console.log("Radius:", radius);

// Calculate the area of a circle.
let area = PI * radius * radius;
console.log("Circle area:", area);

// Change the radius.
radius = 5;

console.log("New radius:", radius);

area = PI * radius * radius;
console.log("New circle area:", area);


// ------------------------------------
// Type Coercion
// ------------------------------------

const one = 1;
const two = "2";

console.log("one:", one);
console.log("two:", two);

// JavaScript can combine different data types.
console.log("one + two:", one + two);

// Number conversion allows us to add them as numbers.
console.log("Number(one) + Number(two):", Number(one) + Number(two));


// ------------------------------------
// Global and Block Scope
// ------------------------------------

let course = "CSE131";

if (true) {
    let student = "John";

    console.log("Course inside block:", course);
    console.log("Student inside block:", student);
}

console.log("Course outside block:", course);

// The variable student cannot be accessed here because
// it was declared inside the if block.
// console.log(student); // This would cause an error.
```
