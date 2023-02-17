/* Homework 4
   Exercise 2 JavaScript code
   -- Function – Convert Fahrenheit to Celsius 
*/
// Input
f1 = Number(prompt("Please enter 1st Fahrenheit degree:"));
f2 = Number(prompt("Please enter 2nd Fahrenheit degree:"));
f3 = Number(prompt("Please enter 3rd Fahrenheit degree:"));
// Function call
let a = myFunction(f1)
let b = myFunction(f2)
let c = myFunction(f3)
// Output
console.log(`${f1} degrees Fahrenheit =  ${a} degrees Celsius`);
console.log(`Temperature of ${f2} Fahrenheit is equivalent to ${b} degrees Celsius`);
console.log(`Water boiling temperate is ${f3} Fahrenheit or ${c} Celsius`);
function myFunction(f) {
    return (f - 32) * (5 / 9);
}