// WDD 131 - JavaScript Variables and Constants

// Constants and Variables
const PI = 3.14;
let radius = 3;

console.log("PI:", PI);
console.log("radius:", radius);

radius = 10;
console.log("updated radius:", radius);

// Type Coercion
const one = 1;
const two = "2";

console.log("one:", one);
console.log("two:", two);
console.log("one + two:", one + two);
console.log("Number(one) + Number(two):", Number(one) + Number(two));

// Global and Block Scope
let course = "CSE131";

if (true) {
    let student = "John";

    console.log("course inside block:", course);
    console.log("student inside block:", student);
}

console.log("course outside block:", course);
