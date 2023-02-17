/* Homework 4
   Exercise 5 JavaScript code
   -- List of words
*/
const word = [];
add = prompt("Please enter a word, enter 'Stop' to stop:");
while (add.toLowerCase() !== "stop") {
   word.push(add);
   add = prompt("Please enter a word, enter 'Stop' to stop:");
}
for (let i = 0; i < word.length; i++) {
   console.log(word[i]);
}