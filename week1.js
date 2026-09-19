```javascript
// WDD 131 - Variables and Constants

// Constants and Variables
const PI = 3.14;
let radius = 3;

console.log("PI:", PI);
console.log("Radius:", radius);

let area = PI * radius * radius;
console.log("Circle area:", area);

// Change the radius
radius = 5;

console.log("New radius:", radius);

area = PI * radius * radius;
console.log("New circle area:", area);


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

    console.log("Course inside block:", course);
    console.log("Student inside block:", student);
}

console.log("Course outside block:", course);
```
