/* Homework 4
   Exercise 1 JavaScript code
   -- Calculator
*/
// Prompt
num1 = Number(prompt("Please enter 1st number:"));
num2 = Number(prompt("Please enter 2nd number:"));
operation = prompt("Please enter mathematical operation:");
// Calculation
if (operation === "+") {
    console.log(`${num1} ${operation} ${num2} = ` + (num1 + num2));
}
else if (operation === "-") {
    console.log(`${num1} ${operation} ${num2} = ` + (num1 - num2));
}
else if (operation === "*") {
    console.log(`${num1} ${operation} ${num2} = ` + (num1 * num2));
}
else {
    console.log(`${num1} ${operation} ${num2} = ` + (num1 + num2));
}
