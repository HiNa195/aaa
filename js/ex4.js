/* Homework 4
   Exercise 4 JavaScript code
   -- Arrays
*/
const values = [3, 11, 7, 2, 9, 10];
let sum = 0, min = Infinity, max = -Infinity;
for (let i = 0; i < values.length; i++) {
  sum += values[i];
}
for (let i = 0; i < values.length; i++) {
   if (values[i] < min) {
      min = values[i];
   }
}
for (let i = 0; i < values.length; i++) {
   if (values[i] > max) {
      max = values[i];
   }
}
console.log(`Sum of all array values: ${sum}`);
console.log(`Minimum value: ${min}`)
console.log(`Maximum value: ${max}`)