/* Homework 4
   Exercise 7 JavaScript code
   -- Guess Number
*/
const a = Math.floor(Math.random() * 100 + 1);
var i = 1;
x = Number(prompt("Make a guess:"));
while (x !== a) {
   if (x < a) {
      x = Number(prompt("Too low, guess again"));
   }
   else if (x > a) {
      x = Number(prompt("Too high, guess again"));
   }
   i++;
}
console.log(`Correct!  It took you ${i} attempts to guess the correct number.`);