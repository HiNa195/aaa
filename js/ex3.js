/* Homework 4
   Exercise 3 JavaScript code
   -- Modeling a circle
*/
const r = Number(prompt("Enter the circle radius:"));
const circle = {
   circumference() {
      return r * 2 * 3.14;
   },
   area() {
      return r * r * 3.14;
   },
}
console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);